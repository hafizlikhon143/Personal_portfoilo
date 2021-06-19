
function trackMouse(e){
    var content_width = document.body.clientWidth;
    if(e.x < content_width/2-100){
        document.body.classList.add("rocket-left")
        document.body.classList.remove("rocket-right")
    }
    else if(e.x > content_width/2+100){
        document.body.classList.add("rocket-right")
        document.body.classList.remove("rocket-left")
    }
    else{
        document.body.classList.remove("rocket-left")
        document.body.classList.remove("rocket-right")
    }
}

document.body.addEventListener("mousemove", trackMouse)