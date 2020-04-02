function Mouse(name) {
    this.name = name;
    this.death = false;
}

Mouse.prototype.move(){
    console.log('I\'m moving... ');
}

Mouse.prototype.death(){
    this.death =true;
}

module.exports = Mouse;