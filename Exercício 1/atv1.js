let resposta = 0;

while (resposta <= 0) { //Enquanto a Váriavel resposta for menor ou igual a 0 ou não válido, irá se repetir até digitar um número positivo
    resposta = parseInt(prompt(`Digite um número positivo`));

    if (isNaN(resposta)) {
        alert("Você não digitou um número válido.");
    } else if (resposta < 0) {
        alert("Você digitou um número negativo. Tente novamente.");
    }
}

alert(`Parabéns, você digitou um número positivo: ${resposta}`);
