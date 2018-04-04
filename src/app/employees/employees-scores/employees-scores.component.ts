import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { EmployeeData, EmployeeScore } from '../../shared/providers/employees/employees.interface';

@Component({
  selector: 'dbg-employees-scores',
  templateUrl: './employees-scores.component.html',
  styleUrls: ['./employees-scores.component.scss']
})
export class EmployeesScoresComponent implements OnInit {
  @Input() employeesScores: EmployeeScore[];
  @Input() employees: EmployeeData[];
  public SWIPER_CONFIG: SwiperConfigInterface = {
    navigation: true,
    pagination: true
  };
  constructor() { }

  ngOnInit() {
  }

  public orderEmployeesByScore(employees: EmployeeData[]): EmployeeData[] {
    if (!employees) {
      return [];
    }

    return employees.slice()
      .sort((a, b) => this.getEmployeeScore(b) - this.getEmployeeScore(a));
  }

  public getEmployeeScore(employee: EmployeeData): number {
    if (!this.employeesScores) {
      return 0;
    }

    return this.employeesScores.find(e => e.id === employee.id).score;
  }

}
