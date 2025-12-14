// async ---await ka use krte hum hamare asynchronous code ko synchronous behaviour  bta skte hai 

console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello")
},5000)//  5
// min bad yeh print honga  or last me print honga jab time pura honga fir 
console.log(" last text")
console.log("hi h jij ")



function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b)
}
calculator(1,2,sum)// aisa function jo kisi dusre function ke andar  as an argument pass karte hai vo call back function hote hai 


function getdata(dataId){
    setTimeout(()=>{
        console.log("data",+dataId );

    },3000)
}