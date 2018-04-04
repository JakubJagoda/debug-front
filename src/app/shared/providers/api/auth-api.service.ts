import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { UserData } from '../auth/auth.interface';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthApiService {

  constructor(private httpClient: HttpClient) { }

  public logIn(login: string, password: string): Observable<UserData> {
    return this.httpClient.post<UserData>(`${environment.apiUrl}/login`, {
      login,
      password
    });
  }
}
