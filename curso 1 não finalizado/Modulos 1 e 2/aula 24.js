// let num1 = parseInt(window.prompt("Digite um número"));
// let num2 = parseInt(window.prompt("Digite outro número"));

// num1 = num1+num2;
// alert(num1);

const nome = prompt('Digite seu nome');
document.body.innerHTML += `O seu nome é <strong>${nome}<strong/><br/>`;
document.body.innerHTM += `Seu nome tem ${nome.length} letras<br/>`;
document.body.innerHTM += `A segunda letra do seu nome é ${nome[1]}<br/>`;
document.body.innerHTM += `Qual o primeiro índice da letra a do seu nome: ${nome.indexOf('a')}<br/>`;
document.body.innerHTM += `Qual o último índice da letra a do seu nome: ${nome.lastIndexOf('a')}<br/>`;
document.body.innerHTM += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br/>`;
document.body.innerHTM += `As palavras do seu nome são: ${nome.split(' ')}<br/>`;document.body.innerHTM += `Seu nome com letras maúusculas: ${nome.toUpperCase()}<br/>`;
document.body.innerHTM += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}<br/>`;