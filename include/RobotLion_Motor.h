void motor_init()
{
  ledcSetup(LMChannel, freq, resolution);
  ledcSetup(RMChannel, freq, resolution);
  ledcAttachPin(ML_EN, LMChannel);
  ledcAttachPin(MR_EN, RMChannel);
  pinMode(MR_DIR, OUTPUT);
  pinMode(ML_DIR, OUTPUT);
  pinMode(MR_EN, OUTPUT);
  pinMode(ML_EN, OUTPUT);
}


void motor(int _channel, int _direction, int _speed) {
  int Speed = abs(_speed) * 2.55;
  if (Speed > 255) {Speed = 255;}
  if (_channel == 14){
    digitalWrite(ML_DIR, ((_direction + MLReverce)%2));
    ledcWrite(14, Speed);
  } else {
    digitalWrite(MR_DIR, ((_direction + MRReverce)%2));
    ledcWrite(15, Speed);
  }
}
