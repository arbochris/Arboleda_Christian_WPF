
//establish variables

var bagFood=480;    //ounces
var yumiFood=8; //ounces
var pupsterFood=4;  //ounces

//expression

daysOfFoodLeft=bagFood/(yumiFood+pupsterFood);
console.log(daysOfFoodLeft);

alert("WARNING!! The "+bagFood+ " ounces of food equals 30 lbs.\n You have "+daysOfFoodLeft+ " days until food runs short.");

//now i want to know when to feed the dogs
//established variable

var feedTime=10
var timeHome=prompt("what time did you get home?\n (24hr input)");

//validated the prompt twice

if(timeHome==="") {
    timeHome = prompt("What time did you get home?\nDo not leave blank!!");
}
    if(timeHome===""){
    timeHome=prompt("(*sigh* Is this thing on?)\n What time did you get home?");
}

(timeHome<=feedTime)?console.log("Don't feed them yet."):(timeHome>=feedTime)?console.log("Feed them. Pupster gets "+pupsterFood+ " ounces and Yumi gets "+yumiFood+ " ounces.");

/*
if(timeHome<=feedTime){

    console.log("Don't feed them yet.");

}else if(timeHome>=feedTime){
    console.log("Feed them. Pupster gets "+pupsterFood+ " ounces and Yumi gets "+yumiFood+ " ounces.");
}
**/

