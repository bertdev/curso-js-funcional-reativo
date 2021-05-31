
const letrasAninhadas = [
	["a","m","i","g","o"],[" "],["e","s",
	"t",["o","u"]]," ","a","q","u","i"
];

const letras = letrasAninhadas.flat(Infinity);
//metodo flat vai "achatar" todos os lementos do array
//para o mesmo nivel

const resultado = letras
	.map(l => l.toUpperCase())
	.reduce((a, b) => a + b);

//o metodo flatMap funciona como uma junção do flat e do map
//realiza o map primeiro e depois o flat 

console.log(resultado);
