#include <Arduino.h>
#include "pins_arduino.h"
#include "RobotLion_Display.h"
#include "RobotLion_Motor.h"
#include "RobotLion_Buzzer.h"
#include "RobotLion_RGB.h"
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
  int tp;
  int tch;
  String tval;

  if(lr) {MLReverce = 1;} else {MLReverce = 0;}
  if(rr) {MRReverce = 1;} else {MRReverce = 0;}

  /******************************************************
  *  Top Left (Blue)
  *  Pin = 5
  *  Channel = 8
  */
  tp = 5;
  tch = 8;
  tval = tl;
  
  if(tval=="buzzer"){
    BuzzerPin = tp;
    BuzzerCh = tch;
    pinMode(BuzzerPin, OUTPUT);
    ledcSetup(BuzzerCh, 0, 10);
  }
  if(tval=="rgb_r"){
    RGBRPin = tp;
    RGBRCh = tch;
    pinMode(RGBRPin, OUTPUT);
    ledcSetup(RGBRCh, 5000, 8);
    ledcAttachPin(tp, tch);
  }

  
  ///////////////////////////////////////////////////
  
  
  /*
  *  Top Right (Blue)
  *  Pin = 32
  *  Channel = 11
  */
  tp = 32;
  tch = 11;
  tval = tr;

  if(tval=="buzzer"){
    BuzzerPin = tp;
    BuzzerCh = tch;
    pinMode(BuzzerPin, OUTPUT);
    ledcSetup(BuzzerCh, 0, 10);
  }
  if(tval=="rgb_r"){
    RGBRPin = tp;
    RGBRCh = tch;
    pinMode(RGBRPin, OUTPUT);
    ledcSetup(RGBRCh, 5000, 8);
    ledcAttachPin(tp, tch);
  }



  ///////////////////////////////////////////////////
  
  
  /*
  *  Bottom Left (Red)
  *  Pin = 13
  *  Channel = 12
  */
  tp = 13;
  tch = 12;
  tval = bl;

  if(tval=="buzzer"){
    BuzzerPin = tp;
    BuzzerCh = tch;
    pinMode(BuzzerPin, OUTPUT);
    ledcSetup(BuzzerCh, 0, 10);
  }
  if(tval=="rgb_r"){
    RGBRPin = tp;
    RGBRCh = tch;
    pinMode(RGBRPin, OUTPUT);
    ledcSetup(RGBRCh, 5000, 8);
    ledcAttachPin(tp, tch);
  }


  ///////////////////////////////////////////////////


  /*
  *  Bottom Right (Red)
  *  Pin = 25
  *  Channel = 13
  */
  tp = 25;
  tch = 13;
  tval = br;

  if(tval=="buzzer"){
    BuzzerPin = tp;
    BuzzerCh = tch;
    pinMode(BuzzerPin, OUTPUT);
    ledcSetup(BuzzerCh, 0, 10);
  }
  if(tval=="rgb_r"){
    RGBRPin = tp;
    RGBRCh = tch;
    pinMode(RGBRPin, OUTPUT);
    ledcSetup(RGBRCh, 5000, 8);
    ledcAttachPin(tp, tch);
 }


  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////

  
  
  /******************************************************
  *  Top CENTER (Blue)
  *  Pins = 26,27
  *  Channels = 9,10
  */
  if(tc=="rgb_gb"){
    RGBGPin = 26;
    RGBGCh = 9;
    pinMode(RGBGPin, OUTPUT);
    ledcSetup(RGBGCh, 5000, 8);
    ledcAttachPin(RGBGPin, RGBGCh);

    RGBBPin = 27;
    RGBBCh = 10;
    pinMode(RGBBPin, OUTPUT);
    ledcSetup(RGBBCh, 5000, 8);
    ledcAttachPin(RGBBPin, RGBBCh);
  }


  ///////////////////////////////////////////////////


  
}
