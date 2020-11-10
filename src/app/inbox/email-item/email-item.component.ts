import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmailService} from '../shared/services/email.service';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {
  mail$: Observable<any>;
  constructor(private actRoute: ActivatedRoute, private emailServ: EmailService) { }

  ngOnInit(): void {
    this. mail$ = this.actRoute.params
      .pipe(
      switchMap((params) => {
        return this.emailServ.getMail(params['id'])
      })
    )
  }

}
