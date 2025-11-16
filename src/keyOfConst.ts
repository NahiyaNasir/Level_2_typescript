const pickKey = <T, k extends keyof T>(obj: T, key: k): T[k] => {
  return obj[key];
};
const car = { brand: "Tesla", model: "S", year: 2023 };
console.log(pickKey(car, "year"));

//    2
interface Product {
  id: number;
  title: string;
  price: number;
}
const getProduct = <T, k extends keyof T>(item: T, key: k): T[k] => {
  return item[key];
};

const p: Product = { id: 10, title: "Laptop", price: 900 };

console.log(getProduct(p, "price"));

// ? 3
const mergedObj = <A, B, k extends keyof A & keyof B>(
  obj1: A,
  obj2: B,
  key: k
): B[k] => {
  return obj2[key];
};
console.log(mergedObj({ x: 1, y: 2 }, { y: "yes", z: 99 }, "y"));
//  console.log( mergedObj({ x: 1 }, { a: 10 }, "x"));

// 4

// ?| T                    | পুরো object                                      |
// ?| K extends keyof T    | T এর first-level key                             |
// ?| S extends keyof T[K] | সেই nested key, যেটা first-level key এর নিচে আছে |

//? একটা function বানাও: getNestedValue.
const student = {
  info: {
    name: "Nahia",
    age: 21,
  },
  marks: {
    math: 95,
    english: 88,
  },
};
const getNestedValue = <T, k extends keyof T, S extends keyof T[k]>(
  obj: T,
  section: k,
  key: S
) => {
  return obj[section][key];
};
console.log(getNestedValue(student, "marks", "english"));

//  4
const pick = <T, K extends keyof T>(items: T[], key: K):T[K][] => {
  return items.map(item=> item[key])
};

//* Return type → T[K][]

//* T[K] মানে key এর value type:

// *যদি key = "name" → string

//* যদি key = "id" → number

//* সুতরাং return হবে:

// *"name" দিলে: string[]

// *"id" দিলে: number[]
const users = [
  { id: 1, name: "Nahia" },
  { id: 2, name: "Esha" },
  { id: 3, name: "Anik" },
];

console.log(pick(users, "name"));  
// ["Nahia", "Esha", "Anik"]

console.log(pick(users, "id"));    
// [1, 2, 3]

