import { Injectable } from '@angular/core';
import countries from '../../shared/data/countries.json';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.js';
import { IpStackRes } from '../../shared/data/data models/ipStackRes';
import { State } from '../../shared/data/data models/state';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {

  ipGeolocationURL = 'https://ipgeolocation.com/';
  ipGeolocationField = 'country_name';
  ipStack: BehaviorSubject<IpStackRes> = new BehaviorSubject<IpStackRes>({country_name: '', ip: ''});
  countriesList: any = countries;

  constructor(
    private Http: HttpClient
  ) {

    this.Http.get(this.ipGeolocationURL + 'ip?json=1')
              .subscribe(data => {
              }, (error: {status: number, error: {text: string}}) => {
                const ipRes = error.error.text;

                if (error.status === 200) {
                  this.Http.get(this.ipGeolocationURL + ipRes + '?json=1')
                            .subscribe((data: {country: string}) => {
                              this.ipStack.next({country_name: data.country, ip: ipRes});
                            });

                }

    });

  }

  getCountries() {
    return this.countriesList;
  }

  getStates(countryName?: string, index?: number): State[] {
    if (countryName.length > 0) {
      for (const iterator of this.countriesList) {
        if (iterator.name === countryName) {
          return iterator.states;
        }
      }
    }

    if (index) {
      return this.countriesList[index].states;
    }
    return [];
  }

}
