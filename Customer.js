// Customer.js
import Cart from './Cart.js';

class Customer {
  constructor(customerName, address) {
    this.customerName = customerName;
    this.address = address;
    this.cart = new Cart();
  }

  addToCart(product) {
    this.cart.addProduct(product);
  }

  removeFromCart(productName) {
    this.cart.removeProduct(productName);
  }

  displayCustomer() {
    return `Customer Name: ${this.customerName}\nAddress: ${this.address}\nCart:\n${this.cart.displayCart()}\nTotal Cost: $${this.cart.getTotalCost()}`;
  }
}

export default Customer;
