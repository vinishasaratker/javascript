 que1=()=>{
// Take an input field where the user enters a number.
// Use a for loop to print all even numbers from 1 to that number and show it in
// a &lt;p&gt; tag using getElementById().
      let n=Number(document.getElementById('inp').value.trim());
      let ans=""
      for(let i=0;i<n;i++)
      {
     if(i%2==0){
    ans=ans+i+" ";
    }
      }
      document.getElementById("answer").innerHTML = ans;
      
}
que2=()=>{
//     2 Take an input field where the user enters a word.
// Using a for loop, check if the word contains the letter “a” or not.
// If found → show “Letter found”, else show “Not found”.
// (Use getElementById() for input and querySelector() to print result.)

let  word=document.getElementById('inp2').value.trim()
let found=false;
for(let i=0;i<word.length;i++){
    if(word[i]=='a'|| word[i]=='A'){
found =true;
break;

    }}
    if(found){
            document.querySelector("#answer1").innerHTML = "found ";
    }
    else{
            document.querySelector("#answer1").innerHTML = "not found";
    }
}

que3=()=>{
//     3 Take an input field for age.
// On button click, check using if–else:
//  If age &gt;= 18 → show “Adult”
//  Else → show “Minor”
// (Make sure to get input using getElementById().)**
let age=Number(document.getElementById('inp3').value.trim());
if(age>=18){
    document.querySelector("#answer3").innerHTML = "adult ";

}
else{
    document.querySelector("#answer3").innerHTML = "not adult ";
}
}

