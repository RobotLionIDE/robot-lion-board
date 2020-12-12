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
  display.println(String(String("Робот рев")));
  display.display();
  song((std::vector<int>{370,330,294,277,247,220,247,277,370,330,294,277,247,220,247,277,294,277,247,220,196,185,196,220,294,370,392,440,370,392,440,247,277,294,330,370,392,370,294,330,370,185,196,220,196,185,196,220,196,247,220,196,185,165,185,147,165,185,196,220,247,196,247,220,247,277,294,220,247,277,294,330,370,392,440,440,370,392,440,370,392,440,220,247,277,294,330,370,392,370,294,330,370,277,220,220,277,247,294,277,247,220,196,220,147,165,185,196,220,247,196,247,220,247,277,294,220,247,277,294,330,370,392,440}),100);
}

void loop()
{
  
  
}
