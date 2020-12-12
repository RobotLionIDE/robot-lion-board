RGB_off()
{
  ledcWrite(RGBRCh, 0);
  ledcWrite(RGBGCh, 0);
  ledcWrite(RGBBCh, 0);
  ledcDetachPin(RGBRPin);
  ledcDetachPin(RGBGPin);
  ledcDetachPin(RGBBPin);
}

RGB_setColor(int _r, int _g, int _b)
{
  ledcAttachPin(RGBRPin, RGBRCh);
  ledcAttachPin(RGBGPin, RGBGCh);
  ledcAttachPin(RGBBPin, RGBBCh);
  ledcWrite(RGBRCh, _r);
  ledcWrite(RGBGCh, _g);
  ledcWrite(RGBBCh, _b);
}

