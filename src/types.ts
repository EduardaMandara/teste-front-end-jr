export interface NavItem {
  label: string;
  link: string;
}

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface ProductResponse {
  success: boolean;
  products: Product[];
}
