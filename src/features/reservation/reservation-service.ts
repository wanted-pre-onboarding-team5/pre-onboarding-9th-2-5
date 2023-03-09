import { MockItemType } from '../product-list/list-item';

class reservationService {
  static reserveItem(item: MockItemType) {
    if (this.checkIsDuplicatedItem(item.idx)) {
      return { message: 'FAIL' };
    } else {
      const reservedItem: MockItemType[] = this.getItem();
      localStorage.setItem('RESERVATION', JSON.stringify([...reservedItem, item]));
      return { message: 'SUCCESS' };
    }
  }

  static getItem(): MockItemType[] {
    return localStorage.getItem('RESERVATION')
      ? JSON.parse(localStorage.getItem('RESERVATION') as string)
      : [];
  }

  static checkIsDuplicatedItem(idx: number) {
    const reservedItem: MockItemType[] = this.getItem();
    if (reservedItem.find((item) => item.idx === idx)) return true;
    else return false;
  }
}

export default reservationService;
