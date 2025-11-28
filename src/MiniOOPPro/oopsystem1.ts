//? Problem:
//? A small OOP system —
//? Employee → Developer / Manager

//? Developer: languages

//? Manager: teamSize
//? Show profile() method override করে।

class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  showProfile() {
    return `Employee Profile: ${this.name}`;
  }
}

class Developer extends Employee {
  languages: string[];

  constructor(name: string, salary: number, languages: string[]) {
    super(name, salary);
    this.languages = languages;
  }

  showProfile() {
    return `Developer: ${this.name}, Knows: ${this.languages.join(", ")}`;
  }
}
class Manager extends Employee {
  teamSize: number;
  constructor( name: string,   teamSize: number, salary: number, ) {
    super(name, salary);
    this.teamSize = teamSize;
  }

    showProfile() {
        return `Manager: ${this.name}, Team size: ${this.teamSize}`;
    }
}

const dev = new Developer("Nahia", 50000, ["JavaScript", "TypeScript", "React"]);
console.log(dev.showProfile());

const mgr = new Manager("Esha", 80000, 10);
console.log(mgr.showProfile());
