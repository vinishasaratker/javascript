const Url="https://catfact.ninja/facts";
const factpara=document.getElementById('fact');

const getfacts=async()=>{

    console.log(" getting data ...")
    let response= await fetch(Url);
    
    console.log(response)// it is in json format 
    let data= await response.json();
     factpara.innerText=(data[0]).text;
}