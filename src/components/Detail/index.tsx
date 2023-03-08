import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Box,
  Image,
  Flex,
  Heading,
  Tag,
  ButtonGroup,
} from '@chakra-ui/react';

import InputNumberWithButton from '../public/InputNumberWithButton';

const Detail = ({
  count,
  isOpen,
  onClose,
  product,
  handleQuantity,
}: {
  count: number;
  isOpen: boolean;
  product?: Product;
  onClose: () => void;
  handleQuantity: (value: number) => void;
}) => {
  return (
    <Modal blockScrollOnMount={false} size='3xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>상품 정보</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex width='100%' direction={{ base: 'column', sm: 'row' }} overflow='hidden'>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '500px' }}
              src={product?.mainImage}
              alt={product?.name}
              borderRadius='lg'
            />
            <Flex width='100%' direction={{ base: 'column' }} justifyContent='space-between' pl='5'>
              <Box>
                <Heading display='flex' alignItems='center' size='md'>
                  <Tag mr='2' size='lg' variant='solid' colorScheme='teal'>
                    {product?.spaceCategory}
                  </Tag>
                  {product?.name}
                </Heading>
                <Text py='2'>{product?.description}</Text>
              </Box>
              <Box>
                <Flex justifyContent='flex-end'>
                  <Text fontWeight='500' color='blue.600' fontSize='2xl'>
                    {'￦' + product?.price.toLocaleString('ko-KR')}
                  </Text>
                </Flex>
                <Text pt='2px' textAlign='right'>
                  {'잔여수: ' + product?.maximumPurchases + '개'}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup spacing='2'>
            <InputNumberWithButton count={count} handleQuantity={handleQuantity} />
            <Button variant='solid' colorScheme='blue'>
              담기
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Detail;
