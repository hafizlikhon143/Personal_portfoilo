var rotating_plate = document.querySelector("#rotating_plate");
var objects = document.querySelectorAll("#object");
var objView = document.querySelector("#view");
var viewImg = document.querySelector("#viewImg");
var skillNum = document.querySelector("#skill_num");
var skillNameDiv = document.querySelector("#skillNameDiv");
var rotationDeg = 0;
var rotation = 1;
var skillLvl = [100, 70, 80, 95]
var skillName = ["HTML", "Python", "JavaScript", "CSS"]
var intervel = setInterval(function(){
    rotationDeg += 1
    rotating_plate.style.transform = " rotateX(80deg) rotateZ("+rotationDeg+"deg)";
    for(i=0; i<objects.length; i++){
        objects[i].style.transform = " rotateX(-90deg) rotateY("+rotationDeg+"deg)";
        
    }
    if(rotationDeg == 90 ){
        viewImg.setAttribute("src", "/static/img/planethtml.png");
        skillNum.innerText = skillLvl[0]+"%";
        skillNum.style.transition = "all 0.4s ease-in"
        skillNum.style.width = ""+skillLvl[0]+"%";
        skillNameDiv.innerText = skillName[0]
    }
    else if(rotationDeg == 180){
        viewImg.setAttribute("src", "/static/img/worldwide.png");
        skillNum.innerText = skillLvl[1]+"%";
        skillNum.style.transition = "all 0.4s ease-in"
        skillNum.style.width = ""+skillLvl[1]+"%";
        skillNameDiv.innerText = skillName[1]
    }
    else if(rotationDeg == 270 ){
        viewImg.setAttribute("src", "/static/img/jupiter_js.png");
        skillNum.innerText = skillLvl[2]+"%";
        skillNum.style.transition = "all 0.4s ease-in"
        skillNum.style.width = ""+skillLvl[2]+"%";
        skillNameDiv.innerText = skillName[2]
    }
    else if(rotationDeg == 360 ){
        viewImg.setAttribute("src", "/static/img/neptune_css.png");
        skillNum.innerText = skillLvl[3]+"%";
        skillNum.style.transition = "all 0.4s ease-in"
        skillNum.style.width = ""+skillLvl[3]+"%";
        skillNameDiv.innerText = skillName[3]
        rotationDeg = 0
    }
}, 20);