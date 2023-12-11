const sliced = ["hola", "mundo","adios", "mundo"]; 
// slice corta el areglo, neesita 2 parametros el primero es de donde inicia a 
//cortar el aargelo y el segundo la cantidad de elementos que va a cortar
console.log( sliced , "slice");


// El metodo splice borra elementos del arreglo o los agrega, no regresa un nuevo arreglo
const months = ['Jan', 'March', 'April', 'June'];

console.log(months);

//agrega un elemento nuevo al arreglo
months.splice(1, 0, 'Feb');

console.log(months);
months.splice(0,1)

console.log(months);



let months2 = ['Jan', 'March', 'April', 'June']
let months3 = months2;
//No se crea un nuevo array, se crea una referencia a este array
months2 = ['hola', "mundo"];

console.log(months2, "month2") // output months2 ["hola", "mundo"]
console.log(months3, "months3") // outpt=ut minth3 ["jan","march", "april"]


const months4 = ['Jan', 'March', 'April', 'June']
const months5 = months4;
months4.push("hola")

console.log(months4) //["hola", "mundo"]
console.log(months5) // ['Jan', 'March', 'April', 'June']

