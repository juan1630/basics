console.log (greeter); //undefinded
var greeter = "say hello"


var test = 'hello';

function greeting (){
    var hello = 'hola'
    test = 'assigned';
    console.log(hello); // hola, si entra porque esta dentro del scope
}

greeting();
console.log(test) // assigned
//console.log(hello) //error hello is not defined no se puede acceder a hello porque esta declarado en un scoped de bloque


//problem with var
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
    //cambia el valor porque se puede acceder ya que es un scope global
}
console.log(greeter) // "say Hello instead"

{
    let hello2 = 'Hola';
    console.log(hello2);
    //se imprime porque esta dentro del scope
}

//console.log(hello2);
//Da un error porque no esta dentro del mismo scope

//letExmaple(); 
// Nos da un error porque se esta accediendo a una varibale no declarada

let x = "hello from X";

function letExmaple () {
    console.log(x);
}

letExmaple();

//zExmaple();
//error ya que aun no esta inicializada la constante


//const y;
//Error inicializacion de la constante 
const z = 'hello form Z';
function zExmaple(){
    console.log(z);
    //console.log(y);
    //Error no se puede acceder 
}


zExmaple(); 