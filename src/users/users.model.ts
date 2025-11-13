export default interface IUser {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
  SUPER = 'super',
}
