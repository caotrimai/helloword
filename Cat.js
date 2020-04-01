function Cat(name) {
    this.name = name;
    this.stomach = [];
}

Cat.prototype.eat(mouse){
this.stomach.push(mouse);
}

module.exports = Cat;