function bomDia() {
	console.log('Bom dia!')
}

const boaTarde = function () {
	console.log('Boa tarde!')
}

// Passar uma função como param para outra função
function executar(x) {
	if (typeof x === 'function') {
		x()
	}
}

executar(1)
executar('não executa!!!')
executar(bomDia)
executar(boaTarde)

// Retornar uma função a partir de outra função
function potencia(exp) {
	return function (base) {
		return Math.pow(base, exp)
	}
}

const aoQuadrado = potencia(2)
console.log(aoQuadrado(4)) // 4^2 = 16
console.log(aoQuadrado(5)) // 5^2 = 25

const aoCubo = potencia(3)
console.log(aoCubo(4)) // 4^3 = 64
console.log(aoCubo(5)) // 5^3 = 125

const resultado = potencia(3)(10) // 10^3 = 1000
console.log(resultado)
