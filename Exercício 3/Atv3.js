let valor = 0; // Soma das notas
let i = 0; // Contador de notas válidas
let compra = 0; // Variável para armazenar a nota digitada

do {
    compra= parseFloat(prompt("Digite o valor das compras. Quando quiser encerrar e somar, digite 0"))
    if (isNaN(compra) || compra < 0) { // Não irá aceitar uma nota como uma letra ou maior que 0
        alert ("Você não digitou um número válido")
    } else if (compra == 0) {
        alert ("Você já quis obter o valor da compra.")
    } else {
        i++;
        valor = valor + compra
    }
} while  (compra > 0 || isNaN(compra)) //Enquanto compra for maior que 0 ou não for um número irá mostrar a soma deles
alert(`A soma das compras é ${valor}`);