import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class FirebaseFunctionsService {

  firebaseFunctionsURL = 'https://espaciodios.com/api/';
  newsLetterSignUpName = 'newsLetterSignUp';

  constructor(
    private http: HttpClient,
  ) { }

  newsLetterSignUp(name: string, email: string, country: string, state: string, ip: string, newsletterSub: boolean) {
    return this.http.post(
      this.firebaseFunctionsURL +
      this.newsLetterSignUpName +
      '?na=' + name + '&' +
      'em=' + email + '&' +
      'co=' + country + '&' +
      'st=' + state + '&' +
      'ip=' + ip + '&' +
      'neSub=' + newsletterSub, '');
  }

}
