export interface CartItem {
  id: string;
  quantity: number;
}

export interface User {
  id?: number;
  username?: string;
  name?: string;
  surname?: string;
  patronymic?: string;
  cart?: CartItem[];
}

export interface UserSchema {
  authData?: User;
}
