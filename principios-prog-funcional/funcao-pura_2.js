//não existe problema em uma função pura depender de outra função
//também pura 

//impura - pois o resultado não depende somente das entradas
//sempre que uma função depende de um fator aleatorio ela será impura
function gererNumeroAleatorio(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
};

console.log(gererNumeroAleatorio(1, 6));
console.log(gererNumeroAleatorio(1, 6));
console.log(gererNumeroAleatorio(1, 6));
