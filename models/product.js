const db = require("../util/database");

const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {}

  static deleteById(id) {}
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
  static findById(id) {}
};
