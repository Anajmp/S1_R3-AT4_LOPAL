let saldo = 1000; // Saldo inicial na conta

while (saldo > 0) {
  alert(`\nSaldo atual: R$${saldo}`);

  let saque = parseFloat(prompt("Digite o valor que deseja sacar: R$"));

  // Verifica se o valor é válido
  if (isNaN(saque) || saque <= 0) {
    alert("Valor inválido. Tente novamente.");
    continue;
  }

  // Verifica se o saldo é suficiente
  if (saque > saldo) {
    alert("Saldo insuficiente. Tente um valor menor.");
  } else {
    saldo -= saque;
    alert(`Saque de R$${saque} realizado com sucesso!`);
  }
}

alert("Você zerou sua conta. Encerrando o programa.");
