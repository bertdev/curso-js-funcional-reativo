//passando funções como parametro
function executarQualquerCoisa(fun) {
		if(typeof fun === "function") {
				fun();
		};
};

const bomDia = () => console.log("Bom dia");
function boaTarde() {
		console.log("Boa Tarde");
};

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

//retornando uma função como resultado de outra 
function potencia(base, exp) {
		return function(exp) {
				return Math.pow(base, exp);
		};
};

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
//ou 
console.log(potencia(2)(8));

