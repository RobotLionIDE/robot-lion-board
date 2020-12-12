#include "vector"

noTone()
{
    ledcDetachPin(BuzzerPin);
    ledcWrite(BuzzerCh, 0);
}

void tone(unsigned int frequency, unsigned long duration){
  ledcAttachPin(BuzzerPin, BuzzerCh);
  ledcWriteTone(BuzzerCh, frequency);
  if (duration) {
    delay(duration);
    noTone();
  }
}

song(std::vector<int>notes,int duration)
{
    for(int freq : notes){
        if(freq == -1){
            noTone();
            delay(duration);
        }else{
            tone(freq,duration);
        }
    }
}

void beep(){
  digitalWrite(BuzzerPin, HIGH);
  delay(200);
  digitalWrite(BuzzerPin, LOW);
}

void beep(int _delay){
  digitalWrite(BuzzerPin,HIGH);
  delay(_delay);
  digitalWrite(BuzzerPin,LOW);
}

void beep_on(){
  digitalWrite(BuzzerPin,HIGH);
}

void beep_off(){
  digitalWrite(BuzzerPin,LOW);
}


