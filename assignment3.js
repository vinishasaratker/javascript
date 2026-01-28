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
let fullName1 = firstname.concat(lastName);
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
// 4.   Split comma list &amp; alert second item
// Prompt for a comma-separated list (example input: apple,banana,cherry). Use
// .split(&#39;,&#39;) to make an array and alert the second item.

let fruit=prompt(" enter fruits name")
console.log(fruit.split(' '))
alert(" second item is"+fruit[1])
}
function que5(){
// 5. Reverse words and show result
// Prompt for a short sentence, split it into words, reverse the words array
// (.reverse()), join the words back with spaces (.join(&#39; &#39;)) and alert the reversed
// sentence.

let sentence= prompt(" enter any word");
let word=sentence.split(" ");
let reverse=word.reverse();
let reversedSentence = reversedWord.join(" ");
alert(" reversedSentence");

}
ccount();
Que2();
assignment3()
ssplit()
que5()