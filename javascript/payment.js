// let i1 =document.querySelector("#i1");
// let i2 =document.querySelector("#i2");
// let form=document.querySelector(".forms1");
// i1.addEventListener("click",()=>{
//     i1.style.display="none";
//     i2.style.display="block";
//     form.style.display="block"
// })
// i2.addEventListener("click",()=>{
//     i1.style.display="block";
//     i2.style.display="none";
//     form.style.display="none"
// })
// function formatPhoneNumber(input) {
//     const value = input.value.replace(/\D/g, '');
//     let formatted = value;

//     if (value.length > 4 && value.length <= 8) {
//         formatted = `${value.slice(0, 4)}-${value.slice(4)}`;
//     } else if (value.length > 6) {
//         formatted = `${value.slice(0, 4)}-${value.slice(4, 8)}-${value.slice(6, 10)}`;
//     }

//     input.value = formatted;
// }
// function formatPhoneNumber(input) {
//     // Remove any non-digit characters, except for the plus sign (+)
//     let value = input.value.replace(/[^+\d]/g, '');
    
//     // Formatting the phone number based on length
//     if (value.length > 1 && value.length <= 4) {
//         value = `${value.slice(0, 4)}`;
//     } else if (value.length > 4 && value.length <= 6) {
//         value = `${value.slice(0, 4)}-${value.slice(4)}`;
//     } else if (value.length > 6 && value.length <= 10) {
//         value = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6)}`;
//     } else if (value.length > 10) {
//         value = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 10)}-${value.slice(10)}`;
//     }

//     input.value = value;
// }
function formatPhoneNumber(input) {
    // Remove any non-digit characters
    let value = input.value.replace(/\D/g, '');

    // Formatting the phone number based on length
    if (value.length > 4 && value.length <= 8) {
        value = `${value.slice(0, 4)}-${value.slice(4)}`;
    } else if (value.length > 8 && value.length <= 12) {
        value = `${value.slice(0, 4)}-${value.slice(4, 8)}-${value.slice(8)}`;
    } else if (value.length > 12) {
        value = `${value.slice(0, 4)}-${value.slice(4, 8)}-${value.slice(8, 12)}-${value.slice(12, 16)}`;
    }

    input.value = value;
}
let edate=document.querySelector("#e-date");
edate.addEventListener("keyup",(e)=>{
   // const value1 = edate.value.replace(/\D/g, '');
    let newinput=edate.value;
    if(e.which !== 8){
         var numchars=e.target.value.length;
        if(numchars == 2){
            var thisval=e.target.value;
            thisval += '/';
            e.target.value=thisval;
        }
        
    }
    if(newinput.length<5){
        edate.style.border= "1px solid red";
    }else{
        edate.style.border= "1px solid green";
    }

})
let Expire=document.querySelector(".expire")
let cardnumber=document.querySelector(".cardnumber")
let cvv=document.querySelector(".cvv")
let name=document.querySelector(".fullname")
let submit=document.querySelector(".submit")
let p1=document.querySelector(".p1")
let p2=document.querySelector(".p2")
let p3=document.querySelector(".p3")
let p4=document.querySelector(".p4")
 if(cardnumber.value.length==19){
    p1.style.display="none";
}
else if(Expire.value.length==5){
    p3.style.display="none";
}
else if(cvv.value.length==3){
    p2.style.display="none";
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    if(Expire.value==""||cardnumber.value==""||cvv.value==""||name.value==""){
        alert("please enter your details")
    }
    else if(cardnumber.value.length<19){
        p1.style.display="block";
        p1.innerText="card number is not valid"
    }
    else if(cvv.value.length<3){
        p1.innerText=""
        p2.style.display="block";
        p2.innerText="cvv  is not valid";
    }
    else if(Expire.value.length<5){
        p2.innerText=""
        p3.style.display="block";
        p3.innerText="Expiry date  is not valid"
    }
    else{
        p1.style.display="none";
        p2.style.display="none";
        p3.style.display="none";
        Expire.value="";
        cvv.value="";
        cardnumber.value="";
        name.value="";
        window.location.href="paymentsucess.html"
    }
})
let pay1=document.querySelector(".pay1")
let pay2=document.querySelector(".pay2")
pay1.addEventListener("click",()=>{
   window.location.href="paymentfailed.html"
})
pay2.addEventListener("click",()=>{
    window.location.href="paymentfailed.html"
 })
