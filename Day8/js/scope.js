/**
 * Created by bocaraca on 11/12/14.
 */



//alert("good to go");

//Variable scope
//variables inside and outside of the scope

//we try to not use the same names for variables... BUT
//in large files this is going to be impossible.

//when you create a variable inside of a function, it only exists
//inside of that one function



//create a variable for width (main code)


var width=5;    //scoped outside of the function or scoped to the main code
console.log("starting width in main code is "+width);
//create a function that calculates the perimeter of a rectangle.

function calcPeri(){
    var width=10;   //scoped to the function calcPeri
    console.log("Inside of the funtion, the width is "+width);
    var height=20;
    var perimeter=width*2+height*2;

    console.log("inside of function the perimeter "+perimeter);


}

console.log("before function call "+width);
calcPeri();
console.log("after function call "+width);
