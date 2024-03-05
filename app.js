alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 7;
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt("Escolha um número entra 1 e 10");

    if (chute == numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}) com ${tentativas} tentativas!`);
    } else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }   tentativas++;
}