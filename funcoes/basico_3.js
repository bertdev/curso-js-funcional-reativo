//arrow function 
const boaNoite = () => console.log("boa noite");
boaNoite();

const saudacao = nome => `fala ${nome}`;
console.log(saudacao("bert"));

const adicionar = (acumulador, atual) => acumulador + atual;
const somar = (...numeros) => {
		const total = numeros.reduce(adicionar);
		return total;
};

console.log(somar(2, 3, 5, 10));

