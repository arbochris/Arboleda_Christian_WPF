/**
Christian Arboleda
 Multiple Functions
 WPF 1411
 11-14-2014
 */


//alert("good to go");


//Figure out how much pizza cost per sq in
//and how much per slice

//prompt the user for:
//radius of pizza
//cost of pizza
//# of slices

var pizzaRadius=prompt("what is the radius of your pizza?");
var pizzaCost=prompt("how much your pizza cost in total?");
var pizzaSlices=prompt("how many slices in your pizza?");


//Function Call Lord Function
var results=lordFunction(pizzaRadius,pizzaCost,pizzaSlices);
console.log("Your pizza costs $"+ results[0]+" per sq inch or $"+results[1]+" per slice.");





//create a function to start all other functions

function lordFunction(radius, cost, slices){

    //Function Call all other 3 functions and return their values
   var area=pizzaArea(radius);
    var areaCost=pizzaSqInCost(area, cost);
    var slicePrice=pricePerSlice(slices, cost);

    return [areaCost, slicePrice];



}




//one fucntion to calculate the area of the pizza.
// then a function to calculate the price per sq in
// a 3rd function to calculate the price per slice

function pizzaArea(r){
    var area=r*r*Math.PI;
    return area;


}


function pizzaSqInCost(area, price){
    var costPerIn=price/area;

    //round to 2 decimals

    costPerIn=costPerIn.toFixed(2);
    return costPerIn;

}

function pricePerSlice(slices, price){
    var costPerSlice=price/slices;

    //round to 2 decimals

    costPerSlice=costPerSlice.toFixed(2);
    return costPerSlice;

}