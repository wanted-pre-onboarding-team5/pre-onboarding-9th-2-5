import { Heading, Button, Flex } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';

import { useMovePage } from '@/hooks/useMovePage';
interface ErrorType {
  statusText?: string;
  message?: string;
}

export const Error = () => {
  const error = useRouteError() as ErrorType;
  console.error(error);

  const [goMain] = useMovePage([PATH_ROUTE.main]);

  const handleButtonClick = () => {
    goMain();
  };

  return (
    <Flex flexDirection='column' alignItems='center' gap='5' p='100'>
      <Heading>에러가 발생했어요!</Heading>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={handleButtonClick}>메인 페이지로 가기</Button>
    </Flex>
  );
};
