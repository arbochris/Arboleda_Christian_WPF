/**
 * Created by bocaraca on 11/10/14.
 */



//alert("good to go");


//Min Max number find a random in between

//Math.round(Math.round() * (max-min)+min)


var min = prompt("lets find a random number, whats the minimum?");

//test if the user skips the prompt - they just pres enter

 if(min ====""){
    //the user just pressed enter
    //reprompt the user
    min = prompt("lwhats the min value? \n please do not leave blank.);

}


//validating uses while loop
//because we dont know what the user will do

 while(min====""){
    //as long as user skips it, reprompt.
   min = prompt("whats the min value? \n please do not leave blank.);
}

//validate the user information
//function that checks the type of a variable.
//isNaN(variable to check)

console.log(isNaN(7)); //returns false
console.log(isNaN("cat")); //returns true

while(isNaN(min)){
    //loops as long as its not a number
    //reprompt the user

    min = prompt("PLease only type in numbers. \nwhat is the minimum value?");
}


;
}


//Validate
var question=prompt(please type OMLY ki yes or a no."");

while(question==="yes"){


}