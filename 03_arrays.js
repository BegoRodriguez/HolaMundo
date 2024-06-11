let arrayVacio = [];
console.log(arrayVacio[0]); // -> undefined

let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
console.log(dias[0]); // -> Lunes
console.log(dias[2]); // -> Miercoles
console.log(dias[5]); // -> Sabado
   
dias[0] = "Sunday";   // Podemos modificar el elemento accediento a través del indice
console.log(dias[0]); // -> Sunday
   
