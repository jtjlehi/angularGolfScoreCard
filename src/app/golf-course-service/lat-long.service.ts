import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GoogleMapsLocationObj } from './maps-location-api.interface';

@Injectable()
export class LatLongService {
  key = "AIzaSyCnoZ9xpGW8JsdzgEgvMK_btAdL1yuxGM8";
  url = "https://maps.googleapis.com/maps/api/geocode/json?address=";

  constructor(private httpClient: HttpClient) { }

  getLatLong(zipcode: number): Observable<GoogleMapsLocationObj> {
    return this.httpClient
      .get<GoogleMapsLocationObj>
      (`${this.url}${zipcode}&key=${this.key}`);
  }

}
