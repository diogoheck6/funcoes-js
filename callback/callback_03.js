const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt')

function lerArquivo(erro, conteudo) {
	if (erro) return
	console.log(conteudo.toString())
}

// função assíncrona, precisa de uma callback pra chamar quando terminar
fs.readFile(caminho, lerArquivo)
console.log('Fim #01!!!!')

// função síncrona, por isso nao precisa de uma callback
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim #02!!!!')
