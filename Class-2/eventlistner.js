

const mySum = () => {
    let no1 = Number(document.getElementById("no1").value);
    let no2 = Number(document.getElementById("no2").value);

    let ans = no1 + no2;

    document.getElementById("demo1").innerHTML = "ADDITION : " + ans;
};

document.getElementById("btn1").addEventListener("click", mySum);
