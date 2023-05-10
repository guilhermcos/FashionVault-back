import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGO_URI;

const mongoClient = new MongoClient(`mongodb+srv://guigc0408:040800@cluster0.vhpj7hr.mongodb.net/?retryWrites=true&w=majority`);

try {
  await mongoClient.connect();

  console.log(`Database connection established successfully`);
} catch (err) {
  throw err;
}

const db = mongoClient.db();
const usersCollection = db.collection("users");
const productsCollection = db.collection("products");
const ordersCollection = db.collection("orders");
const paymentsCollection = db.collection("payments");
const sessionsCollection = db.collection("sessions");

export default {
  usersCollection,
  productsCollection,
  ordersCollection,
  paymentsCollection,
  sessionsCollection,
};
