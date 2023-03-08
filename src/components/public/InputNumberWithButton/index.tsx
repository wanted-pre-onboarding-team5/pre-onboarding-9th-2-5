import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';

const InputNumberWithButton = ({ handleQuantity }: { handleQuantity: (value: number) => void }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    precision: 0,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  handleQuantity(Number(input.value));

  return (
    <HStack maxW='230px'>
      <Button {...inc}>+</Button>
      <Input textAlign='center' {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
};

export default InputNumberWithButton;