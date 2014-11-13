/**
Christian Arboleda
 Functions
 WPF 1141
 11-12-2014
 */


//alert("good to go");


//function call for calc area

calcArea();

function printHello(){
    //inside of the function
    console.log("hello");
}

//create a 2nd function that prints more
function printMore(){
    console.log("Print more text");
}




//function call - "go" button of factory
// functionName();

printHello();
printMore();
printHello();

printMore();



//create a function that will calculate the area of a rectangle

function calcArea(){
    //create variables for width, height and area.
     var width=20;
    var height=30;
    var are=width*height;

    //print the area
    console.log("your rectangle has an area of "+area);
}