//desafio 1, criar duas funções que atendem as seguintes chamadas 
//exec(somarNoTerminal, 56, 38)
//exec(subtrairNoTerminal, 182, 27)
const somarNoTerminal = (a, b) => console.log(a + b);
const subtrairNoTerminal = (a, b) => console.log(a - b);

const exec = (fun, a, b) => fun(a, b);
exec(somarNoTerminal, 56, 28);
exec(subtrairNoTerminal, 182, 27);

const printExec = () => console.log("Exec...");
setInterval(printExec, 2000);

setInterval(() => console.log("Exec2..."), 4000);

//callback é quando passamos uma função como parametro para outra função
//e quando ocorre um determinado evento, a função recebida como parametro será executada 
//
