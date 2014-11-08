/**
Christian Arboleda

 */


//alert("Hello");



//basic while loop
//will loop through a block code as long as the condition remains true

var counter=0;  //initialize counting variable
while(counter<20){  //condition will run as long as this is true
    console.log("somethings will never end. "+counter); //add +counter here to see the steps of the loop.


counter++;  //update or change the counting variable

}

console.log("end of loop "+counter);


//Do while loop
//its sort of like the while loop
//DIFFERENCE: code will run at least once


var i=0    //counter variable
do{
    console.log("The counting number is "+i);
    //update or change the counting variable
    i+=5;

}while(i<50);


