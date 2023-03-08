import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Divider,
  Text,
  Image,
  Tag,
  Flex,
  Spacer,
  Box,
  ButtonGroup,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

import Detail from '@/components/Detail';
import InputNumberWithButton from '@/components/public/InputNumberWithButton';

interface PhotoCardProps {
  product: Product;
  name: string;
  mainImage: string;
  description: string;
  price: number;
  spaceCategory: string;
}

const PhotoCard = ({
  product,
  name,
  mainImage,
  description,
  price,
  spaceCategory,
}: PhotoCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [count, setCount] = useState(1);

  const handleQuantity = (value: number) => {
    setCount(value);
  };

  return (
    <Card>
      <Detail
        count={count}
        isOpen={isOpen}
        product={product}
        onClose={onClose}
        handleQuantity={handleQuantity}
      />
      <CardBody onClick={onOpen}>
        <Image
          src={mainImage}
          alt={name}
          objectFit='cover'
          width={{ base: '100%' }}
          borderRadius='lg'
        />
        <Box
          display='flex'
          pt='10px'
          height='130px'
          flexDirection='column'
          alignItems='space-between'
        >
          <Heading size='md'>
            <Tag variant='solid' colorScheme='teal' mt='-0.5' mr='2' mb='1' size='lg'>
              {spaceCategory}
            </Tag>
            {name}
          </Heading>
          <Text>{description}</Text>
          <Spacer />
        </Box>
        <Flex justifyContent='space-between'>
          <Text color='blue.600' fontSize='2xl'>
            {'￦' + price.toLocaleString('ko-KR')}
          </Text>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <InputNumberWithButton count={count} handleQuantity={handleQuantity} />
          <Button width='50%' variant='solid' colorScheme='blue'>
            담기
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default PhotoCard;
