//criar duas funções que sejam esecutadas assim:
//somar(3)(4)(5) e soma todos os parametros 
//
//calcular(3)(7)(fun) e a função dita como calcular

function somar(a) {
		return function(b) {
				return function(c) {
						return a + b + c;
				};
		};
};

const resultadoSoma = somar(3)(4)(5);
console.log(resultadoSoma);


function calcular(a) {
		return function(b) {
				return function(fun) {
						return fun(a, b);
				};
		};
};

const multiplicar = (a, b) => a * b;
const resultadoCalculo = calcular(3)(7)(multiplicar);
console.log(resultadoCalculo);

