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

//encapsular o tratamento de erro da função com currying
function aplicarValidacao(fn) {
	return function(valor) {
		//lazy evaluation
		try {
			fn(valor);
		} catch(e) {
			return { error: e };
		};
	};
};

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome produto inválido");
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

console.log(validarNomeProduto(p1.nome));
