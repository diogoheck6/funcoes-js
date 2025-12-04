const multiplicar = (a, b) => a * b
const somar = (a, b) => a + b
const subtrair = (a, b) => a - b

const calcular1 = (a, b, operacao) => operacao(a, b)

console.log(calcular1(5, 3, multiplicar)) // 15
console.log(calcular1(5, 3, somar)) // 8
console.log(calcular1(5, 3, subtrair)) // 2

const calcular = (a) => (b) => (fn) => fn(a, b)

console.log(calcular(5)(3)(multiplicar)) // 15
console.log(calcular(5)(3)(somar)) // 8
console.log(calcular(5)(3)(subtrair)) // 2
