export interface Product {
  _id: string;
  images?: string[];
  productName: string;
  productSlug: string;
  price: Number;
  discountAmount?: Number;
  sku?: string;
  brand?: string;
  quantity?: Number;
}
