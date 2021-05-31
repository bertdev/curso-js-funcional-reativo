// é um objeto(wrapper) que encapsula/guarda um valor
// possuindo um metodo com função map para transformar esse  valor
// o array em js é um functor 

const nums = [1, 2, 3, 4, 5];
console.log(typeof nums);
//array é um objeto e tem o metodo map

const novosNums = nums
	.map(el => el + 10)
	.map(el => el * 2);

console.log(nums, novosNums);

function TipoSeguro(valor) {
	return {
		valor,
		invalido() {
			return this.valor === null || this.valor === undefined;
		},
		map(fn) {
			if (this.invalido()) {
				return TipoSeguro(null);	
			} else {
				const novoValor = fn(this.valor);
				return TipoSeguro(novoValor);	
			}
		},
		flatMap(fn) {
			//realizando o map e "achatando" o resultado 
			return this.map(fn).valor;
		}
	};
};

const resultado = TipoSeguro("amigo estou aqui")
	.map(t => t.toUpperCase())
	.flatMap(t => `${t}!!!`);

const resultadoNumerico = TipoSeguro(30)
	.map(num => num / 10)
	.flatMap(num => num * 3);

console.log(resultado, resultadoNumerico);
