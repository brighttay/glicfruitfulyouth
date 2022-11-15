let nav = document.querySelector("#nav");
let menu = document.querySelector("#menu");
let exit = document.querySelector("#close");
let mainNav = document.querySelector("#main-nav");
let body = document.querySelector("#body");
let cover = document.querySelector("#cover");
let html = document.querySelector("html");
let arrowFoward = document.querySelector("#arrow-foward");
let arrowBack = document.querySelector("#arrow-back");
let slide = document.querySelector("#slider")
let count = 0
let count2 = 0
let count3 = 0
let slide2 = document.getElementById("testimony").children
let flex = document.getElementsByClassName("flex")[0].children;
let getClass = flex[0].classList


for(let i = 0; i<=flex.length-1; i++){
    flex[i].addEventListener("click",function (){
       document.getElementById("testimony").scrollLeft = window.innerWidth * i
       
        flex[i].classList.replace("dot","active");

        getClass.replace("active","dot");
        getClass = flex[i].classList

    })
}



  


for(let i = 0; i<=slide2.length-1; i++){
    slide2[i].style.left = 105 * i + "%"
}

menu.addEventListener("click",function (){
    nav.style.right = "0px";
    menu.style.opacity = "0";
    cover.style.opacity = "0.4"
    cover.style.zIndex = "100"
    html.style.overflowY = "hidden"
})

exit.addEventListener("click",function (){
    nav.style.right = "-50%";
    menu.style.opacity = "1";
    cover.style.opacity = "0"
    cover.style.zIndex = "-100"
    html.style.overflowY = "scroll"
})

cover.addEventListener("click", function (){
    cover.style.opacity = "0"
    cover.style.zIndex = "-100"
    nav.style.right = "-50%";
    menu.style.opacity = "1";
    html.style.overflowY = "scroll"
})

function slideNow(){
    arrowFoward.addEventListener("click",function (){
         count = slide.scrollLeft += 100
         
        
    })
    
    arrowBack.addEventListener("click",function (){
        count = slide.scrollLeft -= 100
    })
}

slideNow()

