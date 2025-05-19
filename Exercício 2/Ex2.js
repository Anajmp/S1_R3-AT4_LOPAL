let notas = 0; // Soma das notas
let i = 0; // Contador de notas válidas
let entrar = 0; // Variável para armazenar a nota digitada

do {
    notas= parseInt(prompt("Digite as notas para calcular a média delas. Caso queria parar digite um número negativo."))
    if (isNaN(notas) || notas > 10) { // Não irá aceitar uma nota como uma letra ou maior que 0
        alert ("Você não digitou um número válido")
    } else if (notas < 0) {
        alert ("Você já quis obter a média.")
    } else {
        i++;
        entrar = entrar +notas
    }
} while  (notas > 0 || isNaN(notas))
calculo = entrar/i
alert(`A média das notas digitadas é ${calculo}`);