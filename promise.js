// let firstpromise=new Promise((reject,resolve)=>
// {
//     console.log(" hyyyu");
//  reject(new Error("internal error") )
//  // resolve((1001))
// }
// )
// asynchronous code

// let promise2=new Promise((reject,resolve)=>{
//  setTimeout(function saymyname(){
//     console.log("my name is vinisha")
//  },2000)
// }
// )
// let promise3=new Promise((resolve,reject)=>{
// let success=true;
// // let success=false  // bhi kr skte hai to catch block execute ho jayenga 
// if(success){
//     resolve(" promise fullfilled")

// }
// else{
//     reject("promise rejected")
// }
// })
// promise3.then((message)=>{
// console.log("then ka message h yeh :  "+   message)

// })
// .catch((error)=>{
// console.log("error  :"+  error)
// })

// **** promise chainn

// let promise5=new Promise((resolve,reject)=>
// {
//     let success=false;
//     if(success){
//         resolve(10)   }

//     else{  reject(-6)}
// })
// promise5.then((message)=>{
// console.log(" first messsage: "+message)
// return 30;
// })
// .then((message)=>{
//     console.log("second message :" + message)
//     return 70;

// })
// .then((message)=>{
//     console.log("third message :"+message)
// })
// .catch((error)=>{
//     console.error(error)
// })



// let promise=new Promise(
//     (resolve,reject)=>{
//         console.log("hyyy")
//         //resolve(56)
//         reject("errrrorr")
//     }
// )


const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise")
        resolve("success")
       // reject("rreeee")
    })
}
let promise=getPromise()
promise.then((res)=>{
    console.log(" promise full  filled")
})
promise.catch((err)=>{
    console.log("errorr  is here")
})