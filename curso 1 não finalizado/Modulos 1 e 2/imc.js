let nome = "Otávio";
let idade = 30;
let peso = 84;
let altura = 1.8;

imc = peso/(altura**2);

console.log(nome, 'tem ', idade, ', pesa ', peso, 'kg e tem ', altura, "m de altura. Seu IMC é de ", imc);

console.log(nome + 'tem ' + idade+ ', pesa '+ peso+ 'kg e tem '+ altura+ "m de altura. Seu IMC é de "+ imc);

console.log(`${nome} tem ${idade} pesa ${peso} kg e tem ${altura}m de altura. Seu IMC é de ${imc}`);