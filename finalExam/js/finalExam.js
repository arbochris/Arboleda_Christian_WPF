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

//validate once more

while(discountPer==="" || isNaN(discountPer)){

    discountPer= parseInt(prompt("Please do not leave blank. \n Enter discount of your selected item:"));
}

//create a function to calculate discount.
//cost and discount are the parameters here.
//discount price = (100-discount%)/100 * original price
//P.E.M.D.A.S.

var forDiscount=function(selectItem, discountPer){

    var discountPrice=(100-discountPer)/100*selectItem;

    return discountPrice;

}

//function call for the above function

var returnedDiscountPrice=forDiscount(selectItem, discountPer);
console.log("The original price of the item is $"+selectItem+ ". You will now pay $"+returnedDiscountPrice+ ". You got a "+discountPer+ "% discount!!");