const carrinho = [
	{ nome: 'Caneta', qtde: 10, preco: 7.99 },
	{ nome: 'Impressora', qtde: 4, preco: 649.5 },
	{ nome: 'Caderno', qtde: 4, preco: 27.1 },
	{ nome: 'Lapis', qtde: 3, preco: 5.82 },
	{ nome: 'Tesoura', qtde: 1, preco: 19.2 },
]

const apenasNome = produto => produto.nome
const calcularTotal = produto => produto.qtde * produto.preco

console.log(carrinho.map(calcularTotal))
console.log(carrinho.map(apenasNome))
