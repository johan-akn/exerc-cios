/*
João está planejando seus exercícios físicos semanais. Crie um array chamado exerciciosSemana com os exercícios
"corrida", "flexões" e "abdominais". Verifique se o último exercício da lista é "alongamento".
Se não for, adicione "alongamento" ao final da lista. Imprima a lista de exercícios atualizada no final.
*/

//Declarar variáveis 
let exerciciosSemana = ['corrida', 'flexões', 'abdominais']

if(exerciciosSemana[2] !== 'alongamento'){

    exerciciosSemana.push('alongamento')

}

console.log(exerciciosSemana)


