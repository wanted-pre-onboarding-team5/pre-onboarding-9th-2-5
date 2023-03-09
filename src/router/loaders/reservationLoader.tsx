export const reservationLoader = () => {
  return JSON.parse(localStorage.getItem('reserv_item_info') || '[]');
};
