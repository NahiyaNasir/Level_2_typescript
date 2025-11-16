
 function  add( a: number,b:number):number{
  return   a+b
 }

    function greet( name:string):string{
         return   "hello world"
    }
     console.log( greet(''))

       function isEven(num:number):boolean{
     if( num % 2 === 0){
         return  true
     }
      return false
       }
         console.log(isEven(6));
           const divide=(x:number,y:number) :number=>{
                  return       x/y
           } 
          
           
            console.log(divide(6,2));
type Operation = (x: number, y: number) => number;

 const sumOperation:Operation=( x,y)=>  x+y
   console.log( sumOperation(877,7556));
        