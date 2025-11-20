
let jstext=()=>{
  let h1tag=document.getElementById('text'); 
  
  // agr hum button par click krenge tab yeh text show honga 
    h1tag.innerHTML="<u>hyy this is backend text</u>";
   let ptag=  document.querySelector('.para');
   ptag.style.color="red";

//    <!-- cammel case ka use krna hai properties ke liye 1st element small honga or 
//  baki ke second vale capital -->
   ptag.style.fontSize="50px";
   ptag.style.backgroundColor="yellow"
   ptag.style.fontWeight="600"
}
let box1=()=>{
   let divtag=document.querySelector('#main');
   divtag.style.backgroundColor="red"
}
//  let box2=()=>{
//    let divtag=document.querySelector('#main');
//    divtag.style.backgroundColor="yellow"
// }
let box3=()=>{
   let divtag=document.querySelector('#main');
   divtag.style.backgroundImage="url('download.jpg')"
   divtag.style.backgroundSize="cover"
   divtag.style.backgroundRepeat="no-repeat"
}
let button=()=>{
   let vini=document.querySelector('.head')
   vini.style.color="red"

      let vini2=document.querySelector('.paragraph')
   vini2.style.color="blue"
}

// let jstext=()=>{
//   let h1tag=document.getElementById('text'); 
  
//   // agr hum button par click krenge tab yeh text show honga 
//     h1tag.innerHTML="<u>hyy this is backend text</u>";
//    let ptag=  document.querySelector('.para');
//    ptag.style.color="red";

let but1=()=>{
  let my=document.getElementById('#list')
  my.innerHTML=`
 <ul>
        <li>mango</li>
        <li>apple</li>
        <li>banana</li>
    </ul> `
}
let bx1=()=>{
   let image2=document.querySelector('.h7')
   image2.style.backgroundImage="url('bike.jpg')"
}
bx1()

let bx2=()=>{
   let image2=document.querySelector('.h8')
   image2.style.backgroundImage="url('car.jpg')"
}
bx2()
let bx3=()=>{
   let image3=document.querySelector('.h9')
   image3.style.backgroundImage="url('computer.jpg')"
}
bx3()
let bx4=()=>{
   let image4=document.querySelector('.h10')
   image4.style.backgroundImage="url('car22.jpg')"
}
bx4()


let leftimage=()=>{
   let lm=document.querySelector('#left')
     lm.style.backgroundImage="url('bike.jpg')"
}
let leftimage2=()=>{
   let lm2=document.querySelector('#left')
     lm2.style.backgroundImage="url('car.jpg')"
}
let leftimage3=()=>{
   let lm3=document.querySelector('#left')
     lm3.style.backgroundImage="url('computer.jpg')"
}

let leftimage4=()=>{
   let lm4=document.querySelector('#left')
     lm4.style.backgroundImage="url('car22.jpg')"
}


let vini=()=>{
   let okk=document.querySelector('#img')
   okk.src="bike.jpg"
}
let but2=()=>{
   let hy=document.querySelector('#inp').value
   alert(` welcom ${hy}`)
}

