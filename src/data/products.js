import Product from "./Product";

const products = [
  new Product(1, "T-shirt", 25.99, 0.1, ["red", "blue", "pink"]),
  new Product(2, "Sneakers", 79.99, 0.2, ["white", "black"]),
  new Product(3, "Jeans", 49.99, 0.15, ["blue"], true),
  new Product(4, "Dress", 39.99, 0.1, ["pink", "purple", "blue"]),
  new Product(5, "Hat", 14.99, 0.05, ["black", "blue"]),
  new Product(6, "Backpack", 32.99, 0.2, ["green", "blue", "purple"]),
  new Product(7, "Shorts", 19.99, 0.1, ["yellow", "orange"]),
  new Product(8, "Sweater", 44.99, 0.15, ["gray", "springgreen"]),
  new Product(9, "Sandals", 29.99, 0.2, ["brown"], true),
  new Product(10, "Jacket", 69.99, 0.1, ["black", "blue", "green"]),
];

// Set image URLs for each product and color
products[0].setImageUrl("red", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/t-shirt-red.png");
products[0].setImageUrl("blue", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/t-shirt-blue.png");
products[0].setImageUrl("pink", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/t-shirt-pink.png");

products[1].setImageUrl("white", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/sneakers-white.png");
products[1].setImageUrl("black", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/sneakers-black.png");

products[2].setImageUrl("blue", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/jeans-blue.png");

products[3].setImageUrl("pink", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/dress-pink.png");
products[3].setImageUrl("purple", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/dress-purple.png");
products[3].setImageUrl("blue", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/dress-blue.png");

products[4].setImageUrl("black", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/hat-black.png");
products[4].setImageUrl("blue", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/hat-blue.png");

products[5].setImageUrl("green", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/backpack-green.png");
products[5].setImageUrl("blue", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/backpack-blue.png");
products[5].setImageUrl("purple", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/backpack-purple.png");

products[6].setImageUrl("yellow", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/short-yellow.png");
products[6].setImageUrl("orange", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/short-orange.png");

products[7].setImageUrl("gray", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/sweater-gray.png");
products[7].setImageUrl("springgreen", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/sweater-green.png");

products[8].setImageUrl("brown", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/sandals-brown.png");

products[9].setImageUrl("black", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/jacket-black.png");
products[9].setImageUrl("blue", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/jacket-blue.png");
products[9].setImageUrl("green", "https://media.aykhan.net/assets/images/step-it-academy/react/task3/products/jacket-green.png");

export default products;