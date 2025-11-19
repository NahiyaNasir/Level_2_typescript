
//? Shape নামে abstract class
//? Abstract method: getArea()
//? Rectangle, Circle–extend করে calculate area.

 abstract class Shape{
  abstract   getArea():number
 }

   class Rectangle extends Shape{
     constructor( public height:number, public width:number){
          super()
     }
    getArea(): number {
        return this.height* this.width
  }}
   class Circle extends Shape{
     constructor( public radius:number){
       super()
     }
    getArea(): number {
     return Math.PI *this.radius* this.radius
    }
  }

  const r = new Rectangle(5, 10);
console.log(r.getArea()); 

const c = new Circle(3);
console.log(c.getArea()); 
