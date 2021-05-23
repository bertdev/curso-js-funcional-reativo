const fs = require("fs");
const path = require("path");


function lerDiretorio(caminho) {
		return new Promise((resolve, reject) => {
				try {
						let arquivos = fs.readdirSync(caminho);
						arquivos = arquivos.map(arquivo => path.join(caminho, arquivo));
						resolve(arquivos);
				} catch(e) {
						reject(e);
				};
		});
 };

function filtrarPorExtensao(extensao) {
		return function(array) {
				return array.filter(arquivo => arquivo.endsWith(extensao));
		};
};

function lerArquivo(caminho) {
		return new Promise((resolve, reject) => {
				try {
						const conteudo = fs.readFileSync(caminho, {encodin: "utf-8"}); 
						resolve(conteudo.toString());
				} catch(e) {
						reject(e);
				};
		});
};

function lerArquivos(caminhos) {
		return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))	
};

function removerElementosSeVazio(array) {
		return array.filter(el => el.trim());
};

function removerElementosSeInlcuir(padraoTextual) {
		return function(array) {
				return array.filter(el => !el.includes(padraoTextual));
		};
};

function removerElementosSeApenasNumero(array) {
		return array.filter(el => el != parseInt(el.trim()));	
};

function removerCaracteres(simbolos) {
		return function(array) {
				return array.map(el => {
						let textoSemSimbolos = el;
						simbolos.forEach(char => {
								textoSemSimbolos = textoSemSimbolos.split(char).join("");
						});
						return textoSemSimbolos;
				});
		};
};

module.exports = {
		lerDiretorio, 
		filtrarPorExtensao,
		lerArquivos,
		removerElementosSeVazio,
		removerElementosSeInlcuir,
		removerElementosSeApenasNumero,
		removerCaracteres,
};
