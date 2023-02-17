// Pasos para llegar a este primer ejercicio:
// 1. Se clonó repositorio de GIT
// 2. Se creó archivo de NODE dentro de repositorio: npm init -y (crea archivo "package.json" necesario para construir aplicaciones)
// 3. Creo carpeta "src" dentro de la cual va "scope" que contiene "global.js"


// Plugin de Visual Studio Code que permite ejecutar el código dentro del editor: Code Runner


// Curso en PLATZI: https://platzi.com/cursos/javascript-closures-scope/


// El “scope” determina la accesibilidad de variables, objetos y funciones desde diferentes partes del código.

// Las funciones también son variables.

// Tipos de scope: global, function o block




// VARIABLES:
var a; //declaración
var b = "b"; //declaración + asignación
b = "bb"; //reasignación de variable
var a = "aa"; //redeclaración


// GLOBAL SCOPE: están al inicio y/o no están dentro de un bloque de código o función
var fruit = "apple"; //global

// Las anteriores variables están disponibles desde "window"

function bestFruit() {
    console.log(fruit);
}

bestFruit();


// Cuidado en asignar variables globales por accidente
function countries() {
    country = "Colombia"; //por haber asignado valor sin haber declarado, ese valor queda declarado en el scope global... podrán acceder desde afuera. Si usara var / let eso no pasaría
    console.log(country);
}

countries();
console.log(country)




// FUNCTION SCOPE
// la variable q está dentro de esto, solo tiene alcance dentro de la fxn
function greeting() {
    let userName = "Alejo";
    console.log(userName);

    if (userName === "Alejo") {
        console.log(`Hello ${userName}!`)
    }
}

greeting()

console.log(userName) //Esto me saca error "Uncaught ReferenceError" pues a esa variable q estoy invocando solo se puede acceder dentro de la fxn

// se puede redeclarar una variable con var, pero no con let y const





// BLOCK SCOPE
// Empieza con el estandar ECMAScript6. Se deja de usar "var" y entran "let" y "const". Éstas últimas solo tienen alcance "block scope", mientras q "var" sí tiene alcance por fuera del bloque (tiene "function scope").
// Solo se puede acceder a las variables q están dentro de un bloque de código. En general, es todo lo q esté dentro de un "handle bar": {}

