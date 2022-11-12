let para = document.querySelector("#para")

function dropParagraph(){
    para.style.top = "0px"
    para.style.opacity = "1"
}

setInterval(dropParagraph, 100)