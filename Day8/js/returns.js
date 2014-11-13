/**
 Christian Arboleda
 Returns
 WPF 1411
 11-12-2014
 */


//alert("good to go");


//returning values from a function
// or how do we get stuff out of "vegas"

//create a function are of rectangle

function calcArea(wid,len){
    var area = wid*len;

    console.log("the area of the rectangle is "+area);

    //return the area variable to the main code
    return area;


}


//function call
//in front of the function call catch the returned value with a variable
var returnedArea =calcArea(30,20);


console.log(returnedArea);


//prompt the user

var width=prompt("please enter a width");
var length=prompt("please enter a length");

var userRecArea=calcArea(width, length);

var userRecPeri=periRect(width, length);

console.log("the area of the rectangle with a "+width+" and a length of "+length+" is "+userRecArea+ ". \nThe perimeter is "+userRecPeri);


//create a function to find perimeter of a rectangle

function periRect(wid, len){
    var perimeter=wid*2+len*2;

    //return the perimeter
    return perimeter;

}
