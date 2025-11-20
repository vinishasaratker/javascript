
let but2 = () => {
    let hy = document.querySelector('#inp').value;
    alert(`welcome ${hy}`);
}

let but3 = () => {
    let change = document.querySelector('#inp2').value;  // input ka text
    let box = document.querySelector('#box2');           // box2 div

    box.style.backgroundColor = change;                  // same color apply
}


