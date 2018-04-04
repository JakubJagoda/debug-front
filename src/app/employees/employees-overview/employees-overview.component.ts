import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { EmployeesApiService } from '../../shared/providers/api/employees-api';
import {
  EmployeeData,
  EmployeesGetResponse,
  EmployeesScoresGetResponse
} from '../../shared/providers/employees/employees.interface';

@Component({
  selector: 'dbg-employees-overview',
  templateUrl: './employees-overview.component.html',
  styleUrls: ['./employees-overview.component.scss']
})
export class EmployeesOverviewComponent implements OnInit {
  public employees: Subject<EmployeesGetResponse> = new Subject();
  public employeesScores: Subject<EmployeesScoresGetResponse> = new Subject();

  constructor(private employeesApi: EmployeesApiService) { }

  ngOnInit() {
    this.fetchEmployees();
    this.fetchEmployeesScores();
  }

  public deleteEmployee(employee: EmployeeData): void {
    this.employeesApi.deleteEmployee(employee).subscribe(() => {
      this.fetchEmployees();
    });
  }

  public updateEmployee(employee: EmployeeData): void {
    this.employeesApi.updateEmployee(employee).subscribe(() => {
      this.fetchEmployees();
    });
  }

  private fetchEmployees(): void {
    this.employeesApi.getEmployeesList().subscribe((employees: EmployeesGetResponse) => {
      this.employees.next(employees);
    });
  }

  private fetchEmployeesScores(): void {
    this.employeesApi.getEmployeesScores().subscribe((scores: EmployeesScoresGetResponse) => {
      this.employeesScores.next(scores);
    });
  }
}
