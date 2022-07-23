/* Elabore um algoritmo que receba dois números e determine qual é maior entre eles,
se os números forem igueais, mostre uma mensagem no console "Os números são iguais". */

let rs = require('readline-sync');

let numero1 = rs.questionInt("Digite o primeiro numero: ");
let numero2 = rs.questionInt("Digite o segundo numero: ");

if(numero1 === numero2){
    console.log("Os números são iguais!")
}else if(numero1 > numero2){
    console.log("O primeiro numero é maior")
}else{
    console.log("O segundo numero é maior")
}