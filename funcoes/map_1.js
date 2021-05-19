//a função map percorre um array transformando os seus dados e retornando um novo 
//recebe uma função como parametro que irá estabelecer a lógica de transformação desse array 
//a função passada como callback recebe 3 parametros: 
//o valor atual, indice e o array interio que está sendo percorrido
const nums = [1, 2, 3, 4, 5];
const dobro = n => n * 2;

console.log(nums.map(dobro));

const nomes = ["Ana", "Bia", "Gui", "lia", "Rafa"];
const primeiraLetra = text => text[0];

console.log(nomes.map(primeiraLetra));

