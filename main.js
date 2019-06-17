// //This is an example of name function, create a function declaration and varaible/name.
// function testExample (a) { 
// var greeting = "Hi! My name is " + a; 
// return greeting; 
// }

// var name = "David"; 
// console.log(testExample(name));

// //Example of anonymous function 
// var testExample = function(a) { 
//     var greeting = "Hi! My name is " + a; 
//     return greeting; 
// }
// var a = "David!"; 
// console.log(testExample(a)); 

// //Example of Immediately invoked function expression, its going to run in the code as soon it is loaded into the browser
// (function () { 
//     var greeting = "Hi! My name is David!";
//     console.log(greeting); 
//  }()) 

//Creating a simple javascript calculator continuing from the index.html 

// function calc () { 
//     var a = parseInt(document.querySelector("#value1").value);//Selecting the Value 1 text 
//     //input in our DOM. 
//     var b = parseInt(document.querySelector("#value2").value);//Used parseInt so the
//     //the value is not see as a string but as a integer  
//     var op = document.querySelector("#operator").value;//Added the value property
//     //because I want it to set or return the value of the option or input of integer.
//     var calculate; 
    
//     if (op == "add") {
//         calculate = a + b; 
//     } else if (op == "min") { 
//         calculate = a - b; 
//     } else if (op == "div") { 
//         calculate = a / b;         
//     } else if (op == "mul") { 
//         calculate = a * b;  
//     }
//     console.log(calculate);

//     document.querySelector("#results").innerHTML = calculate; 
// }

//Creating javascript calculator with bootstrap

var a = []; 
var b = []; 
var reset = ["#button-clear"]; 

function equal () { 
    var exp = document.forms.textview.value; 
}

function calc () { 
    var a = parseInt(document.querySelector("#inputOne" && ".number").value);//Selecting the Value 1 text 
    //input in our DOM. 
    var b = parseInt(document.querySelector("#inputTwo" && ".number").value);//Selecting the Value 1 text 

    var op = document.querySelector("#operator").value;//Added the value property
    //because I want it to set or return the value of the option or input of integer.
    var calculate; 
    
    if (op == "button-plus") {
        calculate = a + b; 
    } else if (op == "#button-minus") { 
        calculate = a - b;  
    } else if (op == "#button-divide") { 
        calculate = a / b;         
    } else if (op == "#button-multiply") { 
        calculate = a * b;  
    } else if (op == "#button-power") { 
        calculate = math.pow(a, b); 
    }
    console.log(calculate);

    document.querySelector("#results").innerHTML = calculate; 
}
