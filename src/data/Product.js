class Product {
  constructor(id, name, price, discount, colors, isExpired = false) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.colors = colors;
    this.imageUrls = {};
    this.isExpired = isExpired;
  }

  setImageUrl(color, imageUrl) {
    this.imageUrls[color] = imageUrl;
  }

  getImageUrl(color) {
    return this.imageUrls[color];
  }
}

export default Product;
