import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Image,
  Stack,
  Text,
  Heading,
  Flex,
  Button,
  useToast,
} from '@chakra-ui/react';

import { RESERVE_LIST_KEY } from '@/constants';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const {
    idx,
    name,
    mainImage,
    description,
    price,
    spaceCategory,
    maximumPurchases,
    registrationDate,
  } = product;

  const toast = useToast();

  const handleReserve = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const reserveList = localStorage.getItem(RESERVE_LIST_KEY)?.split(' ') || [];
    if (reserveList.includes(idx + '')) {
      toast({
        title: '이미 예약하신 상품입니다.',
        status: 'error',
        duration: 2000,
      });
      return;
    }
    toast({
      title: '예약이 완료되었습니다.',
      status: 'info',
      duration: 2000,
    });
    localStorage.setItem(RESERVE_LIST_KEY, `${reserveList.join(' ')} ${idx}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{`No.${idx}`}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display='flex' flex='row' gap='6'>
          <Image src={mainImage} alt='' borderRadius='lg' h='300' />
          <Stack w='full' justifyContent='space-between'>
            <Heading fontSize='18px'>{name}</Heading>
            <Text h='142'>{description}</Text>
            <Text color='gray.600' alignSelf='end' fontWeight='bold' fontSize='lg'>
              {spaceCategory}
            </Text>
            <Flex justifyContent='space-between' alignItems='center' m='0'>
              <Text color='blue.600' fontSize='2xl'>
                {`₩${price.toLocaleString()}`}
              </Text>
              <Text color='gray.600' fontSize='lg'>
                {`최대 구매 수량 : ${maximumPurchases}개`}
              </Text>
            </Flex>
            <Button colorScheme='blue' onClick={handleReserve}>
              예약
            </Button>
            <Text color='gray.500' fontSize='sm' alignSelf='end'>
              {registrationDate.slice(0, registrationDate.length - 3)}
            </Text>
          </Stack>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};
