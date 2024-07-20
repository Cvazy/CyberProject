export interface ReviewBlockTypes {
  id: number;
  userId: number;
  mark: number;
  date: string;
  text: string;
}

export interface ReviewsListData {
  reviewsData?: ReviewBlockTypes[];
  error?: string;
  isLoading: boolean;
}
