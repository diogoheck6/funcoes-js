setInterval(() => {
	console.log('Executando a cada 3s...')
}, 3000) // Chama a função anônima a cada 3 segundos

// receba a função anomima como parâmetro do setInterval
// callback, chama a função anônima de volta a cada 3 segundos
// enquanto isso, o restante do código pode continuar executando
console.log(
	'Isso será exibido imediatamente, antes da primeira execução do setInterval.'
)
