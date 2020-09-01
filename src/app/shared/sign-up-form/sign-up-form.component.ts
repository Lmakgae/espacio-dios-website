import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from '../../core/services/countries.service';
import { State } from '../data/data models/state';
import { Country } from '../data/data models/country';
import { FirebaseFunctionsService } from 'src/app/core/services/firebasefunctions.service';
import { FunctionRes } from '../data/data models/functionRes';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  signedUp = 0;
  signUpMessage = '';
  ip = '';

  countriesList: Country[];
  states: State[];

  signUpForm = this.fb.group({
    firstName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    countryInput: [''],
    country: ['', [Validators.required]],
    stateProvInput: [''],
    stateProv: ['', [Validators.required]],
    sub: [true]
  });

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
    private FirebaseFunctions: FirebaseFunctionsService
  ) { }

  ngOnInit(): void {

    this.countriesList = this.countriesService.getCountries();

    this.signUpForm.get('country').valueChanges.subscribe(value => {
      if (value === 'Select Country') {
        this.country.setValue('');
        return;
      }

      this.countryInput.setValue(value);
    });

    this.signUpForm.get('countryInput').valueChanges.subscribe(value => {
      this.states = this.countriesService.getStates(value);
    });

    this.signUpForm.get('stateProv').valueChanges.subscribe(value => {

      if (value === 'Select State/Province') {
        this.stateProv.setValue('');
        return;
      }

      this.stateProvInput.setValue(value);
    });

    this.countriesService.ipStack.subscribe(data => {
      this.country.setValue(data.country_name);
      this.ip = data.ip;
    });

  }

  get firstName() { return this.signUpForm.get('firstName'); }
  get email() { return this.signUpForm.get('email'); }
  get countryInput() { return this.signUpForm.get('countryInput'); }
  get country() { return this.signUpForm.get('country'); }
  get stateProvInput() { return this.signUpForm.get('stateProvInput'); }
  get stateProv() { return this.signUpForm.get('stateProv'); }
  get sub() { return this.signUpForm.get('sub'); }

  submit() {
    if (this.signUpForm.valid) {
      this.FirebaseFunctions.newsLetterSignUp(
                            this.firstName.value,
                            this.email.value,
                            this.country.value,
                            this.stateProv.value,
                            this.ip,
                            this.sub.value )
                            .subscribe((res: FunctionRes) => {
                              console.log(res);
                              if (res.status) {
                                this.signedUp = 1;
                                this.signUpMessage = res.message;
                              } else {
                                this.signedUp = 1;
                                this.signUpMessage = res.message;
                              }
                            });
    } else {
      // Validate all form fields
      Object.keys(this.signUpForm.controls).forEach(field => {
        const control = this.signUpForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }

  }

}
