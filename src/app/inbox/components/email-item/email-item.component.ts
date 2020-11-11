import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmailService} from '../../shared/services/email.service';
import {pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {
  mail$: Observable<any>;

  constructor(private actRoute: ActivatedRoute, private emailServ: EmailService) {
    this.mail$ = this.actRoute.data.pipe(
      pluck('email')
    );
  }

  ngOnInit(): void {}

}
