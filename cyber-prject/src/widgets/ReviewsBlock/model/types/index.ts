export interface ReviewBlockTypes {
  id: number | string;
  username: string;
  mark: number;
  date: string;
  text: string;
}

export interface ReviewsListData {
  reviewsData?: ReviewBlockTypes[];
  error?: string;
  isLoading: boolean;
}
