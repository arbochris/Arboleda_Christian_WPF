/**
Christian Arboleda
 Random Number Function
 11-14-2014
 WPF 1411
 */


//alert("good to go");


//create a normal or basic function that will take in
//normal or basic returns a value

//a min and max number and return a random integer between them.

//ask user for a min and max variable
var shouldRun=true

var min=parseInt(prompt("Let's find a random number between 2 values. \nWhat is the minimum value: "));

//validate the users response

while(min==="" || isNaN(min)){
//reprompt the user for a valid response
    min=parseInt(prompt("please do not leave blank. \n what is the minimum value:"));

}

var max=parseInt(prompt("What is the larger value or the max:"));

//validate

while(max==="" || isNaN(max) || min=>max){

    if (max === ""){
        //user left blank
    max=parseInt(Promp=("Please dont leave blank. \nWhat is the max value:"));

    } else if (isNaN(max)){
        max=parseInt(prompt("please only type in numbers. \nWhat is the max value"));
    }
}else if(min=>max){

       console.log(max, min);

    }
}

if(shouldRun){

}

//create a random number generator


function randomizer (monkey, patented){
}
//create the variable

var ARAN    question
