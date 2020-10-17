var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    sidebar = document.querySelector(".container").classList.toggle("show-menu");
})