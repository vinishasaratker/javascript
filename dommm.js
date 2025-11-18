
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
 let box2=()=>{
   let divtag=document.querySelector('#main');
   divtag.style.backgroundColor="yellow"
}
let box3=()=>{
   let divtag=document.querySelector('#main');
   divtag.style.backgroundColor="green"
}