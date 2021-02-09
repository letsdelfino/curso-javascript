// const pessoa = {
//     nome = document.getElementById("cNome"),
//     sobrenome = document.getElementById("cSobrenome"),
//     peso = document.getElementById("cPeso"),
//     altura = document.getElementById("cAltura"),
// }


function meuEscopo(){
    const form = document.querySelector('.form');

    form.onsubmit = function (evento){
        evento.preventDefault();
    };
}

meuEscopo();