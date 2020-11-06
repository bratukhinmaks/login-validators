import {AbstractControl, FormControl, ValidationErrors, Validator} from '@angular/forms';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class PasswordValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const hasNumber = /\W/.test(control.value);
    const hasSymbols = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const valid = hasNumber && hasUpper && hasLower && hasSymbols;
    if (!valid) {
      return {NotWrightPass: true};
    }
    return null;
  }
}
