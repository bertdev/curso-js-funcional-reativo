//usando callback(callback hell)
setTimeout(() => {
		console.log("Executando callback...");

		setTimeout(() => {
				console.log("Executando callback...");

				setTimeout(() => {
						console.log("Executando callback...");
								
				}, 2000);

		}, 2000);

}, 2000);


//usando promise
function esperarPor(tempo = 2000) {
		return new Promise(resolve => {
				setTimeout(() => {
						console.log("Executando promise...")
						resolve("amigo estou aqui");
				}, tempo);
		});
};

let p = esperarPor()
		.then(() => esperarPor())
		.then(esperarPor);

