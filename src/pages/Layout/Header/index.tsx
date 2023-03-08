import { ButtonGroup, Button, Flex, Spacer, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants/path';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (pathDirection: string) => {
    navigate(pathDirection);
  };

  return (
    <Flex maxWidth='1300px' width='100vw' alignItems='center' gap='2' p='2'>
      <Button variant='ghost' onClick={() => handleClick(PATH_ROUTE.main)}>
        <Heading size='lg'>Wanted Pre-onboarding Team5</Heading>
      </Button>
      <Spacer />
      <ButtonGroup gap='2' pt='1' pr='2'>
        <Button colorScheme='blue' onClick={() => handleClick(PATH_ROUTE.main)}>
          HOME
        </Button>
        <Button colorScheme='blue' onClick={() => handleClick(PATH_ROUTE.reservations)}>
          장바구니
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
