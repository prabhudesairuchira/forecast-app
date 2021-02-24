import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  weatherData: any;
  cityForm: FormGroup;
  lat: any;
  long: any;
  city: any;
  avg: any;
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cityForm  =  this.formBuilder.group({
      city: ['', Validators.required],
  });
}

get f() { return this.cityForm.controls; }

getForecast(event: any){
  this.city = this.cityForm.value.city;
  switch (this.city) {
    case "Montreal" :
    {
      this.lat= 45.50884;
      this.long = -73.58781;
      this.avg = (this.lat + this.long)/2;
      break;
    }
    case "Vancouver" : {
      this.lat= 49.2827;
      this.long = -123.1207;
      this.avg = (this.lat + this.long)/2;
      break;
    }
    default: {
      this.lat= 43.6532;
      this.long = -78.3832;
      this.avg = (this.lat + this.long)/2;
    }
  }
  console.log("selected coord",this.lat, this.long);
    this.httpClient.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.lat+"&lon="+this.long+"&exclude=hourly,minutely&units=metric&appid=5a349da13a1b63ebdd3c0f19d1c06bd9").subscribe(res =>{
    this.weatherData = res;
    console.log(this.weatherData);
  })


}

}
