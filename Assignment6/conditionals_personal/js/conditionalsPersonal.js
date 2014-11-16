/**
 Christian B. Arboleda
Conditionals: Personal
 11-14-2014
 WPF - 1411
 */


//alert("... and go!!");


//The following is a conditional code for a personal problem:

//Me and my girl are going to be on vacation and we want to make sure
//that the dog's sitter knows when to replace the bag and how much food
// to feed them.



//First I want to create an access prompt.
//Originally it's supposed to have different people but for the sake
//of being fast and accurate I'll just make it for one person.

//First we establish the variables for the prompt:

var answerArray=["Christian Arboleda", "7353"];
var question=prompt("Please enter Name and Last Name:");

//Looping prompt with validation

while(question===""){
 question=(prompt("Please enter Name and Last Name:"));

}
var password=prompt("Now enter password please:");

while(password===""){
 password=(prompt("Please enter password:"));