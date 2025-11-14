
//1. Ask the user for their age using prompt() and show an alert 'You can vote' if age >= 18 else 'Too
//young'.
function eligibility(){
  let age= prompt(" enter your age")
  if(age>=18){
    alert(" you can vote")
  }
  else( alert(" you are too young"))

}

//2. Prompt the user for a password and check it against a hardcoded value; alert 'Access granted' or
//'Access denied'.
function passwardchecking(){
  let passward=prompt(" enter  passward")
  let rightpassward=1234
  if(passward==rightpassward){
    alert("Access granted ")
  }
  else{
    alert("Access denied")
  }
}

// 3. Create a grade checker: prompt for marks (0-100) and use if-else-if to
//  alert Grade A/B/C/F.
 function creategrade(){
  let marks=prompt(" enter your marks")
  if(marks<=100 && marks>=75){
    alert(" your grade is 'A' ")
  }
  else if(marks>50 && marks<75){
    alert(" your grade is 'B' ")
  }
 else if(marks>35 && marks<50){
    alert(" your grade is 'C' ")
  }
   else if(marks<35){
    alert(" your grade is 'D' ")
  }
 }



//4. --Prompt for a number and alert whether it is positive, negative, or zero.
function checkingnumber(){
  let number=prompt(" enter any number")
  if(number>0){
    alert(" number is positive")
  }
  else if(number<0){
    alert(" number is negative")
  }
    else if(number==0){
    alert(" number is zero")
  }
}
eligibility()
passwardchecking()
checkingnumber()
creategrade()


