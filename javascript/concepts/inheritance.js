// ES5
function Animal() {
  this.type = "animal";
}

Animal.prototype.speak = function() {
  console.log(this.type);
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Cat() {
  Animal.call(this);
  this.name = "kitty";
}

//ES6
class Animal {
  constructor() {
    this.type = "animal";
  }
  speak() {
    console.log(this.type);
  }
}

class Cat extends Animal {
  constructor() {
    super();
    this.name = "kitty";
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
