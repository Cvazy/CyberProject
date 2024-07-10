export interface ShortPropertiesProps {
  name: string;
  value: string;
  iconUrl: string;
}

export interface IProductData {
  id: number;
  name: string;
  imageUrl?: string;
  price: number;
  sale?: number;
  state?: string;
  favorite?: boolean;
  deviceFamily?: string;
  color: string;
  modification?: string;
  shortProperties?: ShortPropertiesProps[];
  imagesGallery?: string[];
}

export interface ProductType {
  productData?: IProductData;
  isLoading: boolean;
  error?: string;
}
