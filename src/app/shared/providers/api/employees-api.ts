import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';
import {
  EmployeesGetResponse,
  EmployeesGetResponseEntry,
  EmployeesScoresGetResponse
} from '../employees/employees.interface';

@Injectable()
export class EmployeesApiService {
  private static EMPLOYEES_ENDPOINT = `${environment.apiUrl}/employees`;
  private static EMPLOYEES_SCORES_ENDPOINT = `${EmployeesApiService.EMPLOYEES_ENDPOINT}/scores`;

  constructor(private httpClient: HttpClient) {
  }

  public getEmployeesList(): Observable<EmployeesGetResponse> {
    return this.httpClient.get<EmployeesGetResponse>(EmployeesApiService.EMPLOYEES_ENDPOINT);
  }

  public updateEmployee(employee: EmployeesGetResponseEntry): Observable<void> {
    return this.httpClient.put<void>(`${EmployeesApiService.EMPLOYEES_ENDPOINT}/${employee.id}`, {
      employee
    });
  }

  public deleteEmployee(employee: EmployeesGetResponseEntry): Observable<void> {
    return this.httpClient.delete<void>(`${EmployeesApiService.EMPLOYEES_ENDPOINT}/${employee.id}`);
  }

  public getEmployeesScores(): Observable<EmployeesScoresGetResponse> {
    return this.httpClient.get<EmployeesScoresGetResponse>(EmployeesApiService.EMPLOYEES_SCORES_ENDPOINT);
  }
}
