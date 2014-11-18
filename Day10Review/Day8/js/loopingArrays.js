/**
Christian Arboleda
 Looping Arrays
 WPF 1411
 11-12-2014
 */


//alert("good to go");

//looping over arrays
//for(i=o; i<arrayName.length; i++){}

var names = ["scooby", "shaggy", "fred", "velma", "daphne", "scrappy"];

//tell each one they each solved the case

for(var i=0; i<names.length; i++){
console.log("you solved the case "+names[i]+" ");

}


//create an array of bills to pay

var bills=[50, 10, 5, 20, 10];

// lest add up the bill
//create a total bills variable outside and above our loop

var totalBills=0;

for(j=0; j<bills.length; j++){
    //add each individual bill to the total bills
    //totalBills+= bills[j]; // = totalBills+bills[j]

    //only care about bills that are $20 and higher

    if(bills[j] >=20){
        //if this is true then we add that bill to the total

        totalBills+=bills[j];
    }



}

console.log("your total bills are "+totalBills);