// Pasos para llegar a este primer ejercicio:
// 1. Se clonó repositorio de GIT
// 2. Se creó archivo de NODE dentro de repositorio: npm init -y (crea archivo "package.json" necesario para construir aplicaciones)
// 3. Creo carpeta "src" dentro de la cual va "scope" que contiene "global.js"

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