console.log('Arrow Functions:')

// Escrita normal da função
// var sum = function (x,y){
//     return x + y
// }

// Arrow Function da função sum
var sum = (x, y) => {
    return x + y
}

// Quando se tem um único valor dentro da função 
//pode-se retirar as chaves e o return, 
//pois oq estiver após a seta será retornado
var sum = (x, y) => x + y

// Adiciona 1 ao parametro passado
//Quando se tem um unico parametro não é necessario os ()
var add1 = x => sum(x,1)

console.log(add1(6))

/*
    OBS:
    Arrow Functions não pussem escopo lexico (this proprio).
    Não possuem arguments
    Não dá pra criar construtores com Arrow Functions
*/