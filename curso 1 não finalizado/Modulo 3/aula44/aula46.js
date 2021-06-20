// console.log('Dia', data.getDate());
// //começa a contar em 0
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// // console.log('Milissegundos', data.getMilliseconds());
// //começa a contar em 0
// console.log('Dia da semana', data.getDay());
// //console.log(data.toString());


function zeroaesquerda(num){
    return num>=10 ? num : `0${num}`;
}

function formataData(){
    const dia = zeroaesquerda(data.getDate());
    const mes = zeroaesquerda(data.getMonth()+1);
    const ano = zeroaesquerda(data.getFullYear());
    const hora = zeroaesquerda(data.getHours());
    const minutos = zeroaesquerda(data.getMinutes());
    const segundos = zeroaesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}


const data = new Date();
const dataAtualBrasil = formataData(data);
console.log(dataAtualBrasil);