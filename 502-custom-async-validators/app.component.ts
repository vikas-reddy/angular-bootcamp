import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { simpleAsyncValidator, westernZipValidatorFactory, slowAsyncValidator } from './asyncValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  inputFormGroup: FormGroup;

  constructor(http: Http, fb: FormBuilder) {
    this.inputFormGroup = fb.group({
      input: ['', Validators.nullValidator, simpleAsyncValidator],
      zip: [
        '',
        [
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.required
        ],
        [
          slowAsyncValidator,
          westernZipValidatorFactory(http)
        ]
      ]
    });
  }

  onLogin(): void {
    console.log('logged in', this.inputFormGroup.value);
  }

  logTheForm(): void {
    console.log('form', this.inputFormGroup);
  }
}
