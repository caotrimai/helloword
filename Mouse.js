function Mouse(name) {
    this.name = name;
}

Mouse.prototype.move(){
    console.log('I\'m moving... ');
}

module.exports = Mouse;