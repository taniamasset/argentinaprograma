const readlineSync = require('readline-sync');
let edad = readlineSync.question("¿Cual es tu edad?");
if (edad > 17) { console.log("Eres mayor de edad") } else { console.log("Eres menor de edad") };
