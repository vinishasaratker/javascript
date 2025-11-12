//console.log("hello i  am vinu");

// java script is a case sensitive language
function vinisha(){
    console.log(" hello i am vinisha ")
    // old version of writing a function 
    var a=9;
    var  b=4;
   console.log (" addition is "+(a+b));
   console.log (" subttraction is  "+(a-b));
   console.log (" div is  "+(a%b));
  
   console.log(++a)
   console.log(b++)
   console.log(a==b);//it may provide answer either true or false 
   var c="2"
   var d=2
   var l="true";
   console.log(d-l)
   console.log(c-d)
   console.log(c==d)// string ko turant hi number me conver kkar diya gya hain 
   // java  coercion --- mtlb ek date type se dusre data type me convert kr deta hai  turant hi type cast kar deta hai 
//=== bhi hota hai java script 
  console.log(c+d)// first priority string ki hoti hai 
  // answer will be in string  yeh string ke sath concatination kr leta hai so answe will be 22
 var v=undefined
 var b="5"
 console.log(v+b)// answer will be undefined5
 // second priority number
 var p=8
 var n=true
 console.log(p+n)// answer will be 9 becoz true ko 1 me conver kr deta hai 
}
function aru(){
    console.log(" hye aruuu")
 }

vinisha()


aru()