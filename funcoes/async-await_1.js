//uma maneira que exite de trabalhar com processamento assincrono 
//de forma parecida ao sincrono

function esperarPor(tempo = 2000) {
		return new Promise(resolve => {
				setTimeout(() => resolve(), tempo);
		});
};

//esperarPor(2000)
//		.then(() => console.log("Executando promise 1..."));
//		.then(esperarPor)
//		.then(() => console.log("Executando promise 2..."));
//		.then(esperarPor)
//		.then(() => console.log("Executando promise 3..."));

function retornarValor() {
		return new Promise(resolve => {
				setTimeout(() => resolve(10), 5000);
		});
};

async function executar() {
		let valor = await retornarValor();

		await esperarPor(3000);
		console.log(`Executando async/await ${valor}`);

		await esperarPor(3000);
		console.log(`Executando async/await ${valor + 1}`);
		
		await esperarPor(3000);
		console.log(`Executando async/await ${valor + 2}`);
		
		return valor + 3;
};

//uma função async retorna uma promise
executar()
		.then(console.log);

