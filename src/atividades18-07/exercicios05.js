/* Escreva um programa que pedirá para o usuário dois números entre 1 e 100.
O porgrama deve, então, iterar de um em um do menor pro maior, sempre imprimindo
o número na tela do usuário. Entretanto, caso o número seja divisivel por 7,
o programa deve ao invés disso imprimir a palavra "Ping". Caso o número seja divisivel
por 5, o programa deve imprimr "Pong". Caso o número seja divisivel por 7 e 5, o programa
deveria imprimir a mensagem "Ping Pong". Dica: Neste exercício vocês talvez precisem
fazer uso do recurso "user.questionInt()" que transorma o conteúdo de um input do usuário
de string para inteiro. */

const rs = require("readline-sync");
const primeiroNum = rs.questionInt("Escolha um primeiro número entre 1 e 100: ");
const segundoNum = rs.questionInt("Escolha um segundo número entre 1 e 100: ");

/*for (i = 1; i <= 100; i++) {
	if(i % 7 === 0 && i % 5 === 0){
		console.log(i + " PING-PONG");
	} else if(i % 7 === 0){
		console.log(i + " PING");
	} else if(i % 5 === 0){
		console.log(i + " PONG");
	}
}*/

for (i = Math.min(primeiroNum, segundoNum); primeiroNum >= 0 && segundoNum >= 0 && i <= Math.max(primeiroNum, segundoNum); i++){
	if(i % 7 === 0 && i % 5 === 0){
		console.log(i + " PING-PONG");
	} else if(i % 7 === 0){
		console.log(i + " PING");
	} else if(i % 5 === 0){
		console.log(i + " PONG");
	}
}