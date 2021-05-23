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
		.then(conteudos => conteudos.join(""))
		.then(todoConteudo => todoConteudo.split("\n")) 
		.then(fun.removerElementosSeVazio)
		.then(fun.removerElementosSeInlcuir("-->"))
		.then(fun.removerElementosSeApenasNumero)
		.then(fun.removerCaracteres(simbolos))
		.then(console.log);

