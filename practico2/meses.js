let meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let dias=["31","28", "31", "30", "31", "30", "31", "31", "30","31", "30", "31"];
const readlineSync = require('readline-sync');
let mes = readlineSync.question("Ingrese un numero entero entre el 1 y el 12 que represente un mes del año ");
let indice=mes-1;
console.log("La cantidad de dias del mes de "+meses[indice]+" es "+dias[indice]);