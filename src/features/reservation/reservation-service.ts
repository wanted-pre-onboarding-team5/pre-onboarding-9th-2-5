import { MockItemType } from '../product-list/list-item';

class reservationService {
  static reserveItem(item: MockItemType) {
    if (this.checkIsDuplicatedItem(item.idx)) {
      return { message: 'FAIL' };
    } else {
      const reservedList = this.getReservedList();
      localStorage.setItem('RESERVATION', JSON.stringify([...reservedList, item]));
      return { message: 'SUCCESS' };
    }
  }

  static getReservedList(): MockItemType[] {
    return localStorage.getItem('RESERVATION')
      ? JSON.parse(localStorage.getItem('RESERVATION') as string)
      : [];
  }

  static checkIsDuplicatedItem(idx: number) {
    const reservedItem = this.getReservedList();
    if (reservedItem.find((item) => item.idx === idx)) return true;
    else return false;
  }
}

export default reservationService;
