// index.js
import Product from './Product.js';
import Customer from './Customer.js';

const prod1 = new Product('Laptop', 999.99, true);
const prod2 = new Product('Phone', 499.99, true);

const customer = new Customer('John Doe', '123 Main St, Anytown, USA');
customer.addToCart(prod1);
customer.addToCart(prod2);

console.log(customer.displayCustomer());
