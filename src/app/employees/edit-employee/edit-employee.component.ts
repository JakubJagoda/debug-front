import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { EmployeeData } from '../../shared/providers/employees/employees.interface';

@Component({
  selector: 'dbg-edit-worker',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {

  constructor(private dialogRef: MatDialogRef<EditEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {employee: EmployeeData}) { }

}
