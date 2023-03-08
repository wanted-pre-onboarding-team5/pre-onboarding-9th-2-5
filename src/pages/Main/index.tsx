import { Grid } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';

import { TravelItem } from '@/components/TravelItem';
import { TravelItemType } from '@/types/TravelItemType';

export const Main = () => {
  const travelData = useLoaderData() as TravelItemType[];

  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap='3'>
        {travelData.map((props) => (
          <TravelItem key={props.idx} {...props} />
        ))}
      </Grid>
    </>
  );
};
