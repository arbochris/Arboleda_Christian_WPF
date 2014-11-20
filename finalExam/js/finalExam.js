/**
Christian Arboleda
 Final Exam WPF
 WPF 1411
 11-19-2014
 */


//alert("good to go, bravo one");


//Prompt the user for the cost of an item:

var selectItem=prompt("Please enter the cost of your selected item:");


//Now we validate that the prompt is a number and not left blank:

while(selectItem==="" || isNaN(selectItem)){

    selectItem=parseInt(prompt("Please do not leave blank. \n Enter the cost of your selected item:"));
}

//Now prompt user for a discount number.
//Number should be between 0 and 100.

var discountPer=prompt("Let's find out your discount price. \n Enter selected item's discount:");

while(discountPer==="" || isNaN(discountPer)){

    discountPer= parseInt(prompt("Please do not leave blank. \n Enter discount of your selected item:"));
}

var forDiscount=(selectItem, discountPer){

    var discountPrice=selectItem*(discountPer/100);
    return discountPrice;

}

