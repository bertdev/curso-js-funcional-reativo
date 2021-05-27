//entendendo o problema de mutabilidade de dados 
//devido a atribuição por referência 

const pessoa = {
	nome: "Maria",
	altura: 1.70,
	cidade: "Teresina"
};

//atribuição por referência
//por padrão objetos são passados por referência 
const novaPessoa = pessoa;

novaPessoa.nome = "João";

console.log(pessoa);
console.log(novaPessoa);
//os dois objetos foram alterados pois os dois apontam
//para o mesmo local de memória, isso pode gerar bugs 
//quando um processo espera um determinado dado e ele 
//foi alterado por algum efeito colateral devido a mutabilidade 
//e a atribuição por referência; Principios como o processamento
//paralelizado se torna muito mais critico e mais sucetivel 
//a erros gerados por essas causas 

//alterando os dados do objeto de forma sem alterar o objeto base
function alterarPessoa(pessoa) {
	const novaPessoa = { ...pessoa };
	novaPessoa.nome = "Francisco";
	novaPessoa.cidade = "São luis";
	return novaPessoa;
};

const outraPessoa = alterarPessoa(pessoa);

//mesmo havendo passagem por referencia na passagem do objeto
//como parametro, o dado é evoluido e não mudado 
console.log(pessoa);
console.log(outraPessoa);

//atribuição por valor
let a = 3;
let b = a;

b++;
console.log(a, b);
