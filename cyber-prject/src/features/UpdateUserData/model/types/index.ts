export interface ProfileSchema {
  id?: number;
  username?: string;
  name?: string;
  surname?: string;
  patronymic?: string;
}

export interface UpdateUserDataSchema {
  profileData: ProfileSchema;
  formData: ProfileSchema;
  isLoading: boolean;
  error?: string;
  message?: string;
}
