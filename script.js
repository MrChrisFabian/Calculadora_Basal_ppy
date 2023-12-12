//Creamos las variables y constantes necesarias para nuestro programa
const CALCULAR = document.getElementById('calcular')
const ERROR = document.getElementById('error')
const VOLUMEN = document.getElementById('volumenD')
const MANTENIMIENTO = document.getElementById('flu')
const mantmasMant2 = document.getElementById('man')
const LINEA1 = document.getElementById('LineaUno')
const LINEA2 = document.getElementById('LineaDos')
const LINEA3 = document.getElementById('LineaTres')
const CASO1 = 1;
const CASO2 = 2;
const CASO3 = 3;
const CASO4 = 4;
// Utilizamos un evento para iniciar el calculo cuando se de un click en el botón especificado
CALCULAR.addEventListener('click', () => {
    //obtenemos el valor ingresado
    const DATO = document.getElementById('peso').value
    // nos aseguramos de que sea un valor valido
    if (DATO > 0) {
        //Realizamos el calculo correspendiente
        calcCompleto(DATO);
    }
    else {
        //se muestra el mensaje de error
        mensajesError();
    }
})
function calcFlujo(peso) {

    //Realizamos los calculos según la cantidad de kilogramos ingresado
    let flujo;
    let aux;
    //Menores de 10kg
    if (peso <= 10) {
        flujo = peso * 100;
        //Se Explica el calculo realizado al usuario
        metodoCalc(CASO1);
    }
    // Menores de 20kg y mayores a 10kg
    else if (peso > 10 && peso <= 20) {
        aux = peso - 10;
        flujo = (aux * 50) + (1000);
        //Se Explica el calculo realizado al usuario
        metodoCalc(CASO2);
    }
    //Menores de 30kg pero mayores de 20kg
    else if (peso > 20 && peso < 30) {
        aux = peso - 20;
        flujo = (aux * 20) + (1500);
        //Se Explica el calculo realizado al usuario
        metodoCalc(CASO3);
    }
    //Mayores de 30kg
    else {
        let sc = ((peso * 4) + 7) / (peso + 90)
        flujo = sc * 1500
        // Se Explica el calculo realizado al usuario
        metodoCalc(CASO4);
    }
    return Math.round(flujo)
}
function metodoCalc(caso) {
    /* Para explicar al usuario el calculo realizado se accede al html con las variables que hemos asignado
     de forma de reemplazar su contenido según sea necesario*/
    switch (caso) {
        case 1:
            LINEA1.innerHTML = "Flujo, se calcula por cada Kilogramo 100cc"
            LINEA2.innerHTML = "El mantenimiento es el flujo divido en 24horas"
            LINEA3.innerHTML = "m+m/2 ; es el mantenimiento mas su mitad dividido en 2"
            break
        case 2:
            LINEA1.innerHTML = "Flujo, por cada Kilogramo 100cc hasta los primeros 10"
            LINEA2.innerHTML = "Los Kilogramos restantes se calcula 50cc por cada uno"
            LINEA3.innerHTML = "Mantenimiento es el flujo divido en 24horas"
            break
        case 3:
            LINEA1.innerHTML = "Flujo, por cada Kilogramo 100cc hasta los primeros 10"
            LINEA2.innerHTML = "Por cada kg mayor a 20kg y menor de 30kg son 20cc "
            LINEA3.innerHTML = "Mantenimiento es el flujo divido en 24horas"
            break
        case 4:
            LINEA1.innerHTML = "Metodo Superficie Corporal"
            LINEA2.innerHTML = "Flujo se calcula por Superficie Corporal multiplicado por 1500"
            LINEA3.innerHTML = "Mantenimiento es el flujo divido en 24horas"
            break
    }
}
// Se muestra el mensaje de Error y se ocultan los mensajes de resultados
function mensajesError() {
    ERROR.style.display = 'block'
    mantmasMant2.style.display = 'none'
    MANTENIMIENTO.style.display = 'none'
    VOLUMEN.style.display = 'none'
}
function mensajesResultado() {
    // Se ocultan el mensaje de error y se muestran los resultados
    ERROR.style.display = 'none'
    mantmasMant2.style.display = 'block'
    MANTENIMIENTO.style.display = 'block'
    VOLUMEN.style.display = 'block'
}
function calcCompleto(peso) {
    // Realizamos el calculo para obtener, flujo, mantenimiento y mantemiento + (mantenimiento/2) para luego mostrarlo por pantalla
    let flujo = calcFlujo(peso);
    let mantenimiento = flujo / 24;
    let mPlusm = mantenimiento * 1.5;
    VOLUMEN.innerHTML = flujo + 'cc'
    MANTENIMIENTO.innerHTML = Math.round(mantenimiento) + ' cc/hr'
    mantmasMant2.innerHTML = 'm+m/2 ' + Math.round(mPlusm) + ' cc/hr'
    mensajesResultado();
}

