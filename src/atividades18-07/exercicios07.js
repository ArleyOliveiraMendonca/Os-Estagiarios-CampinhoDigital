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