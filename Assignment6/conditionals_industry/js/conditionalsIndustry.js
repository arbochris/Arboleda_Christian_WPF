/**
Christian Arboleda
 Conditionals Industry
 WPF 1411
 11-14-2014
 */

//alert("good to go");


//random movie generator
//



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

// Now we want to

