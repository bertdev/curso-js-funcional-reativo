//entendendo getters e setters em funções normais
//

function Produto(nome, preco, desc = 0.25) {
		let privado = 3;
		this.nome = nome;		
		this.preco = preco;
		this._desc = desc;

		this.precoFinal = function() {
				return this.preco * (1 - this._desc);
		}
};

//definindo uma função que não existia anteriormente 
//no objeto 
Produto.prototype.log = function() {
		console.log(`Nome: ${this.nome} Preco: R$${this.preco}`);
};

//criando um getter e setter
//passando o prototype como "contexto/this", para que essa
//propriedade esteja disponivel em todas as instancias 
Object.defineProperty(Produto.prototype, "desc", {
		get: function() {
				return this._desc;
		},
		set: function(novoDesc) {
				if(novoDesc >= 0 && novoDesc <= 1) {
						this._desc = novoDesc;
				}
		}
});

console.log(typeof Produto, typeof Promise, typeof Object);

const p1 = new Produto("Caneta", 8.59);
console.log(typeof p1);
p1.log();

const p2 = new Produto("Geladeira", 3000);
console.log(p2);
console.log(p2.preco);
console.log(p2.precoFinal());
p2.desc = 0.30;//acessando o set
console.log(p2.desc);//acessando o get

