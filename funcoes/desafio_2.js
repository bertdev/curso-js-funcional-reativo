//desafio com reduce, map e filter 
//1. fragil: true
//2. qtd: 4, preco: 27.10 -> total
//3. media total 

const carrinho = [
		{ nome: "Caneta", qtd: 10, preco: 7.99, fragil: true },
		{ nome: "Impressora", qtd: 1, preco: 649.50, fragil: true },
		{ nome: "Caderno", qtd: 4, preco: 27.10, fragil: false },
		{ nome: "Lapis", qtd: 3, preco: 5.82, fragil: false},
		{ nome: "Tesoura", qtd: 1, preco: 19.20, fragil: true },
];

//fragil 
const getFragil = item => item.fragil;

let processado = carrinho.filter(getFragil);
console.log(processado);

//total de cada item 
const total = item => item.qtd * item.preco;

processado = processado.map(total);
console.log(processado);

//media de valores(calculado só com uma função)
const media = (acumulador, item, _, array) => acumulador + (item / array.length);

processado = processado.reduce(media, 0);
console.log(processado.toFixed(2));

//tudo em de uma vez
const processado2 = carrinho
		.filter(getFragil)
		.map(total)
		.reduce(media, 0)

console.log(processado2.toFixed(2));

