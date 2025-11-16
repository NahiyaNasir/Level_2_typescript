class Parent {
  name: string;
  email: string;
  age: number;
  addresses: string;
  constructor(name: string, email: string, age: number, addresses: string) {
    this.name = name;
    this.age = age;
    this.addresses = addresses;
    this.email = email;
  }
  getSleep(numberOfHours: number) {
    console.log(` ${this.name} gumai ${numberOfHours} `);
  }
}

class Student extends Parent {}

const student22 = new Student("mahi", "asi@gmail", 27, "sdcxdg");
student22.getSleep(25);

class Teacher  extends Parent{
  designation: string;
  constructor( name: string, email: string, age: number, addresses: string,designation: string) {
    super(name,email,age, addresses)
    this.designation = designation;
  }
  takeClass(numberOfHours: number) {
    console.log(` ${this.name}  take class of ${numberOfHours} `);
  }
}

const teacher = new Teacher("mahi", "asi@gmail", 27, "sdcxdg",'senuor');
console.log(teacher);
teacher.takeClass(6);
