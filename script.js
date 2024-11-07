let burger = document.querySelector(".burger");
let mobailMenu = document.querySelector(".menu");
let xmark = document.querySelector (".xmark");

burger.addEventListener("click", ()=>{
    mobailMenu.classList.add("show");
    xmark.style.display = "block";
    burger.style.display = "none";

    
});

xmark.addEventListener("click", ()=>{
    mobailMenu.classList.remove("show");
    xmark.style.display = "none";
    burger.style.display = "block";

    
});



