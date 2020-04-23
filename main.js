// guardar numero bin (sem array) = OK!
// converter para dec = OK!
// pegar numero bin do usuario = OK!
// renderizar resultado na tela = OK!
// estilizar

// FUNÇÃO CHAMADA COM CLIQUE DO BOTÃO
function bin2Dec() {
  var bin = document.querySelector('input').value;
  var test = verify(bin);
  var dec = converter(test, bin);
}

// FUNÇÃO QUE CONVERTE O NÚMERO BINÁRIO EM DECIMAL
function converter(testResult, binaryNumber) {
  if (testResult == true) {
    var position = binaryNumber.length - 1;
    var dec = 0;

    for (digit of binaryNumber) {
      dec += Math.pow(2, position) * digit;
      position--;
    }

    showDec(dec);

  } else {
    alert("Digite apenas 0's e 1's !");
  }
}

// FUNÇÃO PARA RENDERIZAR RESULTADO DA CONVERSÃO
function showDec(decimal) {
  var showResult = document.querySelector('#result');
  var result = document.querySelector('p');
  result.innerHTML = '';
  var resultValue = document.createTextNode(decimal);
  result.appendChild(resultValue);
}

// FUNÇÃO PARA VALIDAR O NUMERO ENVIADO PELO USUÁRIO
function verify(binary) {
  var test = true;

  for (digit of binary) {
    if (digit === "1" || digit === "0") {
      console.log('ok');
    } else {
      return test = false;
    }
  }
  return test;
}