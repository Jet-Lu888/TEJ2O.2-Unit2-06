"""
Created by: Jet Lu
Created on: Feb 2026
This module is a Micro:bit MicroPython program that can turn an LED on and off.
"""

from microbit import *


# startup
display.clear()
display.show(Image.HAPPY)
pin16.write_digital(0)
sleep(500)

while True:
    # turn light on
    if button_a.is_pressed():
        pin16.write_digital(1)
        display.show(Image.YES)
    # turn light off
    if button_b.is_pressed():
        pin16.write_digital(0)
        display.show(Image.NO)