// En lo siguiente, solo puedo la "fruit1"
function fruits() {
    if (true) {
        var fruit1 = "Apple";
        let fruit2 = "Kiwi";
        const fruit3 = "Banana";
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits()


// Pero si subo el console.log dentro del bloque en q están let y const, ahí sí las puedo ver
function fruits() {
    if (true) {
        var fruit1 = "Apple";
        let fruit2 = "Kiwi";
        const fruit3 = "Banana";
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}

fruits()





// REASIGNACIÓN Y REDECLARACIÓN
// La redeclaración es volver a declarar una variable, y la reasignación es volver a asignar un valor.

var firstName; // undefined (declarar)
firstName = "Alejo"; // (asignar)
console.log(firstName);


var lastName = "Naranjo"; // declarar y asignar
lastName = "Gaviria"; //reasignar
console.log(lastName)

var secondName = "Antonio"; // declarar y asignar
var secondName = "Francisco"; // reasignar
console.log(secondName)


// En el caso de let y const cambia un poco lo anterior
let fruit = "Apple"; // declarar y asignar
fruit = "Kiwi"; // reasignar
console.log(fruit)

let fruit = "Banana" // redeclarar
console.log(fruit)

// "let" no me permite redeclarar, pero sí reasignar: "Uncaught SyntaxError: Identifier 'fruit' has already been declared". 
// Esto pone restricciones al código para tener más control, ser más seguro.



// "const" es todavía más robusta. No permite redeclarar, ni reasignar... solo se puede declarar una sola vez.
// "Uncaught TypeError: Assignment to constant variable."
const animal = "dog";
animal = "cat";
console.log(animal) 


// Otro ejemplo para ver q "const" no es "infalible". Sobre el arreglo sí pueod seguir modificando cosas.
const vehicles = [];
// ingreso valor y sí me permite
vehicles.push("car1");
console.log(vehicles);

// lo quiero sacar y me deja
vehicles.pop();
console.log(vehicles)






// STRICT MODE
// Es una fxnalidad q le permite al motor de JS cambiar la manera en q se ejecuta el código. Así se reducen las cosas q se pueden hacer, lo cual es bueno pq permite controlar errores q son más difíciles de percibir.
// Nos asegura que cada variable está definida al momento de crear nuestro código.
// Es necesario indicarlo al inicio del código o dentro de una fxn: "use strict"

// Sin modo estricto puedo ejecutar variables q han sido asignadas pero no declaradas:
pi = 3.1416;
console.log(pi)

// Pero en modo estricto no
"use strict"
pi = 3.1416;
console.log(pi)

// Aquí el modo estricto dentro de una fxn
function myFunction() {
    "use strict";
    return pi = 3.1416;
}
console.log(myFunction())





// CLOSURE (clausuras)
// Permite acceder al ámbito de una fxn exterior desde una fxn interior. Las clausuras se crean cada vez q una fxn es creada.
// Un closure se da cuando una fxn accede a una variable q está por fuera de su contexto.
// Concepto clave: ámbico léxico (lexical). El ámbito léxico se refiere al alcance de una variable siguiendo la cadena de scopes. Una variable se puede abordar desde un nivel inferior hasta uno superior, pero no al contrario.

// En este caso estoy accediendo a variables q están por fuera de secciones q están contenidas dentro de otras.
const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { //fxn interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal)
        }

        return child();
    }

    return parent();
}

myFunction();





// PLAYGROUND (Clase 8)
// En este desafío recibirás dos números aleatorios por parámetros.

// Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número y secuencialmente volver a llamarla para completar la suma con el siguiente número:

// La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el segundo número por lo que deberás pensar en como manejar ese tipo de casos.

// Input:
// sumWithClosure(2)(3);

// Output:

// 5

// Input:

// sumWithClosure(90)();

// Output:

// 90

// I wasn´t able to test within the playground of Platzi. Instead, I used my navigator and it worked.

function sumWithClosure(firstNumber, secondNumber) {
    if (typeof firstNumber !== "number") {
        console.log("Please use numbers within the argument");
    } else {
        let a = firstNumber;
        function adding() {
            if (typeof secondNumber === "number") {
                let b = secondNumber;
                result = a + b;
            } else {
                result = a;
            }
            return result
        }
        return adding();
    }
}

// Evaluating how the function works within my navigator:
sumWithClosure(2,3)
sumWithClosure(90)
sumWithClosure("asdasd")
sumWithClosure(true)
sumWithClosure(1, "3")





// PRACTICING CLOSURES
function greeting() {
    let username = "Alejo";

    function displayUserName() {
        return `hello ${username}! how are you doing?`
    }
    // return displayUserName(); //esto me permite obtener el resultado q quiero 
    return displayUserName; //esto me muestra la definición de la fxn
}

const g = greeting();
console.log(g);
console.log(g());



// Another case to practice: "moneybox"

// By this way, the count starts each time the function is been executed (doesn´t remember what was previously saved)
function moneyBox(coins) {
    let saveCoins = 0; //start with 0 savings
    saveCoins += coins; //each coin in the argument is going to be added to the savings
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5)
moneyBox(2)
moneyBox(10)


// Remembering what was previously saved:
function moneyBox() {
    let saveCoins = 0; //start with 0 savings
    
    function countCoins(coins) {
        saveCoins += coins; //each coin in the argument is going to be added to the savings that are located outside the function, in order to be able to add the money and not start over again from 0
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins; 
}

const myMoneyBox = moneyBox(); //creating my personal moneybox
myMoneyBox(5);
myMoneyBox(2);
myMoneyBox(10);
myMoneyBox(20);

const myMoneyBoxOther = moneyBox(); //creating a moneybox for someone else
myMoneyBoxOther(2.5);
myMoneyBoxOther(1);
myMoneyBoxOther(5);
myMoneyBoxOther(10);




// PLAYGROUND 2
// En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

// Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

// Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.

// Input:

// const myPetList = createPetList();

// myPetList("michi");

// myPetList("firulais");

// myPetList();

// // Output:

// ["michi", "firulais"]



function createPetList() {
    const zoo = [];

    return function addingAnimals(x) {
        if(x != null) {
            zoo.push(x)
        } 
        return zoo
    }
}


const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();






// HOISTING (Elevación):

// Término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.


// En este orden, no puedo obtener lo q quiero. JS sube la declaración de la variable y le asigna un "undefined" para poder seguir ejecutando el código
console.log(nameOfDog);

var nameOfDog = "Elmo"



// Lo mismo sucede con las fxnes
nameOfDog();

function nameOfDog() {
    console.log(`The best dog is ${elmo}`);
}

var elmo = "Elmito;"


// Buenas prácticas para usar hoisting
// 1. No utilices var en las declaraciones de variables.
// 2. Escribe primero las funciones y luego su invocación.






// DEBUGGING
// Una manera de solucionar los bugs (bichos) del código... errores de la aplicación.

// En el navegador puedo usar palabra "debugger". Esto pausa la ejecución del código en el lugar donde la pongo. Es una alternativa para no tener q estar usando "console.log" para ver qué está pasando con el código.

var a = "Hello";

function hello() {
    let b = "Hello World";
    const c = "Hello World";
    debugger;
}

hello();









// Preguntas de Examen:

// ¿Qué sucederá si ejecutamos el siguiente código? Elmo
nameOfDog("Elmo"); 
function nameOfDog(name) {
    console.log(name); 
}; 


// Analiza el siguiente código e identifica la variable declarada en el alcance de la función: var fruit1 = "apple"
const fruits = () => { 
    if (true) { 
        var fruit1 = 'apple'; 
        const fruit2 = 'banana'; 
        let fruit3 = 'kiwi';
        console.log(fruit2);
        console.log(fruit3)
    } 
    console.log(fruit1);
    }

fruits()