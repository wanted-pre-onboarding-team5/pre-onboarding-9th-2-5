import { Table, Thead, Tbody, Tfoot, Tr, Th, TableContainer, Heading, Td } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { RESERVE_LIST_KEY } from '@/constants';

import { ReservedProduct } from '@/components/ReservedProduct';

export const CartPage = () => {
  const [reservedProducts, setReservedProducts] = useState<(Product & { cnt: number })[]>([]);

  useEffect(() => {
    const reserveIdxs = localStorage.getItem(RESERVE_LIST_KEY)?.trim().split(' ');
    const fetchData = async () => {
      const response = await fetch('src/mocks/data.json').then((response) => response.json());
      setReservedProducts(
        response
          .filter((product: Product) => reserveIdxs?.includes(product.idx + ''))
          .map((product: Product) => ({ ...product, cnt: 1 })),
      );
    };

    fetchData();
  }, []);

  const handleCountPlus = (idx: number) => {
    setReservedProducts(
      reservedProducts.map((item) => (item.idx === idx ? { ...item, cnt: item.cnt + 1 } : item)),
    );
  };

  const handleCountMinus = (idx: number) => {
    setReservedProducts(
      reservedProducts.map((item) => (item.idx === idx ? { ...item, cnt: item.cnt - 1 } : item)),
    );
  };

  const handleDelete = (idx: number) => {
    const reserveIdxs = localStorage.getItem(RESERVE_LIST_KEY)?.trim().split(' ');
    localStorage.setItem(
      RESERVE_LIST_KEY,
      reserveIdxs?.filter((key) => +key !== idx).join(' ') || '',
    );
    setReservedProducts(reservedProducts.filter((product) => product.idx !== idx));
  };

  const totalPrice = (reservedProducts: (Product & { cnt: number })[]) => {
    return reservedProducts.reduce((acc, cur) => acc + cur.price * cur.cnt, 0);
  };

  return (
    <>
      <Heading mt='50px' ml='20px'>
        장바구니
      </Heading>
      <TableContainer mt='20px' border='1px' borderRadius='xl' borderColor='gray.200'>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th fontSize='md'>상품</Th>
              <Th fontSize='md'>지역</Th>
              <Th fontSize='md' textAlign='center'>
                수량
              </Th>
              <Th fontSize='md' w='140px' textAlign='center'>
                금액
              </Th>
              <Th w='1'></Th>
            </Tr>
          </Thead>
          <Tbody>
            {reservedProducts ? (
              reservedProducts?.map((reservedProduct: Product & { cnt: number }) => (
                <ReservedProduct
                  key={reservedProduct.idx}
                  {...reservedProduct}
                  handleCountPlus={handleCountPlus}
                  handleCountMinus={handleCountMinus}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <Tr>
                <Td textColor='gray.400' textAlign='center' colSpan={5}>
                  장바구니가 비어있습니다.
                </Td>
              </Tr>
            )}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th isNumeric colSpan={3} fontSize='md'>
                합계
              </Th>
              <Th fontSize='md' textAlign='center'>
                {totalPrice(reservedProducts).toLocaleString()}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};
