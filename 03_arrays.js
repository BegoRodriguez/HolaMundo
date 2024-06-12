let arrayVacio = [];
console.log(arrayVacio[0]); // -> undefined

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
console.log(dias[0]); // -> Lunes
console.log(dias[2]); // -> Miercoles
console.log(dias[5]); // -> Sabado
   
dias[0] = "Sunday";   // Podemos modificar el elemento accediento a través del indice
console.log(dias[0]); // -> Sunday
   
// Ejemplo length
let nombres = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(nombres.length); // -> 4
   
nombres[5] = "Amelia";
console.log(nombres.length); // -> 6
   
console.log(nombres); // -> ["Olivia", "Emma", "Mateo","Samuel", undefined, "Amelia"]
console.log(nombres[3]); // -> Samuel
console.log(nombres[4]); // -> undefined
console.log(nombres[5]); // -> Amelia