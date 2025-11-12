//1. Create variables: firstName (string), age (number), isStudent (boolean). Print all using
//console.log.
var name="vinisha"
console.log(" vinisha")
var age=20;
console.log(age)
let isStudent = true;
console.log(isStudent);
//2. Declare two numbers a and b. Print their sum using the + operator in console.log.
var a=9
var b=8
console.log(" sum is"+(a+b))

//3. Ask the user for two numbers with prompt(), convert to Number, and print their sum in
//console.log.
 var num1 = prompt("Enter first number:");
 varnum2 = prompt("Enter second number:");
num1 = Number(num1);
num2 = Number(num2);

// Calculate and print the sum
let sum = num1 + num2;
console.log("The sum is " + sum);

//4. Make a message 'Hello' and a name variable. Show concatenation using + and using a
//template literal.
var v1="hello"
var v2="vinisha"
console.log(v1+v2)
//5. Show the difference between ++i and i++ by logging before and after
var p=8
console.log(p++)
console.log(++p)
// bom interaction with the browser window 
// bom--browser object model
// 1. alert-- info dene ke liye  
// prompt()--
function  bom(){
alert(" welcome to this website.. ")
}
bom();