export interface User {
  id?: number;
  login?: string;
}

export interface UserSchema {
  authData?: User;
}
