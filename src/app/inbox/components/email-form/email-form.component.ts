import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailService} from '../../shared/services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  @Input() email;
  @Output() emailsubmit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  mailSend = false;

  constructor(private fb: FormBuilder, private sendServ: EmailService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      from: [{value: this.email.from, disabled: true}, [Validators.required, Validators.email]],
      to: [this.email.to, [Validators.required, Validators.email]],
      subject: [this.email.subject, [Validators.required]],
      text: [this.email.text, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    } else {
      this.emailsubmit.emit(this.form.value);
      this.form.reset();
      this.mailSend = true;
    }
  }

}
