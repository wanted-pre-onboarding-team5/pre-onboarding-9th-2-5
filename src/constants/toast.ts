const TOAST_CART_OPTION = Object.freeze({
  duration: 2000,
  isClosable: true,
  position: 'top-right',
});

export const TOAST_CART_INFO_OPTION = Object.freeze({
  ...TOAST_CART_OPTION,
  title: '이미 장바구니에 있는 상품이에요.',
  description: '장바구니를 확인해 주세요.',
  status: 'info',
});

export const getToastCartSuccessOption = (name: string, quantity: number) => {
  return {
    ...TOAST_CART_OPTION,
    title: '장바구니에 담기 성공!',
    description: `[${name}] 상품이 ${quantity}개 담겼어요!`,
    status: 'success',
  };
};
