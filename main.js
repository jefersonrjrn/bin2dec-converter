// guardar numero bin (sem array) = OK!
// converter para dec = OK!
// pegar numero bin do usuario = OK!
// renderizar resultado na tela = OK!
// estilizar

function converter() {
  var bin = document.querySelector('input').value;

  var test = verify(bin);

  if (test == true) {
    var position = bin.length - 1;
    var dec = 0;

    for (digit of bin) {
      dec += Math.pow(2, position) * digit;
      position--;
    }

    showDec(dec);

    console.log(dec);
    console.log('ok');
  } else {
    alert("Digite apenas 0's e 1's !");
  }
}

function showDec(decimal) {
  var showResult = document.querySelector('#result');
  var result = document.createElement('p');
  var resultValue = document.createTextNode(decimal);

  showResult.appendChild(result);
  result.appendChild(resultValue);
}

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