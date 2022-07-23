/* Escreva um programa que calcule a soma de todos os múltiplos de 3 e de 5 entre 1 e 1000. */

function nMultiplos(){

let entrada = 1000;
let nMultiplicador = 15;

for (i = 1; i <= entrada; i++){
	if(i * nMultiplicador <= entrada){
		console.log(nMultiplicador + "." + i + " = " + i * nMultiplicador);
		}
	}
}

nMultiplos();