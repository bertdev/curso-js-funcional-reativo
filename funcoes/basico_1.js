//function declaration:
function bomDia() {
		console.log("Bom dia");
};

bomDia();

//function expression 
const boaTarde = function () {
		console.log("Boa tarde");
};

boaTarde();

//flexibilidade de parametros 
function somar(a, b = 0) {
		return a + b;
};

let resultado = somar(3, 4, 5, 6);
console.log(resultado);

resultado = somar(3);
console.log(resultado);

resultado = somar(3, 4);
console.log(resultado);

