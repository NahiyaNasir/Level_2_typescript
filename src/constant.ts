
 const print=<T extends {name:string,id:number}>(obj:T)=>{
       console.log( obj.name,obj.id)
 }

  (print({name:'hh',id:98}));
    const getLength=<T extends string|string[]>(arr:string|string[]):number=>{
              return arr.length
    }
    console.log(getLength("Hello"));

       interface  UserId{
         id:number
  name:string
   email:string

       }

        const getUserId=<T extends UserId>(obj:T):T=>{
               return   obj
        }
     const result= getUserId( { id:98,name:'heli',email:"v"})

      console.log(result);

        const  getValue=<T extends object, k extends keyof T>(object:T, key:k):T[k]=>{
            return object[key]
        }

        const person = { name: "Nahia", age: 21 };
             console.log( getValue(person,'age'))


             
