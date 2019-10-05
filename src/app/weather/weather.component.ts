import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  dataList: Array<any> = [];
  schedule: { branch: '' };
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {
    this.dataList = [
      { code: 1, name: "Ho Chi Minh" },
      { code: 2, name: "Singapore" },
      { code: 3, name: "Kuala Lumpur" },
      { code: 4, name: "Tokyo" },
      { code: 5, name: "Athens" },
      { code: 6, name: "Pune" },
      { code: 7, name: "Mumbai" },
      { code: 8, name: "New York" },
      { code: 9, name: "Shanghai" },
      { code: 10, name: "Netherlands" },
      { code: 11, name: "Paris" },
      { code: 12, name: "Nashik" }
    ]
  }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  sendToAPIXU(formValues) {
    console.log(formValues);
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => {
        this.weatherData = data;
        console.log("Weather Data :", this.weatherData)
      });

  }
}
