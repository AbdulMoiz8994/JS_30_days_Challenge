let hour_handle=document.querySelector(".hour_handle");
let mints_handle=document.querySelector(".mints_handle");
let seconds_handle=document.querySelector(".seconds_handle");
let clock=document.querySelectorAll(".clock");


function setDate(){

  let currentTime=new Date();
  let seconds=currentTime.getSeconds();
//   get Second
  const getDegree= ((seconds / 60) * 360) + 90; 
  seconds_handle.style.transform=`rotate(${getDegree}deg)`
// get mints
 let minutes=currentTime.getMinutes();
const getdegreeMinsts=((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
mints_handle.style.transform=`rotate(${getdegreeMinsts}deg)`

// getHours
const getHours=currentTime.getHours();
const getDegreeHours=((getHours / 12)* 360) + ((minutes / 60) * 30) + 90;
console.log(getDegreeHours);
hour_handle.style.transform=`rotate(${getDegreeHours}deg)`

// it runs whenever funs runs and we assigning the transition
   if(seconds == 0 || minutes == 0){
    clock.forEach(value =>{
        console.log(value);
        value.style.transition="all 0s"
    })
   }else{
    clock.forEach(value =>{
        value.style.transition="all 0.5s"
    })
   }
}

setInterval(setDate, 1000)

setDate()