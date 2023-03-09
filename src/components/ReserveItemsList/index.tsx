import {
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Badge,
  Image,
  Flex,
  Button,
  ButtonGroup,
  CardFooter,
  CardHeader,
} from '@chakra-ui/react';
import { useState } from 'react';

import { mockDataType } from '@/types/type';
import { changeCategory } from '@/utils/changeCategory';

interface Props {
  reserveItem: mockDataType;
}

export const ReserveItemsList = ({ reserveItem, deleteHandler }: Props) => {
  const { description, name, mainImage, price, maximumPurchases, spaceCategory, idx } = reserveItem;
  const [purchaseCount, setPurchaseCount] = useState<number>(1);

  const countHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target;
    if (value === 'plus') {
      setPurchaseCount((prev) => prev + 1);
    } else if (value === 'minus') {
      setPurchaseCount((prev) => prev - 1);
    }
  };

  return (
    <Card mt={5}>
      <CardHeader>
        <Box pl={10} textAlign='end'>
          <Text fontSize='xs'>최대구매수량</Text>
          <Text fontSize='4xl' fontWeight={700} color='red.500'>
            {maximumPurchases}
          </Text>
        </Box>
      </CardHeader>
      <CardBody p={0}>
        <Flex gap={10} align='center' justify='center'>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            borderRadius='2xl'
            src={mainImage}
            alt={name}
          />
          <Stack
            divider={<StackDivider />}
            spacing='10'
            display='flex'
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Flex direction='column' maxW='200px'>
              <Heading size='xs'>
                <Badge
                  variant='solid'
                  colorScheme={changeCategory({ spaceCategory })}
                  fontSize='1em'
                  mr={4}
                >
                  {spaceCategory}
                </Badge>
                {name}
              </Heading>
              <Text fontSize='2xl'>{(price * purchaseCount).toLocaleString()} 원</Text>
              <Text pt='2' fontSize='sm'>
                {description}
              </Text>
            </Flex>

            <Flex direction='column' alignItems='center' gap={1}>
              <Text>구매수량</Text>
              <Text fontSize='sm' color='GrayText'>
                개당 {price.toLocaleString()} 원
              </Text>
              <Text fontSize='2xl'>{purchaseCount} 개</Text>
              <ButtonGroup>
                {purchaseCount === 0 ? (
                  <Button isDisabled bg='red.400' color='whiteAlpha.800'>
                    빼기
                  </Button>
                ) : (
                  <Button
                    colorScheme='whiteAlpha'
                    color='black'
                    variant='outline'
                    onClick={countHandler}
                    value='minus'
                  >
                    빼기
                  </Button>
                )}
                {purchaseCount === maximumPurchases ? (
                  <Button isDisabled bg='red.400' color='whiteAlpha.800'>
                    최대수량
                  </Button>
                ) : (
                  <Button
                    color='white'
                    bg='black'
                    variant='solid'
                    onClick={countHandler}
                    value='plus'
                    _hover={{ background: 'black' }}
                  >
                    더하기
                  </Button>
                )}
              </ButtonGroup>
            </Flex>
          </Stack>
        </Flex>
      </CardBody>
      <CardFooter display='flex' gap='10' justifyContent='flex-end'>
        <Button mr='20' colorScheme='red' onClick={() => deleteHandler(idx)}>
          삭제하기
        </Button>
      </CardFooter>
    </Card>
  );
};
