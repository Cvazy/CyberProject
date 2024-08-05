import { IProductDetailsBlock } from "entities/ProductDetailsBlock";

export interface ShortPropertiesProps {
  name: string;
  value: string;
  iconUrl: string;
}

export interface ProductDescriptionTypes {
  text: string;
  detailsArray: IProductDetailsBlock[];
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
  brand?: string;
  shortProperties?: ShortPropertiesProps[];
  imagesGallery?: string[];
  details: ProductDescriptionTypes;
}

export interface ProductType {
  productData?: IProductData;
  isLoading: boolean;
  error?: string;
  modifications?: IProductData[];
  randomProducts: IProductData[];
}
