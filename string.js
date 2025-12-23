// string is a primitive data type  it is used to represent text in double
//or single code
// methods of string

// function strings(){
// alert("hiiii.......")

// let str="hello cybrom"
// 1...length name ka atribute hota hain-- jo length btata hai...
// alert(str.length)
// 2...  concatination--- do ya do se jyada string ko ek bnati hai
// let v1="hi"
// let v2="vini"
// let v3="hru"
// alert(v1.concat(v2,v3))


//3..-- slice()
// let text="i am vinisha saratker"
// alert(text.slice(2,8))
// alert(text.slice(5,12))
// slice me indexing to 2 se start hoti hai lekin last me ek kam kar deta hai

//+++*******
//let fruit=["apple","banana","mango",6]// array is a collection of hetrogenious type of element 
// string ko array me convert krna hai
// split-- separate 
// let  laptop= "asus lenovo hp dell mac"
// console.log(laptop.split(' '))
// ///split
// }
// strings()
function ccount(){
// 1. Character count (prompt + alert)
// Prompt the user for a word (use prompt()), then alert the number of
// characters of that word Example UI message: &quot;Enter a word:&quot;.
let word=prompt(" enter a word");
let count=word.length;
alert(count);

}


function Que2(){
// 2. Full name using .concat()
// Prompt the user for firstName and lastName. Use .concat() to form fullName
// (and also show concatenation using +). Alert or console.log the message:
// Hello, &lt;fullName&gt;.
let firstname=prompt(" enter your first name")
let secondname=prompt(" enter your last name")
let fullName1 = firstname.concat(" ", lastName);

console.log( fullName1);
}

function assignment3(){
// 3. Extract with .slice()
// Given the string const s = JavaScript is fun; extract the
//  substring &quot;Script&quot; and console.log it.

const s="java script is fun"
console.log(s.slice(6,12))
}
function ssplit(){
// Split comma list &amp; alert second item
// Prompt for a comma-separated list (example input: apple,banana,cherry). Use
// .split(&#39;,&#39;) to make an array and alert the second item.

let fruit=prompt(" enter fruits name")
console.log(fruit.split(' '))
alert(" second item is.."+arr[1])
}

assignment3()
ssplit()
ccount()
Que3()