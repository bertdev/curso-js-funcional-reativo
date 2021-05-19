//implementando meu próprio reduce(simplificado)

Array.prototype.reduz = function (fun, valorInicial) {
		let acc = valorInicial;
		for(let i = 0; i < this.length; i++) {
				if(!acc && i === 0) {
						acc = this[0];
						continue;
				};

				acc = fun(acc, this[i], i, this);
		};
		return acc;
};

const carrinho = [
		{ nome: "Caneta", qtd: 10, preco: 7.99 },
		{ nome: "Impressora", qtd: 0, preco: 649.50 },
		{ nome: "Caderno", qtd: 4, preco: 27.10 },
		{ nome: "Lapis", qtd: 3, preco: 5.82 },
		{ nome: "Tesoura", qtd: 1, preco: 19.20 },
];

const getTotalItens = item => item.qtd * item.preco;
const totalFinal = (acumulador, item) => acumulador + item;

const processado = carrinho
		.map(getTotalItens)
		.reduce(totalFinal);

const processado2 = carrinho
		.map(getTotalItens)
		.reduz(totalFinal);

console.log(processado);
console.log(processado2);

