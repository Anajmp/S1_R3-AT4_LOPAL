let nome = "";
let segundoNome = "";

do { 
    nome = (prompt ("Digite seu primeiro nome"));

    if (!isNaN(nome)) {
     alert ("Você não digitou seu nome")
    } else {
        segundoNome = (prompt ("Digite seu segundo nome"));
        if (!isNaN (segundoNome || segundoNome == "")) {
            alert ("Você não digitou seu nome")
        }
        
    }
}
while (!isNaN (nome || nome == ""))
    alert(`Seu nome completo é ${nome} ${segundoNome}`)