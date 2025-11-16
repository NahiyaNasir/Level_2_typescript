const car: { brand: string; model: string; year: number } = {
  brand: "bmw",
  model: " yeamah",
  year: 2021,
};
console.log(car);

const colors: string[] = ["red", "blue", "green"];
console.log(colors);
const topple: [string, number, boolean] = [" nahu", 23, false];
console.log(topple);
function add(a: number, b: number): number {
  return a * b;
}
const result = add(65 * 45, 98 * 46);
console.log(result);
type User = {
  id: number;
  readonly name: string;
  email: string;
  age?: number;
  isActive?: boolean;
};

let person: User = {
  id: 98,
  name: "Esha",
  email: "nahar@gmail.com",
  isActive: false,
  age: 21,
};
console.log(person);
