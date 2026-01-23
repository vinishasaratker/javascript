let calculation = () => {

    let age = Number(document.getElementById("age").value);
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
   let gender = document.querySelector('input[name="gender"]:checked').value;

    let bmr;
    if (gender === "male") {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

document.getElementById("demo").innerHTML = "Your BMR is : " + bmr;
}

document.getElementById("btn1").addEventListener("click", calculation);

