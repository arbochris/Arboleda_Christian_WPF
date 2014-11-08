/**
 Christian Arboleda

 WPF=1411
 11/-7-2014

 */


//alert("Test screen.");



//Random numbers
//Math.random() - gives values of 0 and almost 1
//nothing goes inside the ()

var num5=Math.random();
console.log(num5);

//Numbers 0 - 10
var num6=Math.random()*10;
console.log(num6);


//Integers between 0 - 10
var num7=Math.round(Math.random()*10);
console.log(num7);

//Integers between 0 - 100
var num8=Math.round(Math.random()*100);
console.log(num8);


//Get a random integer between any 2 values
//Math.random()*(max-min)+min
//random between 50  -> 80

var num9=Math.round(Math.random()*(80-50)+50);
num9=num9.toFixed(2);
console.log(num9);


//prompt the user for a max and min value
// find the random number between them

var max=prompt("find a random number \n whats the max value");
var min=prompt("please type in a min number.");
var randomNum=Math.round(Math.random()*(max-min))+min;
console.log(randomNum);
console.log("your random is"+randomNum);


//Math class constant - number that never changes
//always upper case
//Math.PI - 3.1459
//circumference of a circle
// 2*pi*r

var radius=7
var circleArea=2*Math.PI*radius;
console.log(circleArea);


