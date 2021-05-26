//funções que operam em outras funções,
//recebendo como parametro ou retornando elas
//são chamadas higher-order functions

function executar(fun,...params) {
    return fun(...params);
};

function somar(a, b, c) {
    return a + b + c;
};

function multiplicar(a, b) {
    return a * b;
};

const r1 = executar(somar, 4, 5, 6);
const r2 = executar(multiplicar, 2, 10);

console.log(r1, r2);

//em js uma função é higher-order function pois pode atuar em outra
//função sendo passada como parametro ou retorno dessa função  
