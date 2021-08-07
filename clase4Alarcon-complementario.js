const NUMERO_RANDOM = parseInt(Math.random()*10)
const BOTON_REINICIO = document.getElementById("boton-reinicio")
const gameRow = document.getElementById("game-row")
const game = document.getElementById("game-inputs")
const modo = document.getElementById("botones-modo")
const cantOportunidades = document.getElementById("cantOportunidades")
const nameContainer = document.getElementById("name--container")
let oportunidades
let intentos = 0

/* just to know */
console.log(`Si entraste aca, el numero magico es ${NUMERO_RANDOM}. Lo dejo por si quieres experimentar.`)

function refreshPage(){
    window.location.reload();
} 

function removeClass() {
    game.classList.remove("hide")
    nameContainer.classList.remove("hide")
    modo.classList.add("hide")
}


function facil() {
    removeClass()
    return oportunidades = 7
}

function medio() {
    removeClass()
    return oportunidades = 5
}

function dificil() {
    removeClass()
    return oportunidades = 3
}

function mostrarSaludo() {
    let nombreInput = document.getElementById("username")
    let nombre = nombreInput.value
    const saludar = document.getElementById("saludo")

    if (nombre != "") {
        saludar.innerHTML = `Hola ${nombre}! veamos si tienes suerte 🍀!`
    }   else {
        saludar.innerHTML = `Hola persona misteriosa 🕵️‍♂️! veamos si tienes suerte 🍀!`
    }
}


function comprobarNumero() {
    let numeroInput = document.getElementById("number")
    let numero = numeroInput.value
    numero = parseInt(numero) 
    if (numero != NUMERO_RANDOM) {
        if (numero > NUMERO_RANDOM) {
            respuesta.innerHTML = `Lo siento, ese numero no es correcto! <br>
            Una pista: es menor que ${numero}` 
        } else {
            respuesta.innerHTML = `Lo siento, ese numero no es correcto! <br>
            Una pista: es mayor que ${numero}` 
        }
    } else {
        respuesta.innerHTML = `FELICIDADES, HAS ACERTADO! El numero correcto era ${NUMERO_RANDOM}, solo te ha tomado ${intentos} intento/s!`
        BOTON_REINICIO.classList.remove("hide")
        gameRow.classList.add("hide")
    }
}

function partida() {
    const respuesta = document.getElementById("respuesta")
    let numeroInput = document.getElementById("number")
    let numero = numeroInput.value
    console.log(`intento: ${intentos}`)
    
    if (numero == "") {
        respuesta.innerHTML = `No seas agua fiestas, ingresa un numero valido. <br>
        Mira, te doy un ejemplo, prueba con: 3` 
    } else if (numero < 0 || numero > 10) {
        respuesta.innerHTML = `Lo siento, ese numero no es correcto!`
    } else {
        comprobarNumero()
    }
}


function comenzar() {
    intentos++
    oportunidades--
    cantOportunidades.innerHTML = `Tienes ${oportunidades} Oportunidades!`
    console.log(`Oportunidades restantes: ${oportunidades}`)

    if (oportunidades > 0) {
        partida()
    } else if (oportunidades == 0) {
        respuesta.innerHTML = `Has perdido, deberas reiniciar el juego 😔`
        gameRow.classList.add("hide")
        BOTON_REINICIO.classList.remove("hide")
    }
}