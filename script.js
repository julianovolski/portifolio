var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    sidebar = document.querySelector(".container").classList.toggle("show-menu");
})

if(document.getElementById("nome").value.length > 3){
    document.querySelector("[for=nome]").classList.toggle("apagar");
}

function validaForm (){
    if(document.getElementById("nome").value.length < 3){
        document.getElementById("nome").focus();
        return false
    }
    if(document.getElementById("email").value.length < 3){
        document.getElementById("email").focus();
        return false
    }
    if(document.getElementById("assunto").value.length < 3){
        document.getElementById("assunto").focus();
        return false
    }
    if(document.getElementById("mensagem").value.length < 3){
        document.getElementById("mensagem").focus();
        return false
    }
}  

