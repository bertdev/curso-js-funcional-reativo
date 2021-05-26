
//pura 
function somar(a, b) {
    return a + b;
};

console.log(somar(5, 5));
console.log(somar(2, 3));

let qtdDeExecucoes = 0;

//impura - possui efeitos colaterais(altera a variavel qtdDeExecucoes)
function soma(a, b) {
    qtdDeExecucoes++;
    return a + b;
};

console.log(qtdDeExecucoes);
console.log(soma(5, 5));
console.log(soma(2, 3));
console.log(qtdDeExecucoes);
