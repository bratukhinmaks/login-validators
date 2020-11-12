import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() label: string;
  @Input() password: boolean;
  @Input() controlType = 'input';

  constructor() {
  }

  ngOnInit(): void {
  }

}
