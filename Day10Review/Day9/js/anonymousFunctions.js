/**
Christian Arboleda
 Anonymous Functions
 WPF 1411
 11-14-2014
 */


//alert("good to go");


/*
basic function

function functionName(){
    //code goes here
}

Anonymous Function

var functionName=function(){
   //code goes here

}

 */


//a normal function to find the are of a triangle

function triangleArea(base, height){

    var area=.5*base*height;
    return area;


}


//fucntion call - for normal function

var returnedArea=triangleArea(4,5);
console.log("Returned area for normal function is "+returnedArea);



//Anonymous Function that calculates triangle area.
var anonTriArea=function(base, height){

    var area=.5*base*height;
    return area;

};


//Function call for Anonymous Function

var returnedAnonAre=anonTriArea(2,3);
console.log("The returned area from the anon function is "+returnedAnonAre);