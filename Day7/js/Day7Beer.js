/**
 * Created by bocaraca on 11/10/14.
 */



//alert("good to go");

//console.log the whole 99 bottles of beer on a wall

//set up the loop
//for(initialize variable; condition; increment of change){}

for(var i=99; i>0; i--){

//console.log(i);


    //add if statement for last case

    if(i===1) {
        console.log(i + " bottles of beer on the wall." + i + " bottle of beer.");
        console.log("you take one down, pass it around. No more bottles of beer on the wall.");

    }else if(i===2){
        console.log(i + " bottles of beer on the wall." + i + " bottle of beer.");
        console.log("you take one down, pass it around. "+(i-1)+" bottle of beer on the wall.");

    }else{

        console.log(i+" bottles of beer on the wall."+i+" bottle of beer.");
        console.log("you take one down, pass it around. "+(i-1)+" bottles of beer on the wall.");

    }


}


