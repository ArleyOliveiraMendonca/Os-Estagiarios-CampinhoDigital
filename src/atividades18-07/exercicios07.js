/* Escreva um programa javaScript para escrever o seguinte padrão na tela, com N linhas:
*
**
***
****
*****
Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5). */

const entrada = require('readline-sync');
let numeroInformado = 0;
let escada = '';
while (numeroInformado <= 0) {
    numeroInformado = entrada.questionInt('\nInforme um numero: ');
    validarNumero(numeroInformado);
}

for (let i = 0; i < numeroInformado; i++) {
    for (let j = 0; j <= i; j++) {
        escada += '*';
    }
    escada += '\n';
}

console.log(escada);

function validarNumero(n) {
    if (n <= 0) {
        console.log('\nO numero precisar ser maior do que 0.');
    }
}