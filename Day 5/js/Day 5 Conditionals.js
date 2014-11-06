/**
Christian Arboleda

 */

//alert("huh");


//basic if statement
/**
 if(true)
 {
 dosomething();
 }
 */
//basically says if its true run the code

/*
if(false)
{
    dosomething();
}
else
{
    dosomethingElse();
}
 */
//if conditional true it will skip the rest of the code

//

//Basic Conditional
//Is the child old enough to ride the ride?
//Create boolean variable
var oldEnough=true;
//if the child is old enough, console log they can ride

/*
if(condition to test);
 code if true goes here

 }


 */


//relational operators
//compares two values and returns a boolean

//create variable to hold the kids height



//
var kidHeight=44.9

//add sneaker lift
var sneakerLift=2

//create variable for kids min height

var minHeight=48;

//if your parent goes on the ride with you - 45" and over can ride
var withParentHeight=45;

//if statement
if(kidHeight>minHeight){
    //true code
    console.log("congrats you are tall enough to ride");

}else if(kidHeight>=withParentHeight){
    console.log("you can ride but with your parent");
}

//if statement

if(kidHeight>48){

    //true code goes here.
    console.log("congrats you are tall enough");

}else if(kidHeight+sneakerLift>48){
    console.log("you can ride the ride, cheater!!");

} else{
    //false code
    console.log("nope, not gonna happen");
}

