function bomDia() {
	console.log('Bom dia!')
}

setTimeout(bomDia, 3000) // Chama a função bomDia após 3 segundos

// callback, espera 3 segundos e chama a função bomDia de volta
// enquanto isso, o restante do código pode continuar executando
console.log('Isso será exibido antes de bomDia() ser chamado.')
