const fun = require("./functions");
const path = require("path");

const caminho = path.join(__dirname,"..", "legendas");

fun.lerDiretorio(caminho)
		.then((arquivo) => fun.filtrarPorExtensao(arquivo, ".srt"))
		.then((arquivosSRT) => fun.lerArquivos(arquivosSRT))
		.then(conteudos => conteudos.join(""))
		.then(todoConteudo => todoConteudo.split("\n")) 
		.then(linhas => fun.removerSeVazio(linhas))
		.then(console.log);

