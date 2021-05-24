const fs = require("fs");
const path = require("path");


function lerDiretorio(caminho) {
	return new Promise((resolve, reject) => {
		try {
			const arquivos = fs.readdirSync(caminho).map(arquivo => path.join(caminho, arquivo));
			resolve(arquivos);
		} catch(e) {
			reject(e);
		};
	});
 };

function filtrarPorExtensao(extensao) {
	return array => {
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
	return array => {
		return array.filter(el => !el.includes(padraoTextual));
	};
};

function removerElementosSeApenasNumero(array) {
	return array.filter(el => el != parseInt(el.trim()));	
};

function removerCaracteres(simbolos) {
	return array => {
		return array.map(el => {
			return simbolos.reduce((acc, simbolo) => {
				return acc.split(simbolo).join("");
			}, el);
		});
	};
};

function mesclarElementos(elementos) {
	return elementos.join("");
};

function separarTextoPor(separador) {
	return texto => texto.split(separador);
};

function agruparPalavras(palavras) {
	return Object.values(palavras.reduce((agrupamento, palavra) => {
		const p = palavra.toLowerCase();
		const qtde = agrupamento[p] ? agrupamento[p].qtde += 1 : 1;
		agrupamento[p] = {
			elemento: p,
			qtde
		};

		return agrupamento;
	}, {}));
};

function ordenarPorAtribNumerico(attr, ordem = "asc") {
	const asc = (obj1, obj2) => obj1[attr] - obj2[attr];
	const desc = (obj1, obj2) => obj2[attr] - obj1[attr];
	return array => array.sort(ordem === "asc" ? asc : desc);
};

module.exports = {
	lerDiretorio, 
	filtrarPorExtensao,
	lerArquivos,
	removerElementosSeVazio,
	removerElementosSeInlcuir,
	removerElementosSeApenasNumero,
	removerCaracteres,
	mesclarElementos,
	separarTextoPor,
	agruparPalavras,
	ordenarPorAtribNumerico
};
