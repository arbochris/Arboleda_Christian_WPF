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
console.log(slicesEaten); //output
//alert("Each person ate "+slicesEaten+" slices of pizza at the party."); //alert output


//Part 2: Slices of Pie
//Calculate how many slices does Sparky get?
var sparkyEats = slicesPizza%slicesEaten //calculate the remainder
console.log(sparkyEats); //output console
//alert("Sparky got "+sparkyEats+" slice(s) of pizza."); //output prompt


//Average Shopping Bill
//calculate amount spent on groceries.

var weekBill=5;
var avgWeekly=120;
var totalAmnt=weekBill*avgWeekly;
console.log("you have spent a total of "+totalAmnt+" on groceries this week. That is an average of "+avgWeekly+" per week.");

//Discounts

/*
 Calculate  the  discounted  price  for  an  item.  Create  an  expression  that  will  calculate  the
 discounted  price
 with  and
 without
 sales  tax.  (It  is  acceptable  for  the  result  to  have  more  than
 two  digits  after  the  decimal.  $345.896  for  example.)
 */

//givens - original price, discount percentage, description of item, sales tax percentage.

var originalPrice=56.99
var discPerc= 0.07
var item="food total"

var salesTax=originalPrice*discPerc

console.log(salesTax);

//calculating with and without tax
var wTax=60.97
var woTax=56.99

console.log("Your "+item+" was originally "+originalPrice+", but after a "+discPerc+"%, it is now "+woTax+" without tax, and "+wTax+" with tax.");

