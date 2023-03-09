import {
  Box,
  Badge,
  Image,
  Text,
  Modal,
  ModalFooter,
  Button,
  ModalContent,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onReservationClick: () => void;
}

export const ProductModal = ({
  isOpen,
  onClose,
  product,
  onReservationClick,
}: ProductModalProps) => {
  const {
    idx,
    name,
    mainImage,
    description,
    spaceCategory,
    price,
    maximumPurchases,
    registrationDate,
  } = product;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <Box maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Text as='i' fontSize='xl'>
            {idx}
          </Text>
          <Image src={mainImage} alt={mainImage} boxSize='600px' />

          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                {spaceCategory}
              </Badge>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                최대 구매 개수 : {maximumPurchases}
              </Box>
            </Box>

            <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
              {name}
            </Box>

            <Box>{`₩ ${price.toLocaleString()}`}</Box>

            <Box display='flex' mt='2' alignItems='center'>
              <VStack spacing={4} align='stretch'>
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {description}
                </Box>
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {registrationDate}
                </Box>
              </VStack>
            </Box>
          </Box>
        </Box>
        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            colorScheme='blue'
            onClick={() => {
              onReservationClick();
              onClose();
            }}
          >
            예약
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
