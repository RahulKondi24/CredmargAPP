import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CredmargAPP';
  loggedIn: boolean = false;
  username: string = '';
  newLogin = { username: '', password: ''};

  token: string = '';
  user: string = '';

  constructor(
    private router: Router,
    private loginService: AuthService // Inject your login service
  ) {}

  ngOnInit(): void {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('username');
    if (token && user) {
      this.loggedIn = true;
      this.username = user;
      this.token = token;
    }
  }

  login() {
    this.loginService.login(this.newLogin.username, this.newLogin.password).subscribe(
      (response) => {
        this.token = response.token;
        this.user = response.user;

        localStorage.setItem('username', this.user);
        localStorage.setItem('token', this.token);

        this.loggedIn = true;
        this.username = this.user;
        this.router.navigate(['/employees']);
      },
      (error) => {
        alert(error.error.message)
        console.error('Login failed:', error);
      }
    );
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');

    this.loggedIn = false;
    this.username = '';

    this.router.navigate(['']);
  }
}
