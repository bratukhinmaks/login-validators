import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs';

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.auth.isSingedIn().subscribe(
      (res) => {
        console.log(res);
        this.auth.loggedIn = res.authenticated;
        this.router.navigate(['/inbox']);
      }
    );
  }
}
