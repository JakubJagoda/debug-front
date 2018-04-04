export enum EmployeesListColumnType {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  LOGIN = 'login',
  EMAIL = 'email',
  ACTIONS = 'actions'
}

export const EMPLOYEES_LIST_COLUMNS_REGULAR = [
  EmployeesListColumnType.FIRST_NAME,
  EmployeesListColumnType.LAST_NAME,
  EmployeesListColumnType.LOGIN,
  EmployeesListColumnType.EMAIL
];

export const EMPLOYEES_LIST_COLUMNS_ADMIN = [
  EmployeesListColumnType.FIRST_NAME,
  EmployeesListColumnType.LAST_NAME,
  EmployeesListColumnType.LOGIN,
  EmployeesListColumnType.EMAIL,
  EmployeesListColumnType.ACTIONS
];
