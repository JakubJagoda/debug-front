import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { UserData } from './auth.interface';

@Injectable()
export class AuthService {
  private static LOCAL_STORAGE_KEY = 'userData';
  private userData: Subject<UserData> = new Subject();

  constructor() {
    const storedData = JSON.parse(localStorage.getItem(AuthService.LOCAL_STORAGE_KEY));

    if (storedData) {
      this.userData.next(storedData);
    }
  }

  public getUserData(): Observable<UserData> {
    return this.userData;
  }

  public handleAuthorizationResponse(response: UserData) {
    localStorage.setItem(AuthService.LOCAL_STORAGE_KEY, JSON.stringify(response));
    this.userData.next(response);
  }

  public signOut() {
    localStorage.removeItem(AuthService.LOCAL_STORAGE_KEY);
    this.userData.next(null);
  }
}
