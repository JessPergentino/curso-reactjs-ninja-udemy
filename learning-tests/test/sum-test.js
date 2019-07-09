const sum = require('./sum')

console.assert(
    typeof sum === 'function',
    'sum deve ser uma função'
)

console.assert(
    sum(1,2) === 3,
    'sum(1,2) deve retornar 3 '
)

console.assert(
    sum(2,3) === 5,
    'sum(2,3) deve retornar 5 '
)

console.log('All Test Passed!!')