import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Passmatch} from '../../shared/validators/passmatch';
import {Useruniquie} from '../../shared/validators/useruniquie';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private passMatch: Passmatch, private uniq: Useruniquie) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+$/) , Validators.minLength(4)], [this.uniq.validate]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]]
    }, {validators: [this.passMatch.validate]})
  }

  submit(): void {

  }
}
