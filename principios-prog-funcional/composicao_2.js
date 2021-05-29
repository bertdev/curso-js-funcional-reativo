//usando composição com funções assincrônas 

const gritar = texto => texto.toUpperCase();
const enfatizar = texto => `${texto}!!!`;

const tornarLento = texto => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(texto.split("").join(" "));
		},3000);
	});
};


function comp(...fns) {
	return valor => {
		return fns.reduce(async (acc, fn) => {
			if (Promise.resolve(acc) === acc) {
				//se o acc for uma promise, essa comparação será true
				return fn(await acc);
			} else {
				return fn(acc);
			};
		}, valor);
	};
};

const textoExagerado = comp(
	gritar,
	enfatizar,
	tornarLento
);

textoExagerado("Para")
	.then(console.log);
