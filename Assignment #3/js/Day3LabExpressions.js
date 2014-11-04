/*
Christian Arboleda
 Day 3 Lab Expressions
 WPF - 1411
 11-03-2014
 */

//alert("ding, dong");


//Part 1: Slice of Pie
//Calculate the amount of pizza each person will get.
//the givens:
var slicesPizza = 10;
var boxesPizza = 18;
var numberPeople = 60;
var slicesEaten = 3;

//now that the givens have been defined I calculate the slices eaten

var slicesEaten = slicesPizza * boxesPizza / numberPeople;
console.log(slicesEaten);
alert("Each person ate "+slicesEaten+" slices of pizza at the party.");

//

