import { ObjectId } from "mongodb";
import database from "../database/database.js";
const { usersCollection, sessionsCollection, productsCollection } = database;

export default class CartControllers {
  async addToCart(req, res) {
    try {
      const { skuId } = req.params;
      const user = await usersCollection.findOne({ _id: res.locals.userId });
      user.cart.push({ skuId: new ObjectId(skuId), quantity: 1 });
      console.log(user);
      await usersCollection.updateOne(
        { _id: res.locals.userId },
        { $set: user }
      );
      res.status(201).send("OK");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async getCart(req, res) {
    try {
      const user = await usersCollection.findOne({ _id: res.locals.userId });
      let cartProducts = await Promise.all(
        user.cart.map(async (each) => {
          const product = await productsCollection.findOne({
            skus: {
              $elemMatch: { _id: each.skuId },
            },
          });
          const info = product.skus.find((sku) => sku._id !== each.skuId);
          const size = info.size;
          return {
            skuId: product._id,
            skuId: each.skuId,
            title: product.title,
            thumbnail: product.thumbnail,
            value: product.price.cents,
            quantity: each.quantity,
            size: size,
          };
        })
      );
      res.status(200).send(cartProducts);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}