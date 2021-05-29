//é o ato de atrasar a avaliação(execução) de uma parte ou 
//do código todo para que só ocorra quando necessario(uilizamos
//currying para isso), assim podendo reduzir exponencialmente 
//o tempo de execução de um determinado código 

function eager(a, b) {

	//simulando processamento mais pesado 
	const fim = Date.now() + 2500;
	while(Date.now() < fim) {};

	const valor = Math.pow(a, 3);
	return valor + b;
};

console.time("#1")
console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));
console.timeEnd("#1")

//utilizando lazy evaluation(adiando um pouco do processamento)

function lazy(a) {
	//processamento mais pesado
	const fim = Date.now() + 2500;
	while(Date.now() < fim) {};

	const valor = Math.pow(a, 3);

	return function(b) {
		//processamento que foi "adiado" - lazy evaluation
		return valor + b;
	};
}

console.time("#2");
console.log(lazy(3)(100));
console.log(lazy(3)(200));
console.log(lazy(3)(300));
console.timeEnd("#2")

//aproveitando o beneficio de utilizar lazy 
console.time("#3");
const lazy3 = lazy(3);
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd("#3")
