//a função filter percorre um array filtrando os seus indices
//e retorna um novo array com os elementos filtrados 
//recebe uma função callback como parametro que é responsavel
//por estabelecer a lógica de filtragem 
//essa callback recebe os mesmos parametros que a callback do map 
//a função deve retornar true para que o elemento atual faça parte do novo array
//e false para que não faça 

const carrinho = [
		{ nome: "Caneta", qtd: 10, preco: 7.99 },
		{ nome: "Impressora", qtd: 0, preco: 649.50 },
		{ nome: "Caderno", qtd: 4, preco: 27.10 },
		{ nome: "Lapis", qtd: 3, preco: 5.82 },
		{ nome: "Tesoura", qtd: 1, preco: 19.20 },
];

const qtdMaiorQueZero = item => item.qtd > 0;
const getNomes = item => item.nome;

const nomesItensValidos = carrinho
		.filter(qtdMaiorQueZero)
		.map(getNomes);

console.log(nomesItensValidos);

//implementando meu filter(simplificado)

Array.prototype.filtrar = function(fun) {
		const novoArray = [];
		for(let i = 0; i < this.length; i++) {
				if(fun(this[i], i, this)) {
						novoArray.push(this[i]);
				};
		};
		return novoArray;
};

const nomesComFiltrar = carrinho
		.filtrar(qtdMaiorQueZero)
		.map(getNomes);

console.log(nomesComFiltrar);

