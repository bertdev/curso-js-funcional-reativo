//desafio com promise 
//ler o arquivo dados.txt com uma promise onde o conteudo do
//arquivo é passado como resposta da promise 

const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname,"dados.txt");

function lerArquivo(caminho) {
		return new Promise(resolve => {
				const leituraFinalizada = (err, conteudo) => resolve(conteudo);
				fs.readFile(caminho, leituraFinalizada);
		});
};

lerArquivo(caminho)
		.then(conteudo => conteudo.toString())
		.then(console.log);

