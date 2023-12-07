const CALCULAR = document.getElementById('calcular')
const ERROR = document.getElementById('error')
const FLUJO = document.getElementById('flu')
const MANTENIMIENTO = document.getElementById('man')

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    console.log("Dato Ingresado: " + DATO)
    if (DATO > 0) {
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo / 24;
        let mPlusm = mantenimiento *1.5;
        FLUJO.innerHTML = flujo + ' cc/hr'
        MANTENIMIENTO.innerHTML = 'm+m/2 ' + mPlusm + ' cc/hr'
        FLUJO.style.display = 'block'
        MANTENIMIENTO.style.display = 'block'
    }
    else {
        ERROR.style.display = 'block'
        FLUJO.style.display = 'none'
        MANTENIMIENTO.style.display = 'none'
    }
})
function calcFlujo(param1) {
    let peso = param1;
    let flujo;
    let aux;
    if(peso <= 10){
        flujo = peso*100;
    }
    else if(peso>10 && peso<=20){
        aux = peso-10;
        flujo = (aux*50) + (1000);
    }
    else if(peso>20 && peso<30){
        aux = peso-20;
        flujo = (aux*20) + (1500);
    }
    else{
        let sc = ( (peso * 4) + 7) / (peso + 90)
        flujo = sc*1500
    }
    return flujo
}