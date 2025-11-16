type User2 = {
  id: number;
  name: string;
  active: boolean;
};

type ArrOfSting = {
  [key in "id" | "active"]: string;
};
const user: ArrOfSting = {
  id: "10",
  active: "66",
};
console.log(user);
// 2
//?  Make all fields readonly
type Car = { brand: string; year: number };
type MakeReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
const result: MakeReadonly<Car> = {
  brand: "",
  year: 877,
};

console.log(result);
// 3
//? Make all fields optional
type Product = { id: number; name: string; email: string };
type Partiality<T> = {
  [K in keyof T]?: T[K];
};

const p: Partiality<Product> = {
  id: 87,
  name: "uu",
};
console.log(p);

// 4
//? Remove readonly (Mutable)
type User = {
  readonly id: number;
  readonly name: string;
};
// 5
//  Convert only boolean fields to string
type Person = {
  name: string;
  age: number;
  active: boolean;
  verified: boolean;
};
type BooleanToString<T> = {
  [K in keyof T]: T[K] extends boolean ? string : T[K];
};
const re: BooleanToString<Person> = {
  name: "gg",
  age: 87,
  active: "tt",
  verified: "y",
};

//  6
//? Make all nested fields optional

type Profile = {
  id: number;
  info: {
    name: string;
    address: {
      street: string;
    };
  };
};
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

type OptionalProfile = DeepPartial<Profile>;