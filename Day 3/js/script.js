/**
 * Created by bocaraca on 10/31/14.
 */

//single line comment

/*
multi-line comment
 */

alert("Hello World!!");

/*
Console log
programmers to show variables and code
 */

console.log("this is the console. Can you see it?");

//declare a variable
//use the keyword of var
var whatEver1; //declaration


//set the value of var
whatEver1 = 42 ; //definition


//storage container = value


//setup var and define it in the same line
var a = 2; //declare and define
console.log(a);

//shows how the computer is stupid
// computer ignores undefined code still acknowledges var a = 2
a+3;
console.log(a);

//computer acknowledges defined var and understands sum code
a= a+3;
console.log(a);

//defining code for a null
//declare a variable b
var b;

//define the value of b

b= a+3
console.log(a);
console.log(b);

//simple math
//how old we are
//2014-year we were born
var yearBorn = 1984;
//calculate age
var myAge = 2014 - yearBorn
//tell the user how old
console.log(myAge);
//conditional: if bday has not happened add 'yearBorn-1'


//find the area of a triangle
//base * heigh / 2

var base = 4;
var height = 5;
var areaTriangle=base*height/2

console.log(areaTriangle);

//Modulo, %
//gives the remainder left over
//mostly used in programming to find if something is even or odd
var remainder=32%70;
console.log(remainder);

//Find out if its even or odd
var evenOrOdd = 67%2;
console.log(evenOrOdd);


//assignment operators
/*
assigns the value to the variable
++ add 1 to the value of the variable
-- subtracts 1 to the value of the variable
+= Adds the number to the value of the variable
-= subtracts the number to the value of the variable
/= divides the value of the variable by the number
*= multiply the value of the variable by the number
 */

var x = 1;
x++; //the same as x = x+1;
x--;
x+=2 //x = x+2;
x-=1; //x = x-1;
x/=2; //x = x/2;
x*=8; //x = x*8;
console.log(x);

// strings
// text fields of programing
// MUST start and end in matching quotes
// either ' or "

//declare abd define a string variable
var kermit = "light green";
var frogName = kermit;

console.log(frogName); //as a string

//why should i bother with single or double quotes
// escape character, backslash (\) in front of the character
//escape character, \n - new line character

var phrase = 'I don\'t know \nYou never know!';
console.log(phrase);


//Boolean
// light switch of the programing world
//either contains true or false

var yes = true; //a true boolean

var nope = "true"; //not a boolean

var Lightswitch = false;


//Order of Operations
//PEMDAS - PLease Excuse My Dear Aunt Sally
//Parenthesis, exponents, multiply, divide, add, subtract

//Find quiz averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//average add up then divide by how many
var averageQuiz = quiz1 + quiz2 + quiz3 /3;
console.log(averageQuiz);
//wrong way of doing it

var averageQuiz = (quiz1 + quiz2 +quiz3)/3;
console.log(averageQuiz);
// right way of doing... dont over use parenthesis


// calculate the perimeter of a rectangle
// 2* width + 2* length

var width = 6;
var length = 7;
var perimeterRect = 2*width + 2*length;

console.log(perimeterRect);
//does not need parenthesis because of order of operations


//Concatenation - Combine strings together

var firstName = "kermit";
var lastName = "the Frog";

//concatenate these two variables into one variable
var fullName = firstName+lastName;
console.log(fullName);
//results in a smashing of the strings
var fullName = firstName+" "+lastName;
console.log(fullName);
//results in adding a space in the code


var d = "6";
var e = "7";
var combined = d+e;
console.log(combined);

var f = 8;
var g = "4";
var combined2 = f+g;
console.log(combined2);

//you can't mix a number and a concatenation. it will smash it all together.


var together = "the results of adding numbers is "+combined+";
