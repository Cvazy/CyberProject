export interface User {
  id?: number;
  username?: string;
  name?: string;
  surname?: string;
  patronymic?: string;
  cart?: string[];
}

export interface UserSchema {
  authData?: User;
}
