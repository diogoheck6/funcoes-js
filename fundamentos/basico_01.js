const a = 4
console.log(a)

// Function declaration
function bomDia() {
  console.log("Bom dia!")
}

bomDia()

// Function expression
const boaTarde = function () {
  console.log("Boa tarde!")
}

boaTarde() // undefined

function soma(a = 0, b = 0) {
  return a + b
}

let resultado = soma(3)
console.log(resultado)

resultado = soma(3, 4, 5, 6, 7) // os valores extras são ignorados
console.log(resultado)

resultado = soma() // os valores padrão são usados
console.log(resultado)
