// function criaPessoa(nome, sobrenome, idade){
//     return{
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

function criaPessoa(nome, sobrenome, idade){
    // falar(){
    //     console.log(`${this.nome} ${this.nome} está falando oi!`);
    // }
    return{
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Letícia', 'Delfino', 25);
const pessoa2 = criaPessoa('Luis', 'Otavio', 5);
const pessoa3 = criaPessoa('Maria', 'Clara', 34);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
pessoa1.falar();