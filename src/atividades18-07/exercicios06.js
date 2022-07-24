/* Escreva um programa que passe por todos os número de 1 a 50 e para cada um dele
imprima na tela se o número é par ou ímpar. Caso o número também seja primo, o programa deve
dizer que é primo. (um número primo é um número que só é divisivel por ele mesmo e por 1).
Dica: Neste exercício você pode precisar de ajuda do operador MÓDULO (%) você também
pode precisar criar mais de um loop. */



function nPrimos(n){
	if(n == 1) return false;
	
	for(var i = 2; i < n; i++){
		if(n % i == 0) return false;
	}
	return true;
}
	
function parEImpar(){
	
	let nEntrada = 50;
	
	for(var i = 1; i <= nEntrada; i++){
		str = i;
	if(i % 2 == 0){
		str += " Par";
	}else{
		str += " Ímpar";
	}
	if(nPrimos(i)){
		str += " e Primo";
	}
		console.log(str)
	}
}

nPrimos();
parEImpar();