export interface RegisterSchema {
  username: string;
  password: string;
  repeatPassword: string;
  isLoading: boolean;
  error?: string;
}
