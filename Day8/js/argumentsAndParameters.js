/**
Christian Arboleda
 Arguments and Parameters
 WPF 1411
 11-12-2014
 */


//alert("good to go");



//argument - goes into the function - part of the function call
//parameter - catches the argument and is used inside of the function

//create function that calculates th area of a triangle
function calcArea(w, h) {   //parameters go here

//hardcoded values for width and heigh - NOT GOOD!!
    var width = 10;
    var height = 20;
    var area = width * height;


    console.log("the are of a triangle is " + area);

}

//function call

calcArea(4,5);  //arguments go here
