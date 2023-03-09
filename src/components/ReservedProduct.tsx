import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import { Tr, Td, Button } from '@chakra-ui/react';

interface ReservedProductProps extends Product {
  cnt: number;
  handleCountPlus: (idx: number) => void;
  handleCountMinus: (idx: number) => void;
  handleDelete: (idx: number) => void;
}

export const ReservedProduct = ({
  idx,
  name,
  spaceCategory,
  price,
  cnt,
  maximumPurchases,
  handleCountPlus,
  handleCountMinus,
  handleDelete,
}: ReservedProductProps) => {
  return (
    <Tr>
      <Td fontWeight='semibold'>{name}</Td>
      <Td fontWeight='semibold'>{spaceCategory}</Td>
      <Td fontWeight='semibold' textAlign='center'>
        <Button
          isDisabled={cnt <= 1}
          borderRadius='full'
          mr='3'
          onClick={() => handleCountMinus(idx)}
        >
          <MinusIcon />
        </Button>
        {cnt}
        <Button
          isDisabled={cnt >= maximumPurchases}
          borderRadius='full'
          ml='3'
          onClick={() => handleCountPlus(idx)}
        >
          <AddIcon />
        </Button>
      </Td>
      <Td fontWeight='semibold' textAlign='center'>
        {(price * cnt).toLocaleString()}
      </Td>
      <Td>
        <Button onClick={() => handleDelete(idx)}>
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
};
