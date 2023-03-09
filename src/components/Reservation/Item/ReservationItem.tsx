import { Image, Heading, Text, Button, Tr, Td, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { QuantityButton } from '@/components/common/QuantityButton';

export const ReservationItem = (props) => {
  const { name, mainImage, description, price } = props;
  const [quantity, setQuantity] = useState(1);

  const removeItem = () => {
    // TODO: Remove Items
  };

  return (
    <Tr>
      <Td>
        <Flex>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '100px' }}
            src={mainImage}
            alt={name}
            mr='5'
          />
          <Flex flexDirection='column' justifyContent='space-between'>
            <Heading size='md'>{name}</Heading>
            <Text py='2'>{description}</Text>
            <Flex>
              <Button variant='link' size='xs' onClick={removeItem}>
                Remove
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      </Td>
      <Td>₩{price.toLocaleString()}</Td>
      <Td fontWeight='bold'>₩{(quantity * price).toLocaleString()}</Td>
    </Tr>
  );
};
