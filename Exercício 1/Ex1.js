let resposta = 0;

do {
    resposta = parseInt (prompt ("Digite um número positivo"))

    if (isNaN (resposta)) { // Não aceita a resposta como uma letra
        alert ("Você não digitou um número")
    }else if (resposta >=0){ //Quando a resposta for um número positivo
        alert("Você digitou um número positivo. Parábens!")
    } 
} while (resposta <= 0 || (isNaN (resposta))); // Enquanto a resposta for menor ou uma letra ele irá repetir até obter um número positvo