/*
Christian Arboleda
Day 4 Arrays
WPF 1411
11-3-2014
 */

//alert("testing to see if it linked");


//start basic array
var avengerNames = ["hulk", "spiderman", "iron man"];
console.log(avengerNames);

//Access a specific avenger in our array
console.log(avengerNames[1]);

//we can use a variable to represent our index number as well
var num = 2;

//lets print iron man's name
console.log(avengerNames[num]);

//Lets add an avenger to our array
avengerNames[3] = "thor";
console.log(avengerNames);

//figure out the lenght of the array
// .length property
//dot syntax - put a period in it.

console.log(avengerNames.length);

//add another avenger
avengerNames[avengerNames.length] = "captain america"
