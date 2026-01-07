let que1=()=>{
//     1) Create an array of 5 numbers and use a for loop to print each number
// using an arrow function inside the loop.
let arr2=["vini","motu","nisha","sonu","bhooshan"];
for(let i=0;i<arr2.length;i++){
    console.log("array elemnts are  "+arr2[i]);
}
}

let que2=()=>{
// 2) Using an array of names, check inside a for loop:
// If the name length is greater than 5, print &quot;Long Name&quot;,
// else print &quot;Short Name&quot;.

let arr3=["vinisha","sarita","deepika","vikas","nisha"]
for(let i=0;i<arr3.length;i++)
{ if (arr3[i].length >5)
        {
console.log("long name length is greater than  "  +arr3[i]);}
else{
    console.log(" short name length is  5" +arr3[i]);}
}
}
 let que3=()=>{
//     3) Create an object student with properties: name, age, city.
// Use a for…in loop to print all keys and values.
const student={
    name:"mahi",
age:"21",
city:"betul"
}
for(let key in student){
console.log(student[key]);
}
}
let que4=()=>{
//     4) Make an array of 3 student objects.
// Use a normal for loop to print each student&#39;s name using an arrow function to
// format the text.
let student=[
    {  name:"khushi",age:22    },
    {  name:"jyoti",age:27     },
    {     name :"mahima",age:22  }
]
for(let i=0;i<student.length;i++){
    console.log("students nameis "+student[i].name)
}
}
que5=()=>{
//     5) Write an arrow function isAdult(age) using if–else:
//  if age &gt;= 18 → return true
//  else → return false
// Now call this function inside a loop over an array of ages.

let isadult=(age)=>{
      if(age>=18){ return true;}

    else if(age<18){  return false;}}

    let ages=[22,15,67,10,34,67];

    for(let i=0;i<ages.length;i++){
        if( isadult(ages[i])){
            console.log("adult you can give vote  "  +ages[i])
        }
        else{
            console.log("you are not eligible  " +ages[i])
        }
    }



}

que6=()=>{
// 6) Create an array of numbers and use a for loop to find the largest number
// (without using Math.max).
let arr4=[23,56,78,90,34];
 let temp=0;
for(let i=0;i<arr4.length;i++){
   if(arr4[i]>temp){
    temp=arr4[i]
   }
}
console.log(" max element is :"+temp)

}

que7=()=>{
//     7) Given the object const data = { a: 10, b: 20, c: 30 };
// Use object destructuring to extract a and c and print them.

const data={a:30,b:20,c:30}
const{a,c}=data
console.log(a)
console.log(c)
}
que8=()=>
{
// ) Create two objects and merge them into one using the spread operator …
// Print the merged object.

const obj1 = { name: "Vinisha", age: 20 };
const obj2 = { city: "Bhopal", course: "B.Tech" };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

}

que9=()=>{
//     9) Make an array of marks.
// Use a for loop to count how many marks are greater than 50 using simple
// if–else.
let marks=[67,89,54,32,90,21,34,99,88,9,0];
let count=0;
for(let i=0;i<marks.length;i++){
    if(marks[i]>50){
        count++;
    }
}

 console.log(" greater than 50 marks are :"+count)
}

que10=()=>{
//     10) Create an array of cities.
// Use a for loop and an arrow function inside it to print the city name along with
// its index (e.g., “0 → Delhi”).

let cities = ["Delhi","Bhopal","Mumbai","Pune","Indore"];
let printCity = (index, city) => {
    console.log(index + " → " + city);
};

for (let i = 0; i< cities.length; i++) {
    printCity(i,cities[i]);
}
}
que1();
que2();
que3();
que4();
que5();
que6();
que7();
que8();
que9();
que10();
