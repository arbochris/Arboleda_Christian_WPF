/**
 Christian Arboleda
 Steak Temperature
 11-05-2014
 WPF -
 */


alert ("hello world2");

//Ask for steak temp and tell what steak preference

/*
 Extra-rare or Blue (bleu) 	very red and cold 	46–49 °C 	115–120 °F
 Rare (saignant) 	cold red center; soft 	52–55 °C 	125–130 °F
 Medium rare (à point) 	warm red center; firmer 	55–60 °C 	130–140 °F
 Medium (demi-anglais) 	pink and firm 	60–65 °C 	140–150 °F 	145 °F and rest for at least 3 minutes
 Medium well (cuit) 	small amount of pink in the center 	65–69 °C 	150–155 °F
 Well done (bien cuit) 	gray-brown throughout; firm 	71 °C+ 	160 °F+ 	160 °F for ground beef
 */

//declare and define the variable for steak temp
//you can also ask the end user to input information by prompting
var steakTemp=prompt("What Temp is your steak?");

if(steakTemp<115){
    console.log("Uncooked meat... Moo, MoFo!");
} else if(steakTemp<=120){
    console.log("Your steak is extra rare.");
} else if(steakTemp<=130){
    console.log("Your steak is rare.");
} else if(steakTemp<=140){
    console.log("Your steak is medium rare");
} else if(steakTemp<=150){
    console.log("Your steak is medium.");
} else if(steakTemp<=155){
    console.log("Your steak is medium well.");
} else if(steakTemp<=160){
    console.log("Your steak is well done,");
} else{
    console.log("You burnt the steak. Your meal is free.");
}