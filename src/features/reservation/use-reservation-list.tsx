import React from 'react';

import reservationService from './reservation-service';

function useReservationList() {
  const initialState = reservationService.getReservedList();
  const [trigger, setTrigger] = React.useState(false);
  const [reservationList, setReservationList] = React.useState(initialState);

  const refetch = () => {
    setTrigger(!trigger);
  };

  React.useEffect(() => {
    const reservedList = reservationService.getReservedList();
    setReservationList(reservedList);
  }, [trigger]);

  return { reservationList, refetch };
}

export default useReservationList;
