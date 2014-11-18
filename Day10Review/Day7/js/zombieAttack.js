/**
 * Created by bocaraca on 11/10/14.
 */


//alert("we good?");

//zombie attack
//we have a zombie at the school
//it can bite 4 people a day and turn them by the next day
//the CDC asked us how many zombies will there be in 8 days?


//set up variables

var numZombies=1; //how many zombies do we have.
var numBites=4; //number of bites per zombie per day.

var days=8; // number of days



//how many days will it takes us to get to 1,000,000 zombies


while(numZombies<1000000){
    //how many new zombies get made and when do they bite people

    var newZombies= numZombies*numBites;

    //the bitten people are the zombies

    numZombies=newZombies+numZombies;
    console.log("there are now "+numZombies+" zombies on day #"+days+"!");

days++;


}






//every day zombies will bite and turn people into zombies

//loop number of days

for(var i=1; i<=days; i++){
    //how many new zombies get made and when do they bite people

    var newZombies= numZombies*numBites;

    //the bitten people are the zombies

    numZombies=newZombies+numZombies;
    console.log("there are now "+numZombies+" zombies on day #"+i+"!");

if(numZombies>=1000000){
    break;
}





}

