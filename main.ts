let time = 0
let t2 = 0
let t1 = 0
let read = 0
basic.forever(function () {
    if (sensors.sensor_infraredTracking(DigitalPin.P1) || sensors.sensor_infraredTracking(DigitalPin.P12)) {
        basic.showIcon(IconNames.Happy)
        if (read == 0) {
            t1 = input.runningTime()
            read = 1
            basic.showIcon(IconNames.LeftTriangle)
        } else {
            t2 = input.runningTime()
            time = (t2 - t1) / 1000
            read = 0
            sensors.setIntensity(7)
            sensors.digit(Math.trunc(time) / 10, 0)
            sensors.digit(Math.trunc(time) % 10, 1)
            sensors.showDpAt(ledon_off._on, 1)
            sensors.digit(Math.trunc(time * 100) % 100 / 10, 2)
            sensors.digit(Math.trunc(time * 100) % 10, 3)
        }
    }
})
