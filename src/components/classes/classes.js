export class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

export class Dog extends Animal {
  hear(){
     console.log(this.name + ' barks.');
  }
}

// var d = new Dog('Mitzie');
// d.speak(); // Mitzie barks.
