//This is an example of name function, create a function declaration and varaible/name.
function testExample (a) { 
var greeting = "Hi! My name is " + a; 
return greeting; 
}

var name = "David"; 
console.log(testExample(name));

//Example of anonymous function 
var testExample = function(a) { 
    var greeting = "Hi! My name is " + a; 
    return greeting; 
}
var a = "David!"; 
console.log(testExample(a)); 

//Example of Immediately invoked function expression, its going to run in the code as soon it is loaded into the browser
(function () { 
    var greeting = "Hi! My name is David!";
    console.log(greeting); 
 }()) 


