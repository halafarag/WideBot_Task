import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { getValidatorErrorMessage } from 'src/app/auth/utils/validators-utils';

@Component({
  selector: 'app-error-messages',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-container *ngIf="errorMessage !== null"
    >{{ errorMessage }}
  </ng-container>`,
})
export class ErrorMessageComponent {
  @Input()
  control!: AbstractControl;
  get errorMessage() {
    for (const validatorName in this.control?.errors) {
      if (this.control.touched)
        return getValidatorErrorMessage(
          validatorName,
          this.control.errors[validatorName]
        );
    }
    return null;
  }
}
