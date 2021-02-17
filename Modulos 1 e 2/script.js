// const pessoa = {
//     nome = document.getElementById("cNome"),
//     sobrenome = document.getElementById("cSobrenome"),
//     peso = document.getElementById("cPeso"),
//     altura = document.getElementById("cAltura"),
// }


function meuEscopo(){
    const form = document.querySelector('.form');

    // form.onsubmit = function (evento){
    //     evento.preventDefault();
    // };

    function recebeEventoForm(){
        evento.preventDefault();
        console.log('Form não foi enviado');
    };

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();