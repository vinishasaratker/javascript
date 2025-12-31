let vini=()=>{
    const arrr=[5,7,9,5,0]
    for (const num of arrr) {
        console.log(num);
         }
         let fruit=["mango&apple"]
         for (const greet of fruit) {
            console.log(`each charactoris ${greet}`)
            
         }
}
let motu=()=>{
    const name=["vujgfj","hiyy","ljga","opriya","gifi ji "]
    for (const namesare of name) {
     console.log(namesare) 
     console.log(`charactor is ${namesare}`)  
    }
}

let maapps=()=>{
const map=new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
map.set('BR',"brajile")
console.log(map);
//for (const key of map) {
  //  console.log(key)
    // destructuring our array 
    for (const [key,value] of map) {
        console.log(key,":-",value);
        
    }
    
//}
}
// object mapping 
// object me  for of loopsuse nahi kr skte yeh loop lgana thodasa difficult hota hai to forin loop kausekr skte hai 
objmaps=()=>{
    const myobject={
        js:"javascript",
        cpp:"c++",
        java:"javaprogramming",
        node:"react"
    }
    for (const key in myobject) {
        // only keys print hongi
       // console.log(key)
        //console.log(myobject[key]) 
        // keys ke sath values bhiprint hongi 
        console.log(`${key} shortcut is for ${myobject[key]}`)
    }
}

vini();
motu();
maapps();
objmaps();