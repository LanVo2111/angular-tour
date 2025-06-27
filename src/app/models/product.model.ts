export interface ProductItemType {
  id?: string;
  name: string;
  category: string;
  image: string;
  price: string;
  salePrice: string;
  description: string;
  inforTable: {
    carbo: number,
    protein: number,
    minerals: number,
    nutrient: string
  }
}
