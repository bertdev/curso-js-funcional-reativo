//mais um pouco de uso de map

const carrinho = [
		{ nome: "Caneta", qtd: 10, preco: 7.99 },
		{ nome: "Impressora", qtd: 0, preco: 649.50 },
		{ nome: "Caderno", qtd: 4, preco: 27.10 },
		{ nome: "Lapis", qtd: 3, preco: 5.82 },
		{ nome: "Tesoura", qtd: 1, preco: 19.20 },
];

const getNomes = item => item.nome;
const getTotalItem = item => item.qtd * item.preco;

const nomes = carrinho.map(getNomes);
const totalItem = carrinho.map(getTotalItem);

console.log(nomes, totalItem);

//implementando meu próprio map(maneira simplificada)

Array.prototype.mapear = function(fun) {
		const resultado = [];
		for(let i = 0; i < this.length; i++) {
				resultado.push(fun(this[i], i, this));
		};
		return resultado;
};

console.log(carrinho.mapear(getNomes));

