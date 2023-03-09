import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

export const Reservations = () => {
  const getLocalStorageItem = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };

  const RESERVATIONS_KEY = 'reservations';

  const reservations = getLocalStorageItem(RESERVATIONS_KEY) || [];

  const [updateReservations] = useState(reservations);
  const [SetDeleteReservations] = useState(reservations);
  const [countReservations] = useState(0);

  const onProductRemove = (product) => {
    SetDeleteReservations(() => {
      const productsIndex = updateReservations.filter((item) => item.idx !== product.idx);
      return SetDeleteReservations(productsIndex);
    });
  };

  return (
    <Box>
      <Box>
        <h1>Reservations List</h1>
      </Box>
      <Box>
        {reservations.length === 0 && (
          <span className='empty-text'>Your basket is currently empty</span>
        )}
        {reservations.map((product) => (
          <Box key={product.id}>
            <img src={product.image} alt={product.name} />
            <Box>
              <h3>{product.name}</h3>
              <span className='product-price'>{product.price * countReservations}$</span>
              <Button>+</Button>
              <Button>{countReservations}</Button>
              <Button>-</Button>
            </Box>
            <select className='count' value={product.count}>
              {[...Array(10).keys()].map((number) => {
                const num = number + 1;
                return (
                  <option value={num} key={num}>
                    {num}
                  </option>
                );
              })}
            </select>
            <Button className='btn remove-btn' onClick={() => onProductRemove(product)}>
              삭제
            </Button>
          </Box>
        ))}
        {reservations.length > 0 && <Button className='btn checkout-btn'>결제</Button>}
      </Box>
    </Box>
  );
};
