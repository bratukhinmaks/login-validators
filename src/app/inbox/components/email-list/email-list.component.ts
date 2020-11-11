import { Component, OnInit } from '@angular/core';
import {EmailService} from '../../shared/services/email.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {
  emails$: Observable<any>;
  constructor(private emailServ: EmailService) { }
  ngOnInit(): void {
    this.emails$ = this.emailServ.getMails();
  }

}
