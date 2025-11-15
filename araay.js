
// function arrayy(){
// alert("working")
// let fruit=["apple","mango","orange","grapes"]
// prompt(fruit.length)
// document.write(fruit.length)
// fruit.pop()
// console.log(fruit)
// fruit.push("dragonfruits")
// fruit.shift()
// fruit.unshift("banana")
// console.log(fruit)
// fruit.splice(1,0,'papaya','peach')
// console.log(fruit)
// }

function que1(){
// 1. Create and log array
// Create an array of 4 fruits, e.g. [&quot;apple;banana&quot;,; mango;
// ,&quot;grapes&quot;]. Use console.log to print the array and also log its .length.

let fruits=["apple","banana","mango","srapes"];
console.log("fruit array is",fruits);
console.log("length of fruit array is ",fruits.length);
}

function que2(){
//     2. push() and pop()
// Use push() to add one fruit at the end and console.log the array; then use
// pop() to remove the last item and console.log the array after removal.
let city=["mumbai","delhi","bhopal","betul"];
console.log(city);
city.push("indore");
console.log(city);
city.pop();
console.log(city);

}
function que3(){
//     3. unshift() and shift()
// Use unshift() to add a fruit to the start of the array and console.log; then use
// shift() to remove the first element and console.log the result.
let fruit=["dragonfruit","pineapple","blueberry","guava"];
fruit.unshift("papaya");
console.log(fruit);
fruit.shift();
console.log(fruit);

}
function que4(){
//  4. concat() to merge arrays Create two small arrays of colors and use concat() 
// to merge them into one array; console.log the merged array.
let color1=["pink","blue","black","purpule","white"];
let color2=["green","silver","yellow","orange","red"];
let color=color1.concat(color2);
console.log("concat array is",color);
}
function que5(){
//     5. Sequence demo
// Starting with an array, perform push, pop, unshift, shift in that sequence and
// console.log the array after each operation to show how it changes.
let arr2=["vini","pihu","diksha","kiru"];
console.log("array is",arr2);
arr2.push("khushi");
console.log(" we adds last in push operatin",arr2);
arr2.pop();
console.log("removed last elemnt of arry ",arr2);
arr2.unshift("priya");
console.log("we added a name in first",arr2);
arr2.shift();
console.log("removed element from first",arr2);

}
que1();
que2();
que3();
que4();
que5();