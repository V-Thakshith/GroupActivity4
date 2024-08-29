// Product.js
class Product {
    constructor(productName, cost, availability) {
      this.productName = productName;
      this.cost = cost;
      this.availability = availability;
    }
  
    displayProduct() {
      return `Product Name: ${this.productName}, Cost: $${this.cost}, Availability: ${this.availability ? 'In Stock' : 'Out of Stock'}`;
    }
  }
  
  export default Product;
  