function handleKeyDown(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    calcular(); 
};
}

function calcular() {
  const peso = parseFloat(document.querySelector('#peso').value);
  const altura = parseFloat(document.querySelector('#altura').value / 100);
  const resultado = (peso / (altura * altura)).toFixed(2);
  const divResultado = document.querySelector('.resultado');
  const tipoPeso = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

   if (peso <=0  || altura <=0) {
    divResultado.innerHTML = 'Favor verificar os campos!';
    divResultado.style.color = "red";
    divResultado.classList.add('exibir');
    return;
  } else if(peso >=300  || altura >=3.00) { 
    divResultado.innerHTML = 'Favor usar numeros realistas!';
    divResultado.style.color = "red";
    divResultado.classList.add('exibir');
    return;
  } else if (isNaN(peso) || isNaN(altura)) {
    divResultado.innerHTML = 'Favor fornecer apenas números!';
    divResultado.style.color = "red";
    divResultado.classList.add('exibir');
    return;
  }
  
  if (resultado < 18.5) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[0]}`;
    divResultado.style.color = "#FFA500";
    divResultado.classList.add('exibir');
  }
  else if (resultado >= 100) {
    divResultado.innerHTML = 'Favor conferir as informaçoes fornecidas!';
    divResultado.style.color = "red";
    divResultado.classList.add('exibir');
  }
  else if (resultado >= 40) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[5]}`;
    divResultado.style.color = "#FFA500";
    divResultado.classList.add('exibir');
  }
  else if (resultado >= 34.99) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[4]}`;
    divResultado.style.color = "#FFA500";
    divResultado.classList.add('exibir');
  }
  else if (resultado >= 29.99) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[3]}`;
    divResultado.style.color = "#FFA500";
    divResultado.classList.add('exibir');
  }
  else if (resultado >= 24.99) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[2]}`;
    divResultado.style.color = "#FFA500";
    divResultado.classList.add('exibir');
  }
  else if (resultado >= 18.5) {
    divResultado.innerHTML = `IMC ${resultado} - ${tipoPeso[1]}`;
    divResultado.style.color = "#00FF00";
    divResultado.classList.add('exibir');
  }
  else {
    divResultado.innerHTML = 'Favor conferir as informaçoes fornecidas!';
    divResultado.style.color = "red";
    divResultado.classList.add('exibir');
  }
  console.log(resultado);
}
