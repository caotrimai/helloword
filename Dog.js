function Dog(name) {
    this.name = name;
    this.stomach =[];
}

Dog.prototype.eat(cat){
    this.stomach.push(cat);
}

module.exports = Dog;