var btn1 = document.querySelector("#changeBtn");
var btn2 = document.getElementById("navAboutBtn");
var mainCont = document.getElementById("container_cont");


btn1.addEventListener("click", (e)=>{
    e.preventDefault();
    btn1.classList.toggle("translate_btn");
    mainCont.classList.toggle("translate_cont");
})

btn2.addEventListener("click", (e)=>{
    e.preventDefault();
    btn1.classList.add("translate_btn");
    mainCont.classList.add("translate_cont");
})