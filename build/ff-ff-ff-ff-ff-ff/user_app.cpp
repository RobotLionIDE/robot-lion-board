int MLReverce;
int MRReverce;
int BuzzerPin;
int BuzzerCh;

#include "RobotLion.h"






void setup()
{
  RobotLion();

  front_setup("FALSE", "TRUE", "null", "null", "buzzer", "null", "null", "null");
  display.clearDisplay();
     display.setCursor(0,0);

  display.setTextSize(1);
  display.setCursor(0,0);
  display.println(String(String("Robot Lion")));
  display.display();
  song((std::vector<int>{659,659,659,-1,659,659,659,-1,659,784,523,587,659,-1,698,698,-1,698,698,-1,698,659,659,659,659,-1,659,587,587,659,587,784}),100);
}

void loop()
{
  
  
}
