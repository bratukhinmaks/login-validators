import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {EmailService} from '../../shared/services/email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit, OnChanges {
  isVisible = false;
  @Input() email;

  constructor(private auth: AuthService, private sendServ: EmailService) {
  }

  ngOnChanges(): void {
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n--------- ${this.email.from} wrote:\n>${this.email.text}`
    };
  }

  onSubmit(event: any): void {
    this.sendServ.sendMail(event).subscribe(() => {
      this.isVisible = false;
    });

  }
}
