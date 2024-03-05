alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 7;
let chute = prompt("Escolha um número entra 1 e 10");

if (chute == numeroSecreto) {
    alert(`Parabéns! Você acertou o número secreto! (${numeroSecreto})`);
} else {
    alert("Que pena! Você errou :(");
}
