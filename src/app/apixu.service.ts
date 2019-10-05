import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApixuService {

  private APPID: string;
  private API_URL: string;

  constructor(private _http: HttpClient) {
    console.log('Weather Items Service Init...');

    this.APPID = '2e7e1d8fabd7c153330e11d1f13782d9';
    this.API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  }

  getWeather(cityName: string) {
    console.log(cityName);
    return this._http.get(this.API_URL + cityName + '&APPID=' + this.APPID);
  }
}
