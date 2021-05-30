const fun = require("./functions");
const fn = require("./usando_funcao_composicao");
const path = require("path");

const caminho = path.join(__dirname,"..", "legendas");

const simbolos = [
	"!", "-", "?", '"', ".", ",", "♪",
	"_", "<i>", "</i>", "\r", "[", "]",
	"{", "}", "(", ")"
];

fun.lerDiretorio(caminho)
	.then(fun.filtrarPorExtensao(".srt"))
	.then(fun.lerArquivos)
	.then(fun.mesclarElementos)
	.then(fun.separarTextoPor("\n")) 
	.then(fun.removerElementosSeVazio)
	.then(fun.removerElementosSeInlcuir("-->"))
	.then(fun.removerElementosSeApenasNumero)
	.then(fun.removerCaracteres(simbolos))
	.then(fun.removerElementosSeInlcuir("<font>"))
	.then(fun.mesclarElementos)
	.then(fun.separarTextoPor(" "))
	.then(fun.removerElementosSeVazio)
	.then(fun.removerElementosSeApenasNumero)
	.then(fun.agruparPalavras)
	.then(fun.ordenarPorAtribNumerico("qtde", "desc"))
	.then(console.log);

//essa parte é parte de um desafio proposto no modulo de principios funcionais 
// fn.composicao(
// 	fun.lerDiretorio,
// 	fun.filtrarPorExtensao(".srt"),
// 	fun.lerArquivos,
// 	fun.mesclarElementos,
// 	fun.separarTextoPor("\n"),
// 	fun.removerElementosSeVazio,
// 	fun.removerElementosSeInlcuir("-->"),
// 	fun.removerElementosSeApenasNumero,
// 	fun.removerCaracteres(simbolos),
// 	fun.removerElementosSeInlcuir("<font>"),
// 	fun.mesclarElementos,
// 	fun.separarTextoPor(" "),
// 	fun.removerElementosSeVazio,
// 	fun.removerElementosSeApenasNumero,
// 	fun.agruparPalavras,
// 	fun.ordenarPorAtribNumerico("qtde", "desc"),
// 	console.log
// )(caminho);