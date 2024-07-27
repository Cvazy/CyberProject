export interface CartItem {
  id: string;
  quantity: number;
}

export interface AddressItem {
  id: string | number;
  title: string;
  full_address: string;
  phone: string;
  placeStatus: string;
}

export interface User {
  id?: number;
  username?: string;
  name?: string;
  surname?: string;
  patronymic?: string;
  cart?: CartItem[];
  addresses?: AddressItem[];
}

export interface UserSchema {
  authData?: User;
  isLoading?: boolean;
  error?: string;
}
