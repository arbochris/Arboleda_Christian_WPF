/**
Christian Arboleda
 Procedures
 WPF 1411
 11-14-2014
 */


//basic function

function calcArea(width, height){
    var area=width*height;
    return area;
}







//function call


var returnedArea=calcArea(6,7);
console.log(returnedArea);


//Procedure - console.log the perimeter

function calcPeri(width, height){
    var peri = width*2+height*2;

    //console.log the peri inside the procedure
    console.log(peri);

    //Does not return value
}


//function call
//do not catch with a variable
calcPeri(6,7);