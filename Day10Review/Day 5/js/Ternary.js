/**
Christian Arboleda
 Ternary
 WPF1141
 11-05-2014
 */


//alert("jajajaj");


//open and close parethesis

var gpa=3.5;

if(gpa>2.0){
    console.log("Congrats you graduate");
} else {
    console.log("sorry study more");
}

//convert to a ternary
//condition to test)?trueCode:elseCode

(gpa>2.0)?console.log("congrats you graduate"):console.log("sorry study more");


//set a variable equal to the outcome

//based on a kids age they will read one of two books
// under 10, green eggs and ham
// 10 and older read The Time Machine

var age=6
var book;

book=(age>=10)?"The Time Machine":"green eggs and ham";
console.log(book);


//Kids 14 and older read twilight
book=(age<10)?"green eggs and ham":(age<14)?"the time machine":"twilight";
console.log(book);

if(age>=10){
    book= "the time machine"
}else{
    book="green eggs and ham"
}

