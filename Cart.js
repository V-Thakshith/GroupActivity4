// Cart.js
import Product from './Product.js';

class Cart {
  constructor() {
    this.productList = [];
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.productList.push(product);
    } else {
      throw new Error('Invalid product');
    }
  }

  removeProduct(productName) {
    this.productList = this.productList.filter(p => p.productName !== productName);
  }

  getTotalCost() {
    return this.productList.reduce((total, product) => total + product.cost, 0);
  }

  displayCart() {
    return this.productList.map(product => product.displayProduct()).join('\n');
  }
}

export default Cart;
