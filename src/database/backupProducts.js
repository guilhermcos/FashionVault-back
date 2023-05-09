import { ObjectId } from "mongodb";

const backupProducts = [
  {
    title: "Short Sleeve T-Shirt",
    gender: "Women",
    mainCategory: "Clothes",
    subCategory: "T-shirt",
    color: "Black",
    brand: "Hering",
    price: { cents: 6900, currency: "USD", discount: 15 },
    description: "A comfortable and stylish t-shirt.",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/711685/4H09-N10EN-C1.jpg?v=638171155652170000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/711700/4H09-N10EN-C3.jpg?v=638171155679870000",
      "https://hering.vtexassets.com/arquivos/ids/711707/4H09-N10EN-C4.jpg?v=638171155693800000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Short Sleeve T-Shirt",
    gender: "Women",
    mainCategory: "Clothes",
    subCategory: "T-shirt",
    color: "White",
    brand: "Hering",
    price: { cents: 6900, currency: "USD", discount: 0 },
    description: "A comfortable and stylish t-shirt.",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/710408/4H09-NMCEN-C1.jpg?v=638171135437900000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/710426/4H09-NMCEN-C4.jpg?v=638171135494530000",
      "https://hering.vtexassets.com/arquivos/ids/710419/4H09-NMCEN-C3.jpg?v=638171135473930000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Short Sleeve T-Shirt",
    gender: "Women",
    mainCategory: "Clothes",
    subCategory: "T-shirt",
    color: "Yellow",
    brand: "Hering",
    price: { cents: 6900, currency: "USD", discount: 25 },
    description: "A comfortable and stylish t-shirt.",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/711506/4H09-YVREN-C1.jpg?v=638171153694130000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/711517/4H09-YVREN-C3.jpg?v=638171153736430000",
      "https://hering.vtexassets.com/arquivos/ids/711522/4H09-YVREN-C4.jpg?v=638171153761130000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Short Sleeve Slim T-Shirt",
    gender: "Women",
    mainCategory: "Clothes",
    subCategory: "T-shirt",
    color: "Pink",
    brand: "Hering",
    price: { cents: 7900, currency: "USD", discount: 5 },
    description: "A comfortable and stylish slim t-shirt.",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/710508/4EYV-KNAEN-C1.jpg?v=638171139737400000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/710520/4EYV-KNAEN-C3.jpg?v=638171139769200000",
      "https://hering.vtexassets.com/arquivos/ids/710540/4EYV-KNAEN-C6.jpg?v=638171139814130000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Short Sleeve Slim T-Shirt",
    gender: "Women",
    mainCategory: "Clothes",
    subCategory: "T-shirt",
    color: "Blue",
    brand: "Hering",
    price: { cents: 7900, currency: "USD", discount: 25 },
    description: "A comfortable and stylish slim t-shirt.",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/521567/4EYV-A4DEN-C1.jpg?v=638176172062170000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/521568/4EYV-A4DEN-C2.jpg?v=638176172081970000",
      "https://hering.vtexassets.com/arquivos/ids/521572/4EYV-A4DEN-C6.jpg?v=638176172170770000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Short Sleeve Slim T-Shirt",
    gender: "Women",
    mainCategory: "Clothes",
    subCategory: "T-shirt",
    color: "Grey",
    brand: "Hering",
    price: { cents: 7900, currency: "USD", discount: 0 },
    description: "A comfortable and stylish slim t-shirt.",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/324239/4EYV-M2HEN-C1.jpg?v=638176307870070000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/324241/4EYV-M2HEN-C3.jpg?v=638176307898770000",
      "https://hering.vtexassets.com/arquivos/ids/324240/4EYV-M2HEN-C2.jpg?v=638176307883930000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Short Sleeve T-Shirt",
    gender: "Men",
    mainCategory: "Clothes",
    subCategory: "T-shirt",
    color: "Grey",
    brand: "Hering",
    price: { cents: 7900, currency: "USD", discount: 0 },
    description: "A comfortable and stylish slim t-shirt.",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/172440/0201-MD307S-C1.jpg?v=638181134312570000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/172442/0201-MD307S-C3.jpg?v=638181134347030000",
      "https://hering.vtexassets.com/arquivos/ids/172443/0201-MD307S-C4.jpg?v=638181134362470000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Short Sleeve T-Shirt",
    gender: "Men",
    mainCategory: "Clothes",
    subCategory: "Sweatshirt",
    color: "Brown",
    brand: "Hering",
    price: { cents: 8900, currency: "USD", discount: 0 },
    description:
      "Men's Comfort Sweatshirt, the must-have item to call your new favorite. Made from premium fleece sweatshirt fabric, it has a comfortable fit, soft touch, and high durability. It also features a V-shaped detail on the ribbed neckline, which enhances the basic look. Ideal to accompany you in moments that call for comfort.",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/720168/06HF-HCFEN-C2.jpg?v=638171157419170000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/720185/06HF-HCFEN-C4.jpg?v=638171157443570000",
      "https://hering.vtexassets.com/arquivos/ids/720162/06HF-HCFEN-C1.jpg?v=638171157405330000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Sweatshirt",
    gender: "Men",
    mainCategory: "Clothes",
    subCategory: "Sweatshirt",
    color: "Green",
    brand: "Hering",
    price: { cents: 8900, currency: "USD", discount: 0 },
    description:
      "Men's Basic Comfort Sweatshirt made from 100% fleece cotton knit. The sweatshirt is an essential piece for colder days. The tip for this season is to invest in a sweatshirt with a comfort fit, which is slightly wider than other categories, but not too loose on the body. The model features a round neckline, fitted hem, and ribbed cuffs. Feel inspired and comfortable by pairing it with a Hering jeans!",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/566595/04T9-NATEN-C2.jpg?v=638175220519100000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/566596/04T9-NATEN-C4.jpg?v=638175220554000000",
      "https://hering.vtexassets.com/arquivos/ids/318180/04T9-NATEN-C1.jpg?v=638175220503670000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Sweatshirt",
    gender: "Men",
    mainCategory: "Clothes",
    subCategory: "Sweatshirt",
    color: "Grey",
    brand: "Hering",
    price: { cents: 8900, currency: "USD", discount: 0 },
    description:
      "Men's Basic Comfort Sweatshirt made from 100% fleece cotton knit. The sweatshirt is an essential piece for colder days. The tip for this season is to invest in a sweatshirt with a comfort fit, which is slightly wider than other categories, but not too loose on the body. The model features a round neckline, fitted hem, and ribbed cuffs. Feel inspired and comfortable by pairing it with a Hering jeans!",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/318047/04T9-M2H07S-C1.jpg?v=638182341988500000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/545031/04T9-M2H07S-C3.jpg?v=638182342015200000",
      "https://hering.vtexassets.com/arquivos/ids/756768/04T9-M2H07S-C5.jpg?v=638182342040900000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Shoulder Bag",
    gender: "Women",
    mainCategory: "Accessories",
    subCategory: "Bag",
    color: "Green",
    brand: "Hering",
    price: { cents: 5900, currency: "USD", discount: 0 },
    description:
      "Medium Women's Shoulder Bag. Made of polyurethane, a flexible and durable material. This bag has a medium size with a rectangular shape and more depth. It features a wide shoulder strap with adjustable length and snap button closure. Extremely practical and versatile. Definitely worth a try!",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/670203/KF8Z-1BSI-C2.jpg?v=638128488176130000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/670202/KF8Z-1BSI-C1.jpg?v=638128488150430000",
      "https://hering.vtexassets.com/arquivos/ids/670204/KF8Z-1BSI-C3.jpg?v=638128488190130000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Shoulder Bag",
    gender: "Women",
    mainCategory: "Accessories",
    subCategory: "Bag",
    color: "Brown",
    brand: "Hering",
    price: { cents: 5900, currency: "USD", discount: 0 },
    description:
      "Medium Women's Shoulder Bag. Made of polyurethane, a flexible and durable material. This bag has a medium size with a rectangular shape and more depth. It features a wide shoulder strap with adjustable length and snap button closure. Extremely practical and versatile. Definitely worth a try!",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/670193/KF8Z-1ASI-C2.jpg?v=638128503876300000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/670194/KF8Z-1ASI-C3.jpg?v=638128503893200000",
      "https://hering.vtexassets.com/arquivos/ids/670195/KF8Z-1ASI-C4.jpg?v=638128503904630000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Shoulder Bag",
    gender: "Women",
    mainCategory: "Accessories",
    subCategory: "Bag",
    color: "Blue",
    brand: "Hering",
    price: { cents: 5900, currency: "USD", discount: 0 },
    description:
      "Medium Women's Shoulder Bag. Made of polyurethane, a flexible and durable material. This bag has a medium size with a rectangular shape and more depth. It features a wide shoulder strap with adjustable length and snap button closure. Extremely practical and versatile. Definitely worth a try!",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/576566/KF6T-1CSI-C5.jpg?v=638065829359200000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/576564/KF6T-1CSI-C3.jpg?v=638065829289770000",
      "https://hering.vtexassets.com/arquivos/ids/576567/KF6T-1CSI-C6.jpg?v=638065829389700000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Sintetic Belt",
    gender: "Women",
    mainCategory: "Accessories",
    subCategory: "Belt",
    color: "Green",
    brand: "Hering",
    price: { cents: 5900, currency: "USD", discount: 0 },
    description:
      "Synthetic Women's Belt. Made of polyurethane synthetic material, it features a square buckle with rounded ends. A charm for your outfit and a stylish touch for all looks. Invest in it and rock it!",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/499484/KFKF-1DSI-C2.jpg?v=638055950969730000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/499483/KFKF-1DSI-C1.jpg?v=638055950959200000",
      "https://hering.vtexassets.com/arquivos/ids/499485/KFKF-1DSI-C3.jpg?v=638055950977930000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Seamless Bikini Panty",
    gender: "Women",
    mainCategory: "Intimates",
    subCategory: "Bikini",
    color: "Green",
    brand: "Hering",
    price: { cents: 2900, currency: "USD", discount: 0 },
    description:
      "Seamless Bikini Panty. Developed in polyamide with elastane that provides comfort and durability. Features a classic bikini cut with intermediate width on the sides and seamless design, not leaving marks under clothing. In the rush of daily life, it's necessary to have an intimate piece that not only provides comfort, but also allows for more security and freedom of movement, and this piece is ideal!",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/502296/KGDD-1BSN-C1.jpg?v=638182348211000000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/506062/KGDD-1BSN-C3.jpg?v=638182348241100000",
      "https://hering.vtexassets.com/arquivos/ids/502297/KGDD-1BSN-C2.jpg?v=638182348226370000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
  {
    title: "Seamless Bikini Panty",
    gender: "Women",
    mainCategory: "Intimates",
    subCategory: "Bikini",
    color: "Beige",
    brand: "Hering",
    price: { cents: 2900, currency: "USD", discount: 0 },
    description:
      "Seamless Bikini Panty. Developed in polyamide with elastane that provides comfort and durability. Features a classic bikini cut with intermediate width on the sides and seamless design, not leaving marks under clothing. In the rush of daily life, it's necessary to have an intimate piece that not only provides comfort, but also allows for more security and freedom of movement, and this piece is ideal!",
    thumbnail:
      "https://hering.vtexassets.com/arquivos/ids/500704/KGDD-1CSN-C1.jpg?v=638182337007530000",
    images: [
      "https://hering.vtexassets.com/arquivos/ids/500705/KGDD-1CSN-C2.jpg?v=638182337029130000",
      "https://hering.vtexassets.com/arquivos/ids/500706/KGDD-1CSN-C3.jpg?v=638182337049100000",
    ],
    skus: [
      {
        _id: new ObjectId(),
        size: "S",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "M",
        stock: 25,
      },
      {
        _id: new ObjectId(),
        size: "L",
        stock: 25,
      },
    ],
  },
];
export default backupProducts;
