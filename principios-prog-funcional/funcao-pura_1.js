//primeiro: é quase impossivel criar um software somente com funções puras
//mas é importante sempre que possível priorizar a utilização delas 

//Função pura é uma função que o seu valor de retorno é determinado 
//apenas por seus valores recebidos como parametros, sem a presença
//de efeitos colaterais(side-efects) observáveis

const PI = 3.14;

//função impura - PI é um valor externo e não está sendo passado como parametro
function areaCirculo(raio) {
    return raio * raio * PI;
};

console.log(areaCirculo(10));