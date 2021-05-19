//reduce vai percorrer um array reduzindo ele para um unico elemento 
//recebe uma callback que irá definir a lógica para essa redução
// e pode receber o valor inicial para a redução 
// a callback vai receber como parametro o acumulador(vindo do processamento anterior) e o elemento atual
//

const carrinho = [
		{ nome: "Caneta", qtd: 10, preco: 7.99 },
		{ nome: "Impressora", qtd: 0, preco: 649.50 },
		{ nome: "Caderno", qtd: 4, preco: 27.10 },
		{ nome: "Lapis", qtd: 3, preco: 5.82 },
		{ nome: "Tesoura", qtd: 1, preco: 19.20 },
];

const totalItens = item => item.qtd * item.preco;
const somar = (acumulador, elemento) => acumulador + elemento;

const totalFinal = carrinho
		.map(totalItens)
		.reduce(somar);

console.log(totalFinal);

