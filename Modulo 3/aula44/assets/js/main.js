// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  //Busca o valor colocado no input
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  // transforma o valor buscando no input em um número para fazer os cálculos
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

//Salva em um array as respostas possíveis para o imc e vincula ao resultado obtido pela conta do imc
function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

// faz o cálculo do imc
function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// Cria um parágrado dentro do html
function criaP () {
  const p = document.createElement('p');
  return p;
}

// Imprime no html o resultado do imc
function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  // Recebe a função que cria um parágrafo no html
  const p = criaP();


  // busca no css da classe que exibe a mensagem de respposta do envio/erro do formulário
  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;

  // Insere o parágrafo criado para o html na div de resultado
  resultado.appendChild(p);
}
