//compor(encadear) várias funções pequenas para 
//realizar um processamento mais complexo, o resultado
//de uma é passado como parametro para a outra assim 
//encadeando os processamentos  

function composicao(fn1, fn2) {
	return valor => {
		return fn2(fn1(valor));
	};
};

const gritar = texto => texto.toUpperCase();
const enfatizar = texto => `${texto}!!!`;
const tornarLento = texto => texto.split("").join(" ");

const resultado = composicao(gritar, enfatizar)("Para");
console.log(resultado); 

//outra forma de composição
function comp(...fns) {
	return valor => {
		return fns.reduce((acc, fn) => {
			return fn(acc);
		}, valor);
	};
};

const novoResultado = comp(gritar, enfatizar, tornarLento)("Para");
console.log(novoResultado);

//tambem podemos usar lazy evaluation junto tornando a 
//composição ainda mais flexivel junto com currying 
const textoExagerado = comp(gritar, enfatizar);
const amigo = textoExagerado("Amigo estou aqui");
console.log(amigo);
