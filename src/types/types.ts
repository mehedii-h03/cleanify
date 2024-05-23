export type TProduct = {
  _id?: string;
  title?: string;
  price?: number;
  ratings?: number;
  reviews?: number;
  brand?: string;
  productId?: string;
  flashSale?: boolean;
  salePrice?: number;
  images?: {
    image1: string;
    image2: string;
    image3: string;
  };
  description1?: string;
  description2?: string;
  features1?: string[];
  features2?: string[];
};
