const readlineSync = require('readline-sync');
let numeroIngresado = readlineSync.question("Ingrese un numero entero ");
if (numeroIngresado == 0) {
    console.log("El numero es cero");
} else if (numeroIngresado > 0 && numeroIngresado%2==0) {
    console.log("El numero es positivo y par");
}
else if (numeroIngresado > 0 && numeroIngresado%2!==0) {
    console.log("El numero es positivo e impar");
}
else if (numeroIngresado < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El ingreso no es un numero");

}