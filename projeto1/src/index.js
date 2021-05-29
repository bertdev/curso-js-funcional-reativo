const fun = require("./functions");
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
