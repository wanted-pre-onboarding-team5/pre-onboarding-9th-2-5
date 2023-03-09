export type MockItemType = {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
};

export type ReservationItemType = MockItemType & {
  reservedAmount: number;
};
