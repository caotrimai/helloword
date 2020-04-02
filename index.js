let Mouse = require('./Mouse');
let Cat = require('./Cat');
let Dog = require('./Dog');

let mickey = new Mouse('Mickey');
let tom = new Cat('Tom');
let ngao = new Cat('ngao');
tom.eat(mickey);

console.log(tom);
