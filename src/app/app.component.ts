import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
  dark = true;

  changeMode() {
    this.dark = !this.dark;
    if (this.dark) {
      document.getElementsByTagName('html')[0].classList.remove('light');
      document.getElementsByTagName('html')[0].classList.add('dark');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
      document.getElementsByTagName('html')[0].classList.add('light');
    }
  }
}
