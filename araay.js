
function arrayy(){
alert("working")
let fruit=["apple","mango","orange","grapes"]
prompt(fruit.length)
document.write(fruit.length)
fruit.pop()
console.log(fruit)
fruit.push("dragonfruits")
fruit.shift()
fruit.unshift("banana")
console.log(fruit)
fruit.splice(1,0,'papaya','peach')
console.log(fruit)
}
