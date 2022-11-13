
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
let slide2 = document.getElementById("testimony").children;
let flex = document.getElementsByClassName("flex")[0].children;
let getClass = flex[0].classList;
let num = 0;
let all = document.getElementsByTagName("*");
let list = document.getElementsByTagName("ul");



for(i = 0; i<= all.length-1; i++){
    all[i].style.scrollBehavior = "smooth"
}

for(i = 0; i<= list.length-1; i++){
    list[i].style.scrollBarWidth = "none"
    list[i].style.overflow = "hidden"
}



for(let j = 0; j<=flex.length-1; j++){
    flex[j].addEventListener("click",function (){
      num = document.getElementById("testimony").scrollLeft = window.innerWidth * j
       getClass.replace("active","dot");
       getClass = flex[j].classList;
       flex[j].classList.replace("dot","active");

       
    })
}



for(let i = 0; i<=slide2.length-1; i++){
    slide2[i].style.left = 105 * i + "%"
}

setInterval(function (){
    console.log(count2)
    
    if(count2 >= flex.length-1){
        count2 = -1
    }
    if(count2 < flex.length-1){
        count2++
    }
    flex[count2].click()
},3000)


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



body.addEventListener("touchmove",function (){
    mainNav.style.backgroundColor = "rgb(0, 0, 0)"
    mainNav.style.boxShadow = "0.1rem 0.2rem 0.2rem rgb(0, 0, 0)"
})

