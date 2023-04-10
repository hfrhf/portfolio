// location fb insta
const fb=document.getElementById("fb")
fb.onclick=()=>{
  var url="https://www.facebook.com/profile.php?id=100083085469935"
  window.open(url,"_blank")
}



//end 


//location one

const one=document.getElementById("one")
one.onclick=()=>{
  window.open("https://hfrhf.github.io/LandingPage/")
}
const two=document.getElementById("two")
two.onclick=()=>{
  window.open("https://hfrhf.github.io/store/")
}
const three=document.getElementById("three")
three.onclick=()=>{
  window.open("https://hfrhf.github.io/LandingPage/")
}
const four=document.getElementById("four")
four.onclick=()=>{
  window.open("https://hfrhf.github.io/store/")
}
const five=document.getElementById("five")
five.onclick=()=>{
  window.open("https://hfrhf.github.io/LandingPage/")
}
const sis=document.getElementById("sis")
sis.onclick=()=>{
  window.open("https://hfrhf.github.io/store/")
}

let skills =document.querySelector(".skills")
let spans=document.querySelectorAll(".progress span")

window.onscroll=function(){
    if(window.scrollY>=skills.offsetTop-700){
        spans.forEach((span)=>{
            span.style.width=span.dataset.width
        })
    }
}

function twe(){
  const words=["mohammed abdelhadi","a freelancer","a front end developper"]
  let wordCount=0
  let letterCount=0
  let currentText=""
  let currentWord=""
  let timeout=400
  let isDeleting=false

  function type(){
    if (wordCount===words.length) {
      wordCount=0
    }
    currentWord=words[wordCount]
    if(isDeleting){
      currentText=currentWord.slice(0,--letterCount)
    }else{
      currentText=currentWord.slice(0,++letterCount)
    }
    document.querySelector(".typewriter").textContent=currentText
    timeout=isDeleting ? 200 : 400
    if(!isDeleting && currentText.length ===currentWord.length){
      timeout=200
      isDeleting=true
      
    }
    else if(isDeleting && currentText.length===0){
      timeout=1000
      isDeleting=false
      wordCount++
    }
    setTimeout(type,timeout)
  }
  type()
}
twe()

// menu

let btn=document.getElementById("btn-menu")
let header=document.querySelector(".header ul")
let ul=document.getElementById("ul")
let nav=document.getElementById("nav")
//.

btn.onclick=()=>{
  nav.classList.toggle("active")
  ul.classList.toggle("activeul")
}

// mail

function send(){
  Email.send({
SecureToken : "2d2af495-0684-4ecc-9ca8-65ce74844a69",
To : 'hfrhf223@gmail.com',
From : "hfrhf223@gmail.com",
Subject : "work Email",
Body : "name:   "+document.getElementById("name").value
      +"<br> Email:  "+document.getElementById("email").value
      +"<br> message:  "+document.getElementById("message").value
}).then(
message => alert("message send succesfully")
);
}

//slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function updateSwiper() {
  if (window.innerWidth < 968) {
    swiper.params.slidesPerView = 1;
  } else if(window.innerWidth<1200){
    swiper.params.slidesPerView = 2;
  }
   else {
    swiper.params.slidesPerView = 3;
  }
  swiper.update();
}
window.addEventListener('load', updateSwiper);
window.addEventListener('resize', updateSwiper);






    

 


