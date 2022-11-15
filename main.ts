function detener () {
    Mover(0, 0, 0, 0)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    while (true) {
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
        angulo = DetectarAngulo()
        servos.P0.setAngle(angulo)
        Giro(angulo - 90)
        servos.P0.setAngle(90)
        basic.pause(200)
        avanzar()
        basic.pause(1000)
        detener()
    }
})
function Giro (Grados: number) {
    if (Grados < 0) {
        Mover(1, 0, 0, 0)
    } else {
        Mover(0, 0, 1, 0)
    }
    basic.pause(Math.abs(Grados) / 90 * 1200)
    detener()
}
function avanzar () {
    Mover(1, 0, 1, 0)
}
input.onButtonPressed(Button.AB, function () {
    servos.P0.setAngle(90)
})
function DetectarAngulo () {
    direccion = 0
    sonido = 0
    max_sonido = 0
    angulo = 0
    for (let index = 0; index < 5; index++) {
        servos.P0.setAngle(angulo)
        basic.showNumber(sonido)
        angulo += 45
        sonido = pins.analogReadPin(AnalogPin.P0)
        if (sonido > max_sonido) {
            max_sonido = sonido
            direccion = angulo
        }
        basic.pause(300)
    }
    return direccion
}
function Mover (Mot1: number, Mot2: number, Mot3: number, Mot4: number) {
    pins.digitalWritePin(DigitalPin.P1, Mot1)
    pins.digitalWritePin(DigitalPin.P2, Mot2)
    pins.digitalWritePin(DigitalPin.P8, Mot3)
    pins.digitalWritePin(DigitalPin.P9, Mot4)
}
let max_sonido = 0
let sonido = 0
let direccion = 0
let angulo = 0
Mover(0, 0, 0, 0)
