//class é uma especie de sitax sugar para uma função contrutora
//

class Produto {
		constructor(nome, preco, desc = 0.25) {
				this.nome = nome;
				this.preco = preco;
				this.desc = desc;
		}

		//criando metodos getters e setters para o objeto
		get preco() {
				return this._preco;
		};

		set preco(novoPreco) {
				if(novoPreco >= 0) {
						this._preco = novoPreco;
				};
		};

		precoFinal() {
				return this.preco * (1 - this.desc);
		};
};

console.log(typeof Produto);

const p1 = new Produto("Caneta", 8.50);
console.log(typeof p1);
p1.preco = 12;//acessando o set
console.log(p1.preco);//acessando o get

const p2 = new Produto("Geladeira", 3000);
console.log(p2);
console.log(p2.precoFinal());

