//função usando currying
function textoComTamanhoEntre(min) {
	return function(max) {
		return function(erro) {
			return function(texto) {
				//lazy evaluation
				const tamanho = (texto || "").trim().length;

				if (tamanho < min || tamanho > max) {
					throw erro;
				};
			};
		};
	};
};

//podemos organizar o currying para o ultimo parametro 
//seja com menos reuso e mais variação e os primeiros 
//os com mais reuso e constantes 

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
//textoComTamanhoEntre(4)(255)("Nome invalido")(p1.nome);

//currying nos permite formar versões intermediarias
//de uma função

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
//forcarTamanhoPadrao("Nome inválido")(p1.nome);

const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome produto inválido");
forcarNomeProdutoValido(p1.nome);

//quando usamos currying, altomaticamente recebemos um 
//lazy evaluation, avaliar parte do código de forma tardia 

