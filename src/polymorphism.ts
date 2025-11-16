class Shape {
    getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
    radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  // area= height*width

  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}
const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

getArea(shape3);
getArea(shape2);
getArea(shape1);


// 200
// 314.1592653589793
// 0



// ?একটা function লেখো printSound(animal: Animal)
//? Dog, Cat, Cow—practically তিনটা class বানাও Animal extend করে এবং override করে।

//? Function টি animal অনুযায়ী sound print করবে।

class Animal {
  
  makeSound() {
    console.log(` makes sound like`);
  }
}
class Dog extends Animal {
  makeSound() {
    console.log(`  dog makes sound like berks `);
  }
}
class Cat extends Animal {
  makeSound() {
    console.log(`cat makes sound like mewo `);
  }
}
class Cow extends Animal {
  makeSound() {
    console.log(` dog  makes sound like hamba `);
  }
}
 const printSound=(param:Animal)=>{
    param.makeSound()
 }
   const person1 = new Dog();
const person2 = new Cat();
const person3 = new Cow();
printSound(person1)
printSound(person2)
printSound(person3)