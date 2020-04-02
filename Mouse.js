function Mouse(name) {
    this.name = name;
}

Mouse.prototype.move = () => {
    console.log('I\'m moving... ');
}

Mouse.prototype.death = function(){
    this.death =true;
}

module.exports = Mouse;