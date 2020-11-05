import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Passmatch} from '../../shared/validators/passmatch';
import {Useruniquie} from '../../shared/validators/useruniquie';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  form: FormGroup;
  password = true;
  errorcounter = 0;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private passMatch: Passmatch, private uniq: Useruniquie, private auth: AuthService, private router: Router, private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.active.queryParams.subscribe(
      (params) => {
        this.form = this.fb.group({
            username: [params['user'], [Validators.required, Validators.pattern(/^[a-z0-9]+$/), Validators.minLength(4)]],
            password: [params['password'], [Validators.required, Validators.minLength(6)]],
          }
        );
      }
    );
  }

  submit(): void {
    const sendFrom = {
      username: this.form.get('username').value,
      password: this.form.get('password').value,
    };
    this.auth.singin(sendFrom).subscribe(
      (v) => {
        console.log(v);
      },
      (err) => {
        this.errorcounter++;
      }
    )
  }

}
