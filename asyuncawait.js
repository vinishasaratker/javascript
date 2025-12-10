// async ---await ka use krte hum hamare asynchronous code ko synchronous behaviour  bta skte hai 

async function getdata(){
setTimeout(function()
{
console.log(" i am inside  settime outblock")
},3000)


}
getdata()