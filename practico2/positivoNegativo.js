const readlineSync = require('readline-sync');
const numeroIngresado = readlineSync.question('Ingrese un numero ');
if (numeroIngresado == 0) {
    console.log("El numero es cero");
} else if (numeroIngresado > 0) {
    console.log("El numero es positivo");
}
else if (numeroIngresado < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El ingreso no es un numero");

}



