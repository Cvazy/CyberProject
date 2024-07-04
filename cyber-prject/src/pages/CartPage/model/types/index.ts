export interface CartElementType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  sale?: number;
  state?: string;
  favorite?: boolean;
  quantity: number;
}
