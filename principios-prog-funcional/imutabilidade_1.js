//é o principio de evitar alteração de estado e mutabilidade
//de dados, assim que uma variavel é alocada na memoria em um
//dado é atribuido a ela, esse dado não deve/pode ser mudado 
//e sim evoluido/transformado por alguma função 

const nums = [3, 1, 7, 9, 4, 6];
//essa função irá gerar efeito colateral:
const ordenar = array => array.sort();	

ordenar(nums);
console.log(nums);

//fazendo de forma pura
const nums2 = [3, 1, 7, 9, 4, 6];
//o dado de entrada não é alterado, o que é retornado 
//é um novo dado evoluido que tem como base o dado de entrada 
const ordenar2 = array => [...array].sort();

console.log(ordenar2(nums2));
console.log(nums2);

//mais um exemplo, digamos que eu queira agora um array
//com o os elementos de nums * 2, irei criar um novo 
//array com base no array nums que atenda esse requisito

const dobro = nums.map(el => el * 2);

console.log(dobro, nums);
