import { ReservationItemType, MockItemType } from '@/types';

class reservationService {
  static reserveItem(item: MockItemType, amount: number) {
    if (this.checkIsDuplicatedItem(item.idx)) {
      return { message: 'FAIL' };
    } else {
      const reservedList = this.getReservedList();
      localStorage.setItem(
        'RESERVATION',
        JSON.stringify([...reservedList, { ...item, reservedAmount: amount }]),
      );
      return { message: 'SUCCESS' };
    }
  }

  static getReservedList(): ReservationItemType[] {
    return localStorage.getItem('RESERVATION')
      ? JSON.parse(localStorage.getItem('RESERVATION') as string)
      : [];
  }

  static checkIsDuplicatedItem(idx: number) {
    const reservedList = this.getReservedList();
    if (reservedList.find((item) => item.idx === idx)) return true;
    else return false;
  }

  static updateItem(newData: ReservationItemType) {
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
