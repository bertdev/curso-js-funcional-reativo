//funcionalidade de so chamar o then quando todas as
//promises forem resolvidas 

function gerarNumerosEntre(min, max, tempo) {
		if(min > max) {
				[max, min] = [min, max];//invertendo as variaveis 
		};

		return new Promise(resolve => {
				setTimeout(() => {
						const fator = max - min + 1;
						const aleatorio = parseInt(Math.random() * fator + min);
						resolve(aleatorio);						
				}, tempo);

		});
};

function gerarVariosNumeros() {
		return Promise.all([
				gerarNumerosEntre(1, 60, 4000),
				gerarNumerosEntre(1, 60, 1000),
				gerarNumerosEntre(1, 60, 300),
				gerarNumerosEntre(1, 60, 100)
		]);
};

gerarVariosNumeros()
		.then(console.log);
//com promise all a gente espera todas as promises estrem resolvidas 


