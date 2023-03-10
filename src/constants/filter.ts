export interface Filter {
  name: string;
  idx: number | string;
}

export const FILTER_PRICE: ReadonlyArray<Filter> = [
  {
    name: '~₩10,000',
    idx: 0,
  },
  {
    name: '₩10,000~₩30,000',
    idx: 1,
  },
  {
    name: '₩30,000~',
    idx: 2,
  },
] as const;

export const FILTER_PRICE_RANGE = [
  {
    min: 0,
    max: 10000,
  },
  {
    min: 10000,
    max: 30000,
  },
  {
    min: 30000,
    max: Infinity,
  },
] as const;

export const FILTER_SPACE: ReadonlyArray<Filter> = [
  {
    name: '강원',
    idx: '강원',
  },
  {
    name: '서울',
    idx: '서울',
  },
  {
    name: '부산',
    idx: '부산',
  },
  {
    name: '대구',
    idx: '대구',
  },
  {
    name: '제주',
    idx: '제주',
  },
] as const;
