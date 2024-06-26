export interface User {
  id?: number;
  username?: string;
  name?: string;
  surname?: string;
  patronymic?: string;
  birthday?: string;
}

export interface UserSchema {
  authData?: User;
}
