import { Component } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

import { exampleSchema } from './example-schema';
import { SchemaFormUtils } from './schema-form-utils';

@Component({
  selector: 'abc-page',
  templateUrl: './dynamic-form.html'
})
export class DynamicFormComponent {
  dynamicFormGroup: FormGroup;
  schema = exampleSchema; // could load from an external source
  controls: { [key: string]: AbstractControl; };
  dynamicClassName = 'thing1 two'

  constructor(fb: FormBuilder) {

    this.dynamicFormGroup = fb.group(
      SchemaFormUtils.createControlsConfigFromSchema(this.schema)
    );

    // Make it easier to get to the form controls from the template.
    this.controls = this.dynamicFormGroup.controls;
  }

  onSubmit(): void {
    console.log('Form Submitted', this.dynamicFormGroup.value);
  }

  logTheForm(): void {
    console.log('form: ', this.dynamicFormGroup);
  }
}
