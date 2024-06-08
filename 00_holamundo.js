console.log("Hola Mundo")

// Esto es un comentario

/* Esto es un comentario en varias líneas */

// https://www.youtube.com/watch?v=6cnFl9aHD5Y

// Variables
let myVariable = "Este es una cadena de texto"
console.log(myVariable)

myVariable = "Reasignamos el valor"
console.log(typeof myVariable + " " + myVariable)

myVariable = 6    // Reasignamos a un entero
console.log(typeof myVariable + " " + myVariable)

let myNumber = 5
myNumber = 5+6    // El valor de myNumber cambia
console.log(myNumber)
console.log(myNumber-1)  // El valor de myNumber no cambia

let myString = "El numero es"
console.log(myString + " " + myNumber) 

let myBool = true
myBool = false

// Constantes
const MY_CONST = "Esta es una constante" // No podemos asignar otro valor 

let myNull = null
console.log(myNull+myNumber )

let myUndefined
console.log("La salida de undefined es: " + myUndefined)

if (myNumber==11) {
    console.log("If: El número es igual a 11")
}
else if (myNumber==10){
    console.log("ElseIf: El número es igual a 10")
}
else {
    console.log("Else: El número no es igual a 11")
}

if (myNumber==11 && myString=="Hola"){}

if (!myNull){console.log("Entrá aquí porque null es por defecto falso")}
if (!myUndefined){console.log("Entrá aquí porque undefined es por defecto falso")}
if (myNull == null){console.log("MyNull == null")}
if (myUndefined == undefined){console.log("MyUndefined == undefined")}

// Funciones
function myFunction(){ // El nombre de la función en Snake Case
    console.log("Mi función") // Esto solo se imprime al invocar la función
}

myFunction() // Aquí invocamos la función

function myFunctionwithReturn(){
    return "Este es el retorno"
}

console.log(myFunctionwithReturn())

// Listas
let myList = ["Peras",2,"Manzanas",2.4] // Se pueden mezclar Strings con números
console.log(myList)
console.log(myList[0]) // Para acceder a la primera posición

// Set
// Los set no admiten valores repetidos
let mySet = new Set(["Peras",2,"Manzanas",2.4,"Peras"]) 
mySet.add("Cerezas")
console.log(mySet)
console.log(typeof mySet) // Todo lo que no es un dato primitivo en JS es un objeto

// Mapas
// Los mapas son estructuras de forma clave-valor
let myMap = new Map([["Peras",2],["Manzanas",1.5]])
myMap.set("Cerezas",4)
console.log(myMap)

console.log(myMap.get("Peras")) // Nos devuelve un 2

// Bucles
for (const value of myList){
    console.log(value)
}

for (const value of myMap){
    console.log(value)
}

// While
let myCounter = 0

while (myCounter < myList.length){
    console.log(myList[myCounter])
    myCounter++
}

// Clases
// Las clases van en Upper Camel Case
class MyClass{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let myClass = new MyClass("Paco",43)
console.log(myClass)

// Enum
const MyEnum = {
    DART:"dart",PYTHON:"python",JAVA:"java",KOTLIN:"kotlin",JAVASCRIPT:"javascript"
}

const lenguaje = MyEnum.DART;
console.log(lenguaje) // La salida es "dart"