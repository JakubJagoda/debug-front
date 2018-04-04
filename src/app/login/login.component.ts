import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TakeUntilDestroy } from 'ng-rxjs-take-until-destroy';

import { AuthService } from '../shared/providers/auth/auth.service';
import { UserData } from '../shared/providers/auth/auth.interface';
import { AuthApiService } from '../shared/providers/api/auth-api.service';

@Component({
  selector: 'dbg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
  public login: string;
  public password: string;

  constructor(private matSnackBar: MatSnackBar,
              private router: Router,
              private authService: AuthService,
              private authApiService: AuthApiService) { }

  ngOnInit() {
    this.getUserData().subscribe((userData) => {
      if (userData) {
        this.handleUserLoggedIn(userData);
      }
    });
  }

  ngOnDestroy() {}

  public send() {
    this.authApiService.logIn(this.login, this.password).subscribe((result: UserData) => {
      this.authService.handleAuthorizationResponse(result);
    }, error => {
      const ref = this.matSnackBar.open('Error! Incorrect credentials!', 'Dismiss');

      setInterval(() => {
        const err = error;
        ref.dismiss();
      }, 3000);
    });
  }

  @TakeUntilDestroy
  private getUserData(): Observable<UserData> {
    return this.authService.getUserData();
  }

  private handleUserLoggedIn(userData: UserData) {
    this.router.navigate(['/', 'employees']);

    this.matSnackBar.open(`Hello again, ${userData.login}!`, 'Hi!', {
      duration: 3000
    });
  }
}
