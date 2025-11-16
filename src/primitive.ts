let userName: string = " namibsrfb";
console.log(userName);

let age: number = 78;
console.log(age);
let isOnline: boolean = false;
console.log(isOnline);

// ?    Medium
const describeUser = (name: string, age: number, isOnline: true) => {
  return String;
};
console.log(describeUser("", 78, true));

//    ? harder
const uniqueId: symbol = Symbol("uniqueId");
const user = {
  id: uniqueId,
  name: "Nahia Esha",
};

console.log(user.id);
console.log(user.name);
function addBigNumbers(a: bigint, b: bigint): bigint {
  return a + b;
}
const result = addBigNumbers(99999989673n, 4677575868n);
console.log(result);
