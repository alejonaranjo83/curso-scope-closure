// Pasos para llegar a este primer ejercicio:
// 1. Se clonó repositorio de GIT
// 2. Se creó archivo de NODE dentro de repositorio: npm init -y (crea archivo "package.json" necesario para construir aplicaciones)
// 3. Creo carpeta "src" dentro de la cual va "scope" que contiene "global.js"


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