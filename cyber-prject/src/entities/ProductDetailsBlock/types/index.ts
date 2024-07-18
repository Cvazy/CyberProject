export interface IProductDetailsElement {
  name: string;
  values: string[];
}

export interface IProductDetailsBlock {
  title: string;
  detailsArray: IProductDetailsElement[];
}
