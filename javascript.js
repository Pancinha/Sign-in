function validar() {

    const senha = document.getElementById("senha");

    var senhaValida;
    senhaValida = "lideranca@2022";

    if (senha.value == senhaValida) {
        //alert("Senha correta");
        window.location.href = "https://hresweb01/si-hres/formPHP/";
    } else {
        alert("Senha incorreta");
    }
}


function colorMouse() {
    const button = document.getElementById("botao");
    button.style.backgroundColor = "#6a5aff";
    button.style.borderColor = "#6a5aff";
    button.style.color = "white";
}
function colorMouseEx(){
    const button = document.getElementById("botao");
    button.style.backgroundColor = "white";
    button.style.borderColor = "white";
    button.style.color = "black";
}