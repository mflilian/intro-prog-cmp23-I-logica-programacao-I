// Crie um programa que calcule a média de quatro notas fornecidas pelo usuário. 
// As notas podem variar de 0.0 a 10.0. 
// O programa deverá calcular a média aritmética das quatro notas e exibir o resultado para o usuário.

// formula da media aritmetica NESSE CASO = somaDasQuatroNotas/4

let notaUm = 6.64
let notaDois = 8.12
let notaTres = 4.33
let notaQuatro = 7.93

let somaDasMinhasNotas = notaUm + notaDois + notaTres + notaQuatro

let resultadoDaMedia = (somaDasMinhasNotas/4).toFixed(1)

console.log(resultadoDaMedia)
