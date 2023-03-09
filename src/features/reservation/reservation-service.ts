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
    const reservedList = this.getReservedList();
    if (reservedList.find((item) => item.idx === idx)) return true;
    else return false;
  }

  static updateItem(newData: MockItemType) {
    const reservedList = this.getReservedList();
    const newList = [...reservedList];
    const targetIdx = reservedList.findIndex((item) => item.idx === newData.idx);
    newList.splice(targetIdx, 1, newData);
    localStorage.setItem('RESERVATION', JSON.stringify([...newList]));
  }

  static deleteItem(itemIdx: number) {
    const reservedList = this.getReservedList();
    const newList = reservedList.filter((item) => item.idx !== itemIdx);
    localStorage.setItem('RESERVATION', JSON.stringify([...newList]));
  }
}

export default reservationService;
