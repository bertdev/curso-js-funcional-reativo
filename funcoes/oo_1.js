//apesar de estar estudando mais voltado o paradigma funcional
//é interessante entender um pouco de OO até pq o OO em js 
//é bastante baseado em funções já que class é so um sugar 
//sintax para função 

//função construtora
function Produto(nome, preco, desc = 0.25) {
		let privado = 3;//atributo privado 
		this.nome = nome;//atributo publico
		this.preco = preco;
		this.desc = desc;

		this.precoFinal = function() {
				return this.preco * (1 - this.desc);
		}
};

console.log(typeof Produto, typeof Promise, typeof Object);
//funções quando instanciadas com o operador new geram objetos

const p1 = new Produto("Caneta", 8.59);
console.log(typeof p1);
const p2 = new Produto("Geladeira", 3000);
console.log(p2);
console.log(p2.preco);
console.log(p2.precoFinal());

