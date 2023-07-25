const db = require("../util/database");

const products = [];

module.exports = class Product {
  constructor(
    id,
    title,
    category,
    price,
    imageUrl_1,
    imageUrl_2,
    imageUrl_3,
    imageUrl_4,
    imageUrl_5,
    description
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.imageUrl_1 = imageUrl_1;
    this.imageUrl_2 = imageUrl_2;
    this.imageUrl_3 = imageUrl_3;
    this.imageUrl_4 = imageUrl_4;
    this.imageUrl_5 = imageUrl_5;
    this.description = description;
  }
  save() {
    return db.execute(
      "INSERT INTO products (title, category, price, imageUrl_1, imageUrl_2, imageUrl_3, imageUrl_4, imageUrl_5, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        this.title,
        this.category,
        this.price,
        this.imageUrl_1,
        this.imageUrl_2,
        this.imageUrl_3,
        this.imageUrl_4,
        this.imageUrl_5,
        this.description,
      ]
    );
  }

  static deleteById(id) {}
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
  static findById(id) {}
};
