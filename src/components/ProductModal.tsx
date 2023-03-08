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
} from '@chakra-ui/react';

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
            <Text h='140'>{description}</Text>
            <Text color='gray.600' alignSelf='end' fontWeight='bold' fontSize='lg'>
              {spaceCategory}
            </Text>
            <Flex justifyContent='space-between' alignItems='center' m='0'>
              <Text color='blue.600' fontSize='2xl'>
                {`₩${price.toLocaleString()}`}
              </Text>
              <Text color='gray.600' fontSize='lg'>
                {`잔여 : ${maximumPurchases}개`}
              </Text>
            </Flex>
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
