radio.onReceivedString(function (cmd) {
    if (cmd == "F") {
        pins.servoWritePin(AnalogPin.P0, 100)
        pins.servoWritePin(AnalogPin.P1, 100)
        pins.servoWritePin(AnalogPin.P2, 100)
        pins.servoWritePin(AnalogPin.P8, 100)
        basic.showIcon(IconNames.Heart)
    } else if (cmd == "B") {
        pins.servoWritePin(AnalogPin.P0, 80)
        pins.servoWritePin(AnalogPin.P1, 80)
        pins.servoWritePin(AnalogPin.P2, 80)
        pins.servoWritePin(AnalogPin.P8, 80)
        basic.showIcon(IconNames.SmallHeart)
    } else if (cmd == "L") {
        pins.servoWritePin(AnalogPin.P0, 80)
        pins.servoWritePin(AnalogPin.P1, 100)
        pins.servoWritePin(AnalogPin.P2, 80)
        pins.servoWritePin(AnalogPin.P8, 100)
        basic.showIcon(IconNames.Happy)
    } else if (cmd == "R") {
        pins.servoWritePin(AnalogPin.P0, 100)
        pins.servoWritePin(AnalogPin.P1, 80)
        pins.servoWritePin(AnalogPin.P2, 100)
        pins.servoWritePin(AnalogPin.P8, 80)
        basic.showIcon(IconNames.Sad)
    } else if (cmd == "S") {
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
        pins.servoWritePin(AnalogPin.P8, 90)
        basic.showIcon(IconNames.Confused)
    } else if (cmd == "UP") {
        pins.servoWritePin(AnalogPin.P12, 120)
        basic.showIcon(IconNames.Butterfly)
    } else if (cmd == "DOWN") {
        pins.servoWritePin(AnalogPin.P12, 60)
        basic.showIcon(IconNames.Tortoise)
    } else if (cmd == "OPEN") {
        pins.servoWritePin(AnalogPin.P13, 120)
        basic.showIcon(IconNames.Square)
    } else if (cmd == "CLOSE") {
        pins.servoWritePin(AnalogPin.P13, 60)
        basic.showIcon(IconNames.SmallSquare)
    }
})
radio.setGroup(67)
radio.setTransmitPower(7)
