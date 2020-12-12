#include <Arduino.h>
#include "pins_arduino.h"
#include "RobotLion_Display.h"
#include "RobotLion_Motor.h"
#include "RobotLion_Buzzer.h"
#include <Servo.h>

void RobotLion()
{
  MLReverce = 0;
  MRReverce = 1;
  display_init();
  motor_init();
}

void back_setup(String tl, String tc, String tr, String bl, String bc, String br)
{
}

void front_setup(boolean lr, boolean rr, String tl, String tc, String tr, String bl, String bc, String br)
{
  if(lr) {MLReverce = 1;} else {MLReverce = 0;}
  if(rr) {MRReverce = 1;} else {MRReverce = 0;}
  
  if(tr=="buzzer"){
    BuzzerPin = 32;
    BuzzerCh = 11;
    pinMode(BuzzerPin, OUTPUT);
    ledcSetup(BuzzerCh, 0, 10);
  }
}
