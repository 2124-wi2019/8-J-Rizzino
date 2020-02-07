/* Julie Rizzino
rizzino_a08b.js
INFO 2124
Thoendel
2/5/20 */

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
let MathUtility = {
//declaring object MathUtility
    getAreaOfCircle(radius){
        return Math.PI * radius * radius
    },
    //method getAreaOfCircle returns the area of the circle using pi multiplied by the radius squared.
    getAreaOfSquare(side){
        return side * side
    },
    //method getAreaOfSquare returns the area of the square by squaring the side.
    getAreaOfTriangle(base,height){
        return (height * base) / 2
    },
    //method getAreaOfTriangle returns the area of the triangle by multiplying the height and the base and dividing it by 2.
}
/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);