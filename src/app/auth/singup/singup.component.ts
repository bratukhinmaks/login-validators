import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Passmatch} from '../../shared/validators/passmatch';
import {Useruniquie} from '../../shared/validators/useruniquie';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {PasswordValidator} from '../../shared/validators/passcheck';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  form: FormGroup;
  password = true;

  constructor(private fb: FormBuilder, private passMatch: Passmatch, private uniq: Useruniquie, private auth: AuthService, private router: Router, private passValid: PasswordValidator) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-z]+$/), Validators.minLength(4)], [this.uniq.validate]],
      password: ['', [Validators.required, Validators.minLength(8), this.passValid.validate]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-z]+$/), Validators.minLength(2) ]],
      surname: ['', [Validators.required, Validators.pattern(/^[a-z]+$/), Validators.minLength(2)]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      state: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-z]+$/)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z]+$/)]],
      postCode: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      pesel: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(16)]],
      mail: ['', [Validators.required, Validators.email]],
      condition1: ['', [Validators.required]],
      condition2: ['', [Validators.required]],

    }, {validators: [this.passMatch.validate]});
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const sendFrom = {
      username: this.form.get('username').value,
      password: this.form.get('password').value,
      passwordConfirmation: this.form.get('passwordConfirm').value
    };
    this.auth.singup(sendFrom).subscribe(
      () => {
        this.form.reset();
        this.router.navigate(['/'], {queryParams: {user: sendFrom.username, password: sendFrom.password}});
      },
      (err) => {
        if (!err.status) {
          this.form.setErrors({noConnection: true});
        }
      }
    );

  }
}
