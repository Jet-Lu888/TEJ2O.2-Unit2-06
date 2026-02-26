/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jet Lu
 * Created on: Feb 2026
 * This program will turn a light on and off.
*/

// startup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0) // this turns the pin off

// turns light on
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    pause(500)
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

// turns light off
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    pause(500)
    basic.showIcon(IconNames. No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
