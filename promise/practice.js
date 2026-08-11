let name="vinisha "
console.log(name )
console.log(typeof(name))
 //var sirname=prompt(" enter sir  name ");
 //console.log(sirname)
 let num=9;
 let num2="9"
 console.log(num==num2)
 console.log(num===num2)
 //let age=prompt("enter age")
 //let result= age>=18 ?"eligible": "not eligible";
 //console.log(result)
 //let day=prompt("enter day")
// switch(day){
//     case 1:
//         console.log("monday")
//         case 2:
//             console.log(" tuesday ")
//             case 2:
//                 console.log("wednesday ")
//                 default :
//                 console.log("friday")
//                 function greet(){
//                     alert("hello")
//                 }

               let name2="mahi"
               console.log(`hello${name2}`)

               let numbers=[4,5,6,7]
               let square=numbers.map(n=>n*n)
               console.log(square)

               let  filterchech=[4,8,9,22,34,55,66]
               let answers=filterchech.filter(n=>n>8)
               console.log(answers)

               let student={
                name:"vinisha ",
                age: 21,
                clg:"UIT RGPV "

               }

console.log(` my age is :${student.age}`)

               let a=[1,2,3]
               let b=[...a,4,5,6]
               console.log(b)
               let  coding=["java","python","c++","javascript","css"]
               console.log(coding.slice(1,3)+"::slice is ")
               // split converts  a  string into array 

            let day="mon, tue, wed"
            console.log(day.split(","))

// lexical  scoping
            function outer(){
                let username="vaibhav"
                function inner(){
                    console.log(username+": clouser")
                }
                inner()
            }
            outer()

          let func1=()=>{

     let hello=document.querySelector('.inps').value
      alert(`welcome ${hello}`)
            }

            let func2=()=>{
                let wel=document.querySelector('#inp2').value
                let colorchange=document.querySelector("#wel")
                colorchange.style.backgroundColor=wel;
            }