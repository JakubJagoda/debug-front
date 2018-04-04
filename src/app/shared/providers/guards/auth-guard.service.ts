import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router,
              private matSnackBar: MatSnackBar,
              private authService: AuthService) {
  }

  canActivate(): Observable<boolean> {
    return this.authService.getUserData()
      .take(1)
      .map((data) => {
        if (data === null) {
          this.matSnackBar.open('Error! No access!', 'Dismiss', {
            duration: 3000
          });
          this.router.navigate(['/']);
        }

        return data !== null;
      });
  }
}
