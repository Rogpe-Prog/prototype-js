const p1 = {
    name: "Computer",
    price: 3000.0,
    quantity: 2
}

//Function Constructor:

//Define properties on function constructor
const Product = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

//defined method on Prototype
Product.prototype.total = function(){
    return this.price * this.quantity;
}

Product.prototype.add = function(amount) {
    this.quantity += amount;
}

Product.prototype.remove = function() {
    if(this.quantity >= amount){
        this.quantity -= amount;
    }
}

Product.prototype.label = function() {
    return "Data: " + this.name + ", " + this.price;
}

const p2 = new Product("Monitor", 3000.0, 10);


const p3 = new Product("Mouse", 50.0, 4);


