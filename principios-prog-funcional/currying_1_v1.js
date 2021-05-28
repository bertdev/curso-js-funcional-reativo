// currying é quando passamos os parametros para uma 
// função de forma parcial

// função sem uso de currying 
function textoComTamanhoEntre(min, max, erro, texto) {
	const tamanho = (texto || "").trim().length;

	if (tamanho < min || tamanho > max) {
		throw erro;
	};
};

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
textoComTamanhoEntre(4, 255, "Nome inválido", p1.nome);
