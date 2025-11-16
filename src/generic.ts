
// ? generic with interface

 interface  ResponseData<T>{
   status:number
   message:string
     data:T


 }
  interface User{
     name:string
       email:string
        id:number

  }
//   2
  interface Pair<T,U>{
  FIRST:T
   SC:U
  }

     const pair:Pair<number,string>={
         FIRST: 87,
          SC:'scuff'
     }
//    3

// ? generic with function


   


  const getFirstItem=<T>(arr:T[]):T| undefined=>{
       return  arr[0]
  }
console.log(getFirstItem<number>([10, 20, 30])); // Output: 10
console.log(getFirstItem<string>(["apple", "banana", "cherry"])); // Output: "apple"
console.log(getFirstItem<boolean>([true, false, true]))

  const mergeObjects=<T,U>(obj1:T,obj2:U):T&U=>{
  return    {...obj1, ... obj2}
  
  }


//   function filterItems<T>(arr: T[], condition: (item: T) => boolean): T[] {
//   return arr.filter(condition);
// }
  const filterItems=<T>(arr:T[] , condition: (item: T)=> boolean):T[]=>{
       return arr.filter(condition);    
  }
  const numbers = [1, 2, 3, 4, 5, 6];

const result = filterItems(numbers, (n) => n > 3);

console.log(result); 