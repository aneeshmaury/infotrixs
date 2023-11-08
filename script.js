let btndark = document.querySelector("#btndark");
let bodycolor = document.querySelector("body");
let btnlight = document.querySelector("#btnlight")

btndark.addEventListener("click", function() {
    bodycolor.style.backgroundColor = "#120d24";
});

btnlight.addEventListener("click", function() {
    bodycolor.style.backgroundColor = "#faf5f5";
});