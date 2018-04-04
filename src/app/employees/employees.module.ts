import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { SharedModule } from '../shared/shared.module';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeesOverviewComponent } from './employees-overview/employees-overview.component';
import { EmployeesScoresComponent } from './employees-scores/employees-scores.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    EmployeesOverviewComponent,
    EmployeesListComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeesScoresComponent
  ],
  entryComponents: [
    EditEmployeeComponent,
    DeleteEmployeeComponent
  ]
})
export class EmployeesModule { }
