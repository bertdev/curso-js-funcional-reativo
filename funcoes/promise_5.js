//tratamento de erros em promises 
//o recebimento de uma promise tem o metodo catch para receber
//e tratar um erro, coloque o catch sempre no final pois ele
//interrompe o fluxo de valores entre os thens 
//thens podem ter callback para tratar o proprio erro, caso contrario
//os erros ocorridos nos thens tambem caeem em catch
//se algun then possuir um tratamento de erro dentro dele
//que é uma segunda função passada como callback para ele, os erros 
//não cairão em catch e sim nessa tratativa de erro dentro do then 

function funcionarOuNao(valor, chanceErro) {
		return new Promise((resolve, reject) => {
				try {
						//con.log("emp") só pra gerrar erro no try
						if(Math.random() < chanceErro) {
								reject("Ocorreu um erro");
						} else {
								resolve(valor);
						};
				} catch(e) {
						reject(e);
				};
		});	
};

funcionarOuNao("amigo estou aqui", 0.9)
		.then(console.log)
		.catch(console.log);

