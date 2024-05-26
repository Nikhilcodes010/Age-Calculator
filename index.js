const date=document.querySelector("#date");
const calculate=document.querySelector("#calculate");
const msg=document.querySelector("#msg-container");





calculate.addEventListener("click",()=>{
    const birthday=date.value;
    const birthdaydate=new Date(birthday);
    if(birthdaydate.getFullYear){
    age_calculate(birthdaydate);
    }
})
const age_calculate=(birthdaydate)=>{
    const currentdate=new Date();
    const age=currentdate.getFullYear()-birthdaydate.getFullYear();
    if(age===0){
        msg.innerHTML=`You are just born!!!`;
    }
    else if(age>0 && age<=16){
        msg.innerHTML=`Your age is ${age}!!!`;
    }
    else if(age<18 && age>16){
        msg.innerHTML=`Your age is ${age} and you are going to be an adult!!!`;
    }
    else{
        msg.innerHTML=`Your age is ${age} and you can vote👍!!!`;
    }
    
    
}