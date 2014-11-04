
 /*
Christian Arboleda
Day 4 Casting
WPF - 1411
11-03-2014
 */

//alert("twerk again!!!");


// casting variables - treat one variable type as another

 var stringVar = "6";
 var results = 7 + stringVar;
 console.log(results);

 //to cast a variable as a number
 //Number() - anything inside is treated as a number - if it makes sense

 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

//casting numbers as a string
 //String() - treats anything inside as a text string

 //phone number

 var areCode = 407;
 var firstPart = 979;
 var secondPart = 3667;

 //Concatenate phone number to one variable

var phoneNumber = String(areCode)+String(firstPart)+String(secondPart);
 console.log(phoneNumber);

 var phoneNumber2 = "("+areCode+")"+firstPart+"-"+secondPart;
 console.log(phoneNumber2);


 // 7 cats
 // parsing integers
 //parseInt() - it looks through the text string and returns the integer in it.

 //only the first number is returned.
 //the number has to be the first thing in the text string.
 //if parseInt() can't find it - returns NaN
 //NaN - Not a Number

 var a = parseInt("40 years 7 years ago");
console.log(a);

 var b = parseInt("i am 40 years old");
 console.log(b);

 //prompt() - only returns text strings

 var cupsHad = prompt("how many cups do you have?");
 var cupsBought = prompt("how many cups are you going to buy?");

 //add the number of cups i had plus i'm buying
 var totalCups = Number(cupsBought) + parseInt(cupsBought);

 console.log(totalCups);



