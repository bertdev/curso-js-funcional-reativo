//primeiro: é quase impossivel criar um software somente com funções puras
//mas é importante sempre que possível priorizar a utilização delas 

//Função pura é uma função que o seu valor de retorno é determinado 
//apenas por seus valores recebidos como parametros, sem a presença
//de efeitos colaterais(side-efects) observáveis

const PI = 3.14;

//função impura - PI é um valor externo e não está sendo passado como parametro
function areaCircunferencia(raio) {
    return raio * raio * PI;
};

//função impura - PI não veio através dos parametros 
//function areaCircunferencia(raio) {
//    return raio * raio * Math.PI;
//};
 
console.log(areaCircunferencia(10));

//Pura
function areaCircunferenciaPuro(raio, pi) {
    return raio * raio * pi;
};

console.log(areaCircunferenciaPuro(10, 3.14));
