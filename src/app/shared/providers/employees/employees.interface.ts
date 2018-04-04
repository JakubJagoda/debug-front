export interface EmployeesGetResponseEntry {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
  email: string;
  score: number;
}

export interface EmployeeData extends EmployeesGetResponseEntry {}

export type EmployeesGetResponse = EmployeesGetResponseEntry[];

export interface EmployeesScoresGetResponseEntry {
  id: number;
  score: number;
}

export interface EmployeeScore extends EmployeesScoresGetResponseEntry {}

export type EmployeesScoresGetResponse = EmployeesScoresGetResponseEntry[];

