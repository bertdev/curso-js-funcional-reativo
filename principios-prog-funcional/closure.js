//Closure é quando uma função "lembra" seu escopo léxico,
//mesmo quando ela é executada fora desse escopo 

//escopo léxico é o escopo onde a função foi fisicamente 
//definida dentro do código por exemplo: quando uma função
//é declarada dentro de outra função, o escopo léxico dela 
//é essa função "pai"

//exemplo
const somarXmais3 = require("./closure_escopo.js");

const x = 2;
console.log(somarXmais3());
//mesmo que a chamada da função seja nesse arquivo(closure.js)
//a função "lembra" do seu contexto léxico que é o arquivo closure_escopo.js
//e busca o valor x no seu contexto léxico 
