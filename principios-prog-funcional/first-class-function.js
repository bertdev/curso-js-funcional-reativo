//first class function é quando uma função
//é tratada como um dado, podendo ser armazenado em uma
//variavel, passada como parametro, retornada como resultado
//assim como outros tipos de dados 

const x = 3;
const y = function(txt) {
  console.log(`Esse é o texto: ${txt}`);  
};

y("amigo estou aqui");
console.log(x);
console.log(y);
