let body = document.querySelector("window")
let background=document.querySelector(".background")


function changeimg(){
    let random=Math.floor(Math.random()*11)+1;
    var image =["url(https://image.tmdb.org/t/p/original/q7vmCCmyiHnuKGMzHZlr0fD44b9.jpg)", "url(https://image.tmdb.org/t/p/original/9wJO4MBzkqgUZemLTGEsgUbYyP6.jpg)",
    "url(https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg)",
    "url(https://image.tmdb.org/t/p/original/cIztAxDn3H8JylRaJwiHHpkGe53.jpg)",
    "url(https://image.tmdb.org/t/p/original/e3gVl1gnxEFKLTF6pn6KRqUPi9K.jpg)",
    "url(https://image.tmdb.org/t/p/original/deLWkOLZmBNkm8p16igfapQyqeq.jpg)",
    "url(https://image.tmdb.org/t/p/original/ehumsuIBbgAe1hg343oszCLrAfI.jpg)",
    "url(https://image.tmdb.org/t/p/original/j9eOeLlTGoHoM8BNUJVNyWmIvCi.jpg)",
    "url(https://image.tmdb.org/t/p/original/5cCfqeUH2f5Gnu7Lh9xepY9TB6x.jpg)",
    "url(https://image.tmdb.org/t/p/original/ugnzz1A9mjJUgnFwVqEUsUNt7t6.jpg)",
    "url(https://image.tmdb.org/t/p/original/sI6uCeF8mUlZx22mFfHSi9W3XQ9.jpg)"
    
          

]
    background.style.backgroundImage=image[random]

}

setInterval(() => {
    window.onload=changeimg();
}, 6000);
let boxes=[{ name:"woody woodpecker",
    image:"https://image.tmdb.org/t/p/original/xYduFGuch9OwbCOEUiamml18ZoB.jpg",
    date:"22.01.2024",bigimage:"https://image.tmdb.org/t/p/original/lkCDvf3QjXpAycm896oH1LRTK5X.jpg",review:"7.2 review",director:"",iframe:"https://www.youtube.com/embed/QzimzO9Irzc?si=VcMWGR71eQO4kM2S",},
    {name:"dune part two",image:"https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",date:"feb 27 2024",bigimage:"https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",review:"6.5 review",director:"",iframe:"https://www.youtube.com/embed/Way9Dexny3w?si=7PJRJf9mzDxgdQOu" },
    {name:"kung fu panda",image:"https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",date:"22.01.2024",bigimage:"https://image.tmdb.org/t/p/original/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",review:"9.8 review",director:"",iframe:"https://www.youtube.com/embed/_inKs4eeHiI?si=ofHsCN7zRX0iZJ2e"},
    {name:"road house",image:"https://image.tmdb.org/t/p/original/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",date:"mar 8 2024",bigimage:"https://image.tmdb.org/t/p/original/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",review:"7.9 review",director:"",iframe:"https://www.youtube.com/embed/Y0ZsLudtfjI?si=Yo3pisFdOmNVdlYh"}]
let clutter="";
let card1= document.querySelector(".card")
boxes.forEach((box,index)=>{
    clutter+=
    clutter=`
    <div class="card1" id=${index}>
             <img src=${box.image}/>
             <div class="p1">
               <p>${box.name}</p>
               <p>${box.date}</p>
             </div>
           </div>
    `
})
console.log(clutter)
card1.innerHTML=clutter;
let boxes2=[{ name:"anyone but you",image:"https://image.tmdb.org/t/p/original/5qHoazZiaLe7oFBok7XlUhg96f2.jpg",date:"22.01.2024",bigimage:"https://image.tmdb.org/t/p/original/j9eOeLlTGoHoM8BNUJVNyWmIvCi.jpg",review:"10 review",director:"",iframe:"https://www.youtube.com/embed/ESEc6W2h9_k?si=SQm0J887hveST2YP",},
    {name:"land of bad",image:"https://image.tmdb.org/t/p/original/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg",date:"22.01.2024",bigimage:"https://image.tmdb.org/t/p/original/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",review:"5.6 review",director:"",iframe:"https://www.youtube.com/embed/yTFazxfrXVw?si=4Oa25saMPCSPd-Qy",},
    {name:"ghostbuster frozen",image:"https://image.tmdb.org/t/p/original/6faYaQyiBPhqAizldJKq21mIVaE.jpg",date:"22.01.2024",bigimage:"https://image.tmdb.org/t/p/original/5cCfqeUH2f5Gnu7Lh9xepY9TB6x.jpg",review:"8.9 review",director:"",iframe:"https://www.youtube.com/embed/X7Di42uUaF0?si=2cyNNFw1-IOJrn2x",},
    {name:"the tearsmith",image:"https://image.tmdb.org/t/p/original/uoBHsxSgfc3PQsSn98RfnbePHOy.jpg",date:"22.01.2024",bigimage:"https://image.tmdb.org/t/p/original/e3gVl1gnxEFKLTF6pn6KRqUPi9K.jpg",review:"9.2 review",director:"",iframe:"https://www.youtube.com/embed/qEh_90RnlD8?si=D9hcD0tyhT8jzVoP",}]
let clutter2="";
let cardi= document.querySelector(".cardi")
boxes2.forEach((box,index)=>{
    clutter2+=
    clutter2=`
    <div class="card1" id=id${index}>
            <img src=${box.image}/>
             <div class="p1">
               <p>${box.name}</p>
               <p>${box.date}</p>
             </div>
           </div>`
})
cardi.innerHTML=clutter2;
let account = document.querySelector(".account");
account.addEventListener("click",()=>{
    window.location.href="../html/signin.html"
})
let id0= document.getElementById("0")
id0.addEventListener("click",()=>{
    window.location.href="../html/moviedetail1.html"
})
let id1= document.getElementById("1")
id1.addEventListener("click",()=>{
    window.location.href="../html/moviedetail2.html"
})
let id2= document.getElementById("2")
id2.addEventListener("click",()=>{
    window.location.href="../html/moviedetail3.html"
})
let id3= document.getElementById("3")
id3.addEventListener("click",()=>{
    window.location.href="../html/moviedetail4.html"
})
let id5= document.getElementById("id0")
id5.addEventListener("click",()=>{
    window.location.href="../html/moviedetail5.html"
})
let id6= document.getElementById("id1")
id6.addEventListener("click",()=>{
    window.location.href="../html/moviedetail6.html"
})
let id7= document.getElementById("id2")
id7.addEventListener("click",()=>{
    window.location.href="../html/moviedetail7.html"
})
let id8= document.getElementById("id3")
id8.addEventListener("click",()=>{
    window.location.href="../html/moviedetail8.html"
})
