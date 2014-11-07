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

if(temp>70) {
    console.log("we go to the beach");

    //test the water statement
    if (waterTemp > 75) {
        console.log("wujjuuuu swim time, bro!!");

    }
}else{
        console.log("we vege, bro");

        if(wChild){
            var childAge=prompt("how old is the child?")
            console.log("go see a kid's movie");

            if(childAge<=6){
                console.log("lets go to the movie");
            }

}else{
    console.log("bring the blood\nits time for the horror");
    }
}
//Choose between kids movie or horror - are you taking a child.

var wChild=false;




//using && and ||

if(temp>70&&waterTemp>75){
    console.log("lets go to the beach!\nLet's go swimming.");
}else if(temp>10&&waterTemp<=75){
    console.log("lets go to the beach\nLets go get a tan.");
}else if(temp<=70&&wChild){
    console.log("lets go to the movies");

}else if(temp<=70&&!wChild){
    console.log("lets go to the movies\nstart the horror");
}

