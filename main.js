console.log("hello world")

// const age=document.querySelector('age')
// console.log(age)
// document.write("headder")
 let age,chestPain,Rbp,FastSugar;
 function generate()
{
      age=document.getElementById('age').value
    
      localStorage.setItem("age",age)
     
      chestPain=document.getElementById('cp').value
    
      localStorage.setItem("chestPain",chestPain)
     
     Rbp=document.getElementById('trestbps').value
     localStorage.setItem("Rbp",Rbp)
 

     FastSugar=document.getElementById('fbs').value
     localStorage.setItem("FastSugar",FastSugar)
      
}
age=localStorage.getItem('age')
console.log(age)
chestPain=localStorage.getItem("chestPain")
console.log(chestPain)
Rbp=localStorage.getItem("Rbp")
console.log(Rbp)
FastSugar=localStorage.getItem("FastSugar")
 console.log(FastSugar)

if((age>23&&age<50) && chestPain<=1 && (Rbp>=94 && Rbp<=150) && FastSugar==0)
     {
         document.getElementById('safe').innerHTML="Great! You DON'T chances have Heart Disease."
         
     }
     else
     {
         document.getElementById('danger').innerHTML="Oops! You have Chances of Heart Disease."
         
     }
 
 
 