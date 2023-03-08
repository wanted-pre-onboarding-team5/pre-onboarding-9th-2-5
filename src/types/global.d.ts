export {};

declare global {
  interface Product {
    idx: number;
    name: string;
    description: string;
    mainImage: string;
    price: number;
    registrationDate: string;
    maximumPurchases: number;
    spaceCategory: string;
  }
}
