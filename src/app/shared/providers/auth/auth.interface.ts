export enum UserType {
  REGULAR = 'regular',
  ADMIN = 'admin'
}

export interface UserData {
  id: number;
  login: string;
  type: UserType;
}
