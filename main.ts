let t2 = 0
let t1 = 0
let read = 0
basic.forever(function () {
    if (sensors.sensor_infraredTracking(DigitalPin.P1) || sensors.sensor_infraredTracking(DigitalPin.P12)) {
        basic.showIcon(IconNames.Happy)
        if (read == 0) {
            t1 = input.runningTime()
            read = 1
        } else {
            t2 = input.runningTime()
            basic.showNumber((t2 - t1) / 1000)
            read = 0
        }
    }
})
