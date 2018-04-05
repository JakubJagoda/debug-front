import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { EmployeeData, EmployeeScore } from '../../shared/providers/employees/employees.interface';

@Component({
  selector: 'dbg-employees-scores',
  templateUrl: './employees-scores.component.html',
  styleUrls: ['./employees-scores.component.scss']
})
export class EmployeesScoresComponent implements OnChanges, OnInit {
  @Input() employeesScores: EmployeeScore[];
  @Input() employees: EmployeeData[];
  public SWIPER_CONFIG: SwiperConfigInterface = {
    navigation: true,
    pagination: true
  };
  private sortedEmployees: EmployeeData[] = [];
  private cachedScores: Map<number, number> = new Map();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.employees && this.employeesScores) {
      this.sortedEmployees = this.orderEmployeesByScore(this.employees);
    }
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

    if (this.cachedScores.has(employee.id)) {
      return this.cachedScores.get(employee.id);
    } else {
      const score = this.employeesScores.find(e => e.id === employee.id).score;

      this.cachedScores.set(employee.id, score);
      return score;
    }
  }

}
