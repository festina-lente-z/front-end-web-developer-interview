function Product(name, price) {
  this.name = name;
  this.price = price;
  return `name is ${this.name} and price is ${this.price}`
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);