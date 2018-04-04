import { Route } from '@angular/router';

import { EmployeesOverviewComponent } from './employees/employees-overview/employees-overview.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/providers/guards/auth-guard.service';

export const AppRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'employees',
    component: EmployeesOverviewComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
