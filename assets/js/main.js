
function calcular() {
  const form = document.querySelector('#formulario');
  const peso = document.querySelector('#peso');
  const altura = document.querySelector('#altura');
  const valorResultado = peso.value / (altura.value * altura.value);
  const resultado = valorResultado.toFixed(2);
  const divResultado = document.querySelector('.resultado');
  const tipoPeso = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

  if (resultado < 18.5) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[0]}`;
    divResultado.style.color = "#ff0b03";
  }
  else if (resultado >= 100) {
    divResultado.innerHTML = 'Favor conferir as informaçoes fornecidas!';
    divResultado.style.color = "#ff0b03";
  }
  else if (resultado >= 40) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[5]}`;
    divResultado.style.color = "#000";
  }
  else if (resultado >= 34.99) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[4]}`;
    divResultado.style.color = "#000";
  }
  else if (resultado >= 29.99) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[3]}`;
    divResultado.style.color = "#000";
  }
  else if (resultado >= 24.99) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[2]}`;
    divResultado.style.color = "#000";
  }
  else if (resultado >= 18.5) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[1]}`;
    divResultado.style.color = "#000";
  }
  else {
    divResultado.innerHTML = 'Favor conferir as informaçoes fornecidas!';
    divResultado.style.color = "#ff0b03";
  }
}

