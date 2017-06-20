import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  styleUrls: ['form-input.component.scss'],
  template: `
    <div
      class="dynamic-field form-input"
      [formGroup]="group"
      [ngClass]="{'input-text-container-has-validation-error' : !group.controls.name.valid}"
      >
      <label>
          {{ config.label }}
          <span class="error-message" [ngClass]="{'active-error-message' : !group.controls.name.valid}"> - {{textInputValidationErrorMessage}}</span>
      </label>
      <input
        type="text"
        [attr.placeholder]="config.placeholder"
        [formControlName]="config.name">
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  textInputValidationErrorMessage : string = "Please enter a valid value";

}
