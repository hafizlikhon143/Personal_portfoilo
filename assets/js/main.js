var orderBtn1 = document.querySelector("#orderBbtn");
var orderBtn2 = document.querySelector("#orderSbtn");
var orderBtn3 = document.querySelector("#orderPbtn");
var contactBtn = document.querySelector("#contactBtn");
var closeBtn1 = document.querySelector("#closeBtn1");
var closeBtn2 = document.querySelector("#closeBtn2");
var orderForm = document.querySelector("#orderForm");
var contactForm = document.querySelector("#contactForm");
var floatCont = document.querySelector("#floatContainer");
var floatCont2 = document.querySelector("#floatContainer2");
var pkgName = document.querySelector("#id_package");
var img_col = document.querySelector("#img_col");

if (
  document.querySelector("#container2").getBoundingClientRect().width <= 785
) {
  img_col.classList.add("col-auto");
} else if (
  document.querySelector("#container2").getBoundingClientRect().width > 785
) {
  img_col.classList.remove("col-auto");
}

orderBtn1.addEventListener("click", () => {
  floatCont.style.display = "grid";
  pkgName.value = "1";
});
closeBtn1.addEventListener("click", () => {
  floatCont.style.display = "none";
});
closeBtn2.addEventListener("click", () => {
  floatCont2.style.display = "none";
});
orderBtn2.addEventListener("click", () => {
  floatCont.style.display = "grid";
  pkgName.value = "2";
});
orderBtn3.addEventListener("click", () => {
  floatCont.style.display = "grid";
  pkgName.value = "3";
});
contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  floatCont2.style.display = "grid";
});

function addPlaceholder(elemId, txt) {
  let elemid = document.getElementById(elemId);

  elemid.setAttribute("placeholder", txt);
}

addPlaceholder("id_client_email", "Please Enter your email to Order...");
addPlaceholder("id_project_name", "Please Give your Project a Name...");
addPlaceholder(
  "id_project_desc",
  "Please give some Info about your project here..."
);
