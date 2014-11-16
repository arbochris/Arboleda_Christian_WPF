
//Personal Related
//variables for acces prompt
//prompts are validated

var answerArray=["Christian Arboleda", "7353"];

var question=prompt("Please enter Name and Last Name:");

while(question===""){
    question=(prompt("Please enter Name and Last Name:"));

}
var password=prompt("Now enter password please:");

while(password===""){
    password=(prompt("Please enter password:"));
}

//access prompt
//Unless the exact information is entered as in array access will be denied
if(question==answerArray[0]){
}

if(password==answerArray[1]){
    console.log("Access Granted");
    alert("Welcome Mr. Arboleda");

}else{
    console.log("Try again next time");
    alert("ACCESS DENIED!!");
    }

//variables for food prompt

var bagFood=480;    //ounces
var yumiFood=8; //ounces
var pupsterFood=4;  //ounces

//expression

daysOfFoodLeft=bagFood/(yumiFood+pupsterFood);
console.log(daysOfFoodLeft);

alert("The "+bagFood+ " ounces (30lbs.) of food is under the counter. \n You have "+daysOfFoodLeft+ " days until food runs short.");


//now i want to know when to feed the dogs
//established variable

var feedTime=22;
var timeHome=prompt("what time did you get home?\n (24hr input)");

//validated the prompt twice

if(timeHome===""){
    timeHome = prompt("What time did you get home?\nDo not leave blank!!");
}
    if(timeHome===""){
    timeHome=prompt("(*sigh* Is this thing on?)\n What time did you get home?");
}

if(timeHome<=feedTime){
    console.log("Don't feed them yet.");

}else if(timeHome>=feedTime){
    console.log("Feed them.");
    alert("Pupster gets "+pupsterFood+ " ounces (1/2 scoop) and Yumi gets "+yumiFood+ " ounces (1 scoop).");
}


//


