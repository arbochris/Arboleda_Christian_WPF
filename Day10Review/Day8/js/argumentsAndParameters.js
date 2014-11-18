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
function calcArea(w,h) {   //parameters go here

//hardcoded values for width and height - NOT GOOD!!
    var width = 10;
    var height = 20;
    var area = width * height;

    var area = w * h;

    console.log("the area of a triangle is "+area);




}


//function call

calcArea(4,5);  //arguments go here

calcArea(2,3)

///


//calculate dog years = human years * 7

function dogYears(humanAge){
    var dogAge=humanAge*7;
    console.log("You are "+dogAge+" years old in dog years");
}

//function call
dogYears(36);
dogYears(18);

var yourAge=prompt("Please type in your age:");
dogYears(yourAge);

var friendsAge=prompt("How old is your friends age:")
dogYears(friendsAge);
