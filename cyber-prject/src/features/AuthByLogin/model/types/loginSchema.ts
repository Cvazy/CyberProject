export interface LoginSchema {
  login: string;
  password: string;
  isLoading: boolean;
  error?: string;
}
