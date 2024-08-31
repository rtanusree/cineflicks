let trailer = document.getElementById("trailer");
let cross = document.getElementById("cross");
let fullmovie = document.getElementById("fullmovie");
console.log(trailer)
let backgroundblur=document.querySelector(".background-blur");
console.log(backgroundblur)
let backgroundblur1=document.querySelector(".background-blur1");
trailer.addEventListener("click",()=>{
      backgroundblur.style.display="none"
      backgroundblur1.style.display="block"
})
cross.addEventListener("click",()=>{
    backgroundblur.style.display="block"
    backgroundblur1.style.display="none"
})
fullmovie.addEventListener("click",()=>{
   window.location.href="../html/package.html"
})
let home=document.querySelector(".home");
home.addEventListener("click",()=>{
    window.location.href="../html/cineflicks.html"
})