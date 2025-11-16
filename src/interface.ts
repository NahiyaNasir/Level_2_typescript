// 1

 interface Product{
     name: string;
       price:number,
        sky: string|number

 }
//  2
  interface UserProfile{
     readonly id: number
      username: string
       email:string
       profileImage?: string
        getDisplayName:()=> string
  }
 const profile: UserProfile = {
  id: 101,
  username: "j_doe",
  email: "j.doe@example.com",
  getDisplayName: function() {
    return this.username.toUpperCase();
  }
};  

//    3
  interface Vehicle{
     make:string
     model:string
      year:number
  }
   interface Car extends Vehicle{
    numberOfDoors:number
    isElectric: boolean
   }


   // Example usage:
const myTesla: Car = {
  make: "Tesla",
  model: "Model Y",
  year: 2023,
  numberOfDoors: 4,
  isElectric: true
};