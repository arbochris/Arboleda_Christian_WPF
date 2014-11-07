/**
 Christian Arboleda
 Nesting If Statements
 WPF-1141
 11-07-2014
 */

//alert("hello")



//some decisions depend on other decisions

// if warm enough we go to the beach, if not we go to the movies.


//if water is warm enough we go swimming, if not lay out get a tan


var temp=69;
var waterTemp=60;
//if else statement

if(temp>70){
    console.log("we go to the beach");
}else{
    console.log("we go to the movies");
}

//test the water statement

if(waterTemp>75){
    console.log("wujjuuuu swim time, bro!!");
}else{
    console.log("we veg, bro");
}