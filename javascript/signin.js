let submit = document.querySelector(".submit");
let password = document.querySelector(".password1");
let password1 = document.querySelector(".password2");
let p = document.querySelector(".p4");
let name = document.querySelector(".name");
let email= document.querySelector(".email");
let phone = document.querySelector(".phone");
let p1 = document.querySelector(".p5");
let p6 = document.querySelector(".p6");
let p7 = document.querySelector(".p7");
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    if(name.value==""||phone.value==""||email.value==""){
         alert("plese fill the full details before submitting")
    }
    else if (phone.value.length <= 9||phone.value.length >= 11){
      p6.innerText="Phone no is not valid";
    }
    else if(!email.value.match( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
      p6.innerText=""
      p7.innerText="Email id is not valid"
   }
    else if(password.value.length<8){
        p7.innerText=""
        p.innerText="please enter 8 character"
     }
     else if(password.value.search(/[0-9]/)==-1){
          p7.innerText=""
         p.innerText="please enter any one number"
     }
     else if(password.value.search(/[A-Z]/)==-1){
      p7.innerText=""
      p.innerText="please enter any one capital letter"
  }
  else if(password.value.search(/[a-z]/)==-1){
   p7.innerText=""
   p.innerText="please enter any one small letter"
}
else if(password.value.search(/[!/@/#/$/%/^/&/*/?/]/)==-1){
   p7.innerText=""
   p.innerText="please enter any one special character"
}
     else if(password.value!==password1.value){
        p.innerText=""
        p1.innerText="your password doesnot match"
     }
     else{
        alert("Congratulation! your account is created")
        name.value="";
        email.value="";
        password.value="";
        password1.value="";
        phone.value="";
        p.innerText="";
        p1.innerText="";
        p7.innerText="";
        p6.innerText="";
     }
})