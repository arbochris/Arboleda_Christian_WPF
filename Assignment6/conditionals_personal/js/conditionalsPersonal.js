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

while(password==="") {
 password = (prompt("Please enter password:"));
}

//Now we build the access prompt.
//unless the info entered into prompt matches array access will be denied.

//if statement:

if(question==answerArray[0]){   //unless the prompt matches the info input access will vary.
 console.log("Access Granted"); //the console will show access granted.
 alert("Welcome Mr. Arboleda"); //an alert prompt will show acknowledging entry.

//else statement:

}else{
 console.log("Try again next time."); //if the above conditon is not true then this will show.
 alert("ACCESS DENIED!!"); //an alert will pop out.
}

//I want to know how long it takes for my two dogs to finish a 30lb bag of dry food.
//We establish the variables or givens.

var bagFood=480;  //the value is in ounces.
var yumiFood=8;  //My dog Yumi's food in ounces.
var pupsterFood=4;  //My dog Pupster's food in ounces.

//Now we write the expression to solve the problem:

daysOfFoodLeft=bagFood/(yumiFood+pupsterFood);
console.log(daysOfFoodLeft);

alert("The "+bagFood+ " ounces (30lbs.) of food is under the counter. \n You have "+daysOfFoodLeft+ " days until food runs short.");

//Additionally, I want to know WHEN to feed the dogs.
//Establish variables:

var feedTime=22;  //Value is in 24hr time.
var timeHome=prompt("What time did you get home? \n (24 hour input)");

//Now we make a prompt asking for the time they got home.
//Depending on the answer you get a go ahead with a location of the bag or a no feed.
//we build and validate the prompt:

if(timeHome===""){
 timeHome = prompt("What time did you get home?\nDo not leave blank!!");  //validation
}
if(timeHome===""){
 timeHome=prompt("(*sigh* Is this thing on?)\n What time did you get home?");  //validation
}

if(timeHome<=feedTime){
 console.log("Don't feed them yet.");  //if the time you get home is less than the feeding time you don't feed the dogs.

}else if(timeHome>=feedTime){
 console.log("Feed them.");
 alert("Pupster gets "+pupsterFood+ " ounces (1/2 scoop) and Yumi gets "+yumiFood+ " ounces (1 scoop).");  //if the time you get home is more than the feeding time you feed them
}
