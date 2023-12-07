const CALCULAR = document.getElementById('calcular')
const ERROR = document.getElementById('error')
const FLUJO = document.getElementById('flu')
const MANTENIMIENTO = document.getElementById('man')

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    console.log("Dato Ingresado: " + DATO)
    if (DATO > 0) {
        ERROR.style.display = 'none'
        let flujo = 10
        let mantenimiento = flujo * 1.5
        FLUJO.innerHTML = flujo + 'cc/hr'
        MANTENIMIENTO.innerHTML = 'm+m/2' + mantenimiento + 'cc/hr'
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

}