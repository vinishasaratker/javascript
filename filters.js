let method1 = () => {

    const mynum = [2,6,89,0,87,54,54,34,12,9865];
    const newnum = mynum.filter((num) => {
         return num > 8

    });
    console.log(newnum);
}

let method2=()=>{
    const even=[2,4,3,56,78,99,409,55,44,34,23,67];
    const ans=even.filter((even)=>{
        if(even%2==0){
            console.log("even number is :"+even)
        }
        else {
            console.log("oddd number ")
        }
    })
}
method1();
method2();
