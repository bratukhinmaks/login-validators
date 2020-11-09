import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {
  }

  dark = true;

  ngOnInit(): void {
  }

  changeMode(): void {
    this.dark = !this.dark;
    if (this.dark) {
      document.getElementsByTagName('html')[0].classList.remove('light');
      document.getElementsByTagName('html')[0].classList.add('dark');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
      document.getElementsByTagName('html')[0].classList.add('light');
    }
  }

  logOut(): void {
    this.auth.loggedIn = false;
    this.router.navigate(['/']);
    this.auth.singout().subscribe(() => {});
  }
}
