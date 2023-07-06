const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

function obtenerCantidadDeJugadas() {
    const readlineSync = require('readline-sync');
    let jugadasUsuario = readlineSync.question("Ingrese cantidad de jugadas: 1, 2 o 3 ");
    while (!(jugadasUsuario>0 && jugadasUsuario<4)){
        jugadasUsuario = readlineSync.question("Cantidad invalida. Ingrese cantidad de jugadas: 1, 2 o 3 ");
    }
    return jugadasUsuario;
}

function obtenerJugadaComputadora() {
    let opciones = [PIEDRA, PAPEL, TIJERA];
    let jugadaComputadora = opciones[Math.floor(Math.random() * 3)];
    return jugadaComputadora;
}

function obtenerJugadaUsuario() {
    
    const readlineSync = require('readline-sync');
    let jugadaUsuario = readlineSync.question("Ingrese su eleccion: piedra, papel o tijera ");
    while (jugadaUsuario !==PIEDRA && jugadaUsuario !== PAPEL && jugadaUsuario !== TIJERA){
        jugadaUsuario = readlineSync.question("Jugada invalida. Ingrese su eleccion: piedra, papel o tijera ");
    }

    return jugadaUsuario;
}

function ppt(jugada1, jugada2) {
    return (jugada1 === PIEDRA && jugada2 === TIJERA) ||
        (jugada1 === PAPEL && jugada2 === PIEDRA) ||
        (jugada1 === TIJERA && jugada2 === PAPEL);
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
        return "empate";
    }

    if (ppt(jugadaComputadora, jugadaUsuario)) {
        return "Gana la computadora";
    } else {
        return "Gana el usuario";
    }
}



function aJugar(cantidadDeJugadas) {

    let puntaje = 0;
    for (let i = 0; i < cantidadDeJugadas; i++) {
        const jugadaComputadora = obtenerJugadaComputadora();
        const jugadaUsuario = obtenerJugadaUsuario();
        const ganador = determinarGanador(jugadaComputadora, jugadaUsuario);
        console.log("Jugada %i", i+1);
        console.log("La computadora eligio: %s.", jugadaComputadora);
        console.log("El usuario eligio: %s.", jugadaUsuario);
        console.log("El resultado fue: %s.", ganador);
        if (ganador == "Gana el usuario") {
            puntaje++;
        } else if (ganador == "Gana la computadora") {
            puntaje--;
        }
    }

    if (puntaje > 0) return "Gana el usuario";
    if (puntaje < 0) return "Gana la computadora";
    if (puntaje == 0) return "Empate";
}
console.log(aJugar(obtenerCantidadDeJugadas()));