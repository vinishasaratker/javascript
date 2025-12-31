// for in loop in arrays 
const funcc=()=>{
       let vegitable=["garlic","potato","tomato","ladyfinger","jinger"]
      for (const key in vegitable) {
       // yeh value  nhi key print ker rha like 0 1 2 3 4
       //console.log(key);
        console.log(vegitable[key]); }
}

const funcc2=()=>{
      // callbackfunction syntax  
         let coding=["js","cpp","react","python","html"]
       coding.forEach(    (item,index,arr)=>{   
        console.log(item,index,arr);
    }   )
}


const funccc3=()=>{
    // ek array ke andr multiple objects declare krna 
    const mycountry=[
                    {
                     stae:"MADHYA PRADESH",
                    language:"HINDI "
                     },
        {
        state:"MAHARASHTRA",
         language:"MARATHI"
        },
                { state:"BIHAR",
                language:"BIHARI"
                 }
    ]
    mycountry.forEach(  (item)=>{
       console.log(item.language); 
    })
}
funcc();
funcc2();
funccc3();