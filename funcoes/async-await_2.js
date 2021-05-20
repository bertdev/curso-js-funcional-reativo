//tratando erros com async/await
//

function gerarNumerosEntre(min, max, numerosProibidos) {
		if(min > max) {
				[max, min] = [min, max];//invertendo as variaveis 
		};

		return new Promise((resolve, reject) => {
				const fator = max - min + 1;
				const aleatorio = parseInt(Math.random() * fator + min);
				if(numerosProibidos.includes(aleatorio)) {
						reject("Número repetido!")
				} else {
						resolve(aleatorio);
				};
		});
};

async function gerarMegasena(qtdNumerosGerados) {
		try {
				const numeros = [];
				for(let _ of Array(qtdNumerosGerados).fill()) {
						numeros.push(await gerarNumerosEntre(1, 60, numeros));
				};
				return numeros;
		} catch(e) {
				throw "Caiu algo aqui!";
		};
};

gerarMegasena(10)
		.then(console.log)
		.catch(console.log);

//para resolvermos a promise de uma função async é quando 
//retornamos um valor, para rejeitar é quando lançamos uma 
//excessão

