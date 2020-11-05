import {AbstractControl, FormGroup, ValidationErrors, Validator, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Passmatch implements Validator{
  validate(group: FormGroup): ValidationErrors | null {
    const {password, passwordConfirm} = group.value;
    if (password === passwordConfirm) {
      return null;
    } else {
      return { passDontMatch: true};
    }
  }
}
