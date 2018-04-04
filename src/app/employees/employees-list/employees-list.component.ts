import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TakeUntilDestroy } from 'ng-rxjs-take-until-destroy';
import { Observable } from 'rxjs/Observable';

import { UserType } from '../../shared/providers/auth/auth.interface';
import { AuthService } from '../../shared/providers/auth/auth.service';
import { EmployeeData, EmployeesGetResponseEntry } from '../../shared/providers/employees/employees.interface';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import {
  EMPLOYEES_LIST_COLUMNS_ADMIN,
  EMPLOYEES_LIST_COLUMNS_REGULAR,
  EmployeesListColumnType
} from './employees-list.interface';

@Component({
  selector: 'dbg-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  @Input() employees: EmployeeData[];
  @Output() employeeUpdated: EventEmitter<EmployeeData> = new EventEmitter();
  @Output() employeeDeleted: EventEmitter<EmployeeData> = new EventEmitter();
  public columnsToDisplay: EmployeesListColumnType[] = EMPLOYEES_LIST_COLUMNS_REGULAR;

  constructor(private dialog: MatDialog,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getUserType().subscribe((userType) => {
      this.handleUserTypeChanged(userType);
    });
  }

  private handleUserTypeChanged(userType) {
    switch (userType) {
      case UserType.ADMIN:
        this.columnsToDisplay = EMPLOYEES_LIST_COLUMNS_ADMIN;
        break;

      case UserType.REGULAR:
      default:
        this.columnsToDisplay = EMPLOYEES_LIST_COLUMNS_REGULAR;
        break;
    }
  }

  public editEmployee(employee: EmployeesGetResponseEntry) {
    this.dialog.open(EditEmployeeComponent, {
      width: '580px',
      data: {
        employee
      }
    }).afterClosed().subscribe(({employee}) => {
      if (employee) {
        this.employeeUpdated.next(employee);
      }
    });
  }

  public deleteEmployee(employee: EmployeesGetResponseEntry) {
    this.dialog.open(DeleteEmployeeComponent, {
      width: '580px',
      data: {
        employee: {...employee}
      }
    }).afterClosed().subscribe((shouldDelete) => {
      if (shouldDelete) {
        this.employeeDeleted.next(employee);
      }
    });
  }

  @TakeUntilDestroy
  private getUserType(): Observable<UserType> {
    return this.authService.getUserData()
      .filter((userData) => userData !== null)
      .map((userData) => userData.type);
  }
}
