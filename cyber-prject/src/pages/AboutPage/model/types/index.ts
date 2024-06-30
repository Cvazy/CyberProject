export interface AboutTypes {
  title?: string;
  text: string;
}

export interface AboutArrayTypes {
  aboutList: AboutTypes[];
  isLoading: boolean;
  error?: string;
}
