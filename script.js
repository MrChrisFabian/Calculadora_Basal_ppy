const CALCULAR = document.getElementById('calcular')
const ERROR = document.getElementById('error')
const VOLUMEN = document.getElementById('volumenD')
const MANTENIMIENTO = document.getElementById('flu')
const mantmasMant2 = document.getElementById('man')
const LINEA1 = document.getElementById('LineaUno')
const LINEA2 = document.getElementById('LineaDos')
const LINEA3 = document.getElementById('LineaTres')


CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    console.log("Dato Ingresado: " + DATO)
    if (DATO > 0) {
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo / 24;
        let mPlusm = mantenimiento *1.5;
        VOLUMEN.innerHTML = flujo + 'cc'
        MANTENIMIENTO.innerHTML = Math.round(mantenimiento) + ' cc/hr'
        mantmasMant2.innerHTML = 'm+m/2 ' + Math.round(mPlusm) + ' cc/hr'
        mantmasMant2.style.display = 'block'
        MANTENIMIENTO.style.display = 'block'
        VOLUMEN.style.display = 'block'
    }
    else {
        ERROR.style.display = 'block'
        mantmasMant2.style.display = 'none'
        MANTENIMIENTO.style.display = 'none'
        VOLUMEN.style.display = 'none'
    }
})
function calcFlujo(param1) {
    let peso = param1;
    let flujo;
    let aux;
    if(peso <= 10){
        flujo = peso*100;
        LINEA1.innerHTML = "FLujo, se calcula por cada Kilogramo 100cc"
        LINEA2.innerHTML = "El mantenimiento es el flujo divido en 24horas"
        LINEA3.innerHTML = "m+m/2 ; es el mantenimiento mas su mitad dividido en 2"
    }
    else if(peso>10 && peso<=20){
        aux = peso-10;
        flujo = (aux*50) + (1000);

        LINEA1.innerHTML = "FLujo, por cada Kilogramo 100cc hasta los primeros 10"
        LINEA2.innerHTML = "Los Kilogramos restantes se calcula 50cc por cada uno"
        LINEA3.innerHTML = "Mantenimiento es el flujo divido en 24horas"
    }
    else if(peso>20 && peso<30){
        aux = peso-20;
        flujo = (aux*20) + (1500);

        LINEA1.innerHTML = "FLujo, por cada Kilogramo 100cc hasta los primeros 10"
        LINEA2.innerHTML = "Por cada kg mayor a 20kg y menor de 30kg son 20cc "
        LINEA3.innerHTML = "Mantenimiento es el flujo divido en 24horas"
    }
    else{
        let sc = ( (peso * 4) + 7) / (peso + 90)
        flujo = sc*1500
        LINEA1.innerHTML = "Metodo Superficie Corporal"
        LINEA2.innerHTML = "FLujo se calcula por Superficie Corporal multiplicado por 1500"
        LINEA3.innerHTML = "Mantenimiento es el flujo divido en 24horas"
    }
    return Math.round(flujo)
}