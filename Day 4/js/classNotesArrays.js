/*
Christian Arboleda
Day 4 Arrays
WPF 1411
11-3-2014
 */

alert("drop it like its hot");


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
avengerNames[avengerNames.length] = "captain america";


//add the black widow to the mix
avengerNames[avengerNames.length] = "black widow";

//access the last avenger in the array
console.log(avengerNames[avengerNames.length - 1]);


//new method specific to arrays called push
//it adds whatever we put in automatically to end of array
avengerNames.push("hawkeye");
console.log(avengerNames);

// .pop() - method of an array that removes the last item in the array
//you can save the popped variable (if you want to)
// set a variable equal to the pop method
avengerNames.pop();
console.log(avengerNames);

var soloAvenger = avengerNames.pop();
console.log(avengerNames);
console.log(soloAvenger);


//pick oranges everyday
//track how many oranges are picked every day
var orangeBins=[234, 473, 20, 709];

//how many oranges were picked in total
//store that in a variable
var orangeTotal = orangeBins[0] + orangeBins[1] + orangeBins[2] +orangeBins[3];
console.log(orangeTotal);

console.log(orangeTotal+" is the total number of oranges picked");

//what is the average oranges picked?
var orangeAverage = orangeTotal/orangeBins.length;
console.log("the average amount of oranges picked in "+orangeBins.length+" days in "+orangeAverage+".");

