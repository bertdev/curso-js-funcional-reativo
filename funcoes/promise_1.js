//promise é como uma "promessa" que aquele trecho de código será
//resolvido futuramente, a promise recebe uma função como parametro 
//essa função callback receberá mais duas funções como parametros
//a primeira que será executada caso a promessa seja cumprida
//e uma segunda que será caso ocorra algum erro 
//para acessar o resultado da promise usamos o metodo then passando
//uma callback que malipulará o retorno da promise que será só um elemento
//

let a = 1;
console.log(a);

let p = new Promise(function(sucess, err) {
		sucess(["Ana", "Bia", "Carla", "Daniel"]);
});

console.log(typeof p);

p
		.then(valor => valor[0])
		.then(primeiro => primeiro[0])
		.then(console.log);
		//podemos simplificar quando vamos passar uma função
		//com o console.log para imprimir o unico parametro
		//passando só console.log como callback

