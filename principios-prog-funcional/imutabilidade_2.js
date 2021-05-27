const numeros = [4, 8, 3, 2, 9, 1, 3];

// 1# - Dados mutaveis, código imperativo e procedural 
// let total = 0;

// for(let i = 0; i < numeros.length; i++) {
// 	total += numeros[i];
// };

// console.log(total);

// 2# - forma declarativa e funcional usando reduce 
// const somar = (a, b) => a + b;
// const total = numeros.reduce(somar, 0);
// console.log(total);

// 3# - forma funcional usando recursividade 
function somarArray(array, total = 0) {
	if(array.length === 0) {
		return total;
	};

	return somarArray(array.slice(1), total + array[0]);
};

const total = somarArray(numeros);
//o metodo slice gera um novo array, o array base não é alterado

console.log(total);

//dois aspectos importantes na recursividade são uma função 
//chamar ela mesma e definir uma condiçãod e parada 
