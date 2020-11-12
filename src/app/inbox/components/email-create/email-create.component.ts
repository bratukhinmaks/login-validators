import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {EmailService} from '../../shared/services/email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  isVisible = false;
  email: any = {
    id: '',
    text: '',
    html: '',
    from: `${this.auth.username}@angular-email.com`,
    to: '',
    subject: '',
  };

  constructor(private auth: AuthService, private sendServ: EmailService) {
  }

  ngOnInit(): void {
  }

  onSubmit(event: any): void {
    this.sendServ.sendMail(event).subscribe(() => {
      this.isVisible = false;
    });

  }
}
