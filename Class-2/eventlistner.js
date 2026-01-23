const mySum = () => {

    let no1 = Number(document.getElementById("no1").value);
    let no2 = Number(document.getElementById("no2").value);
    let ans = no1 + no2;
    document.getElementById("demo1").innerHTML = "ADDITION : " + ans;
}

    document.getElementById("btn1").addEventListener("click", mySum)
    const mysum=()=>
  {

    document.getElementById("btn3").addEventListener("click", mysum)

     let no1 = Number(document.getElementById("phy").value);
     let no2 = Number(document.getElementById("che").value);
     let no3 = Number(document.getElementById("math").value);
     let no4 = Number(document.getElementById("eng").value);

    let ans = no1+no2+no3+no4;
    let per=ans/4;
    document.getElementById("sum").innerHTML = "ADDITION : " + ans;
    document.getElementById("per").innerHTML = "persantage is : " + per;

    }
     document.getElementById("btn3").addEventListener("click", mysum)