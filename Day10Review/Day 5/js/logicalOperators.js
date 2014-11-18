/**
 * Created by bocaraca on 11/5/14.
 */

//alert("yahooooo");

//buying an ipod
//if the price is less than or equal to our budget OR our paycheck is over $1000
//then we can buy the iPad

var budget=300;
var iPadPrice=500;
var payCheck=1200;

//&& and logical operator
//the iPad must bot BOTH these things

if(iPadPrice<=budget&&payCheck>1000){
    console.log("iPad is within budget and your paycheck is over $1000.");
} else {
    console.log("can't buy the ipad");
}

//|| - or logical operator
// we can if one of the conditions is met

if(iPadPrice<=budget&&payCheck>1000){
    console.log("iPad is within price and budget is over $1000.");
}else {
    console.log("Can't buy the iPad.");
}

//&& and logical operator
//the iPad must bot BOTH these things

var wonLottery=