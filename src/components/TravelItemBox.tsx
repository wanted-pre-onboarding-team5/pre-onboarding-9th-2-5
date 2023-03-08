import { Grid } from '@chakra-ui/react';

import { TravelItem } from '@/components/TravelItem';

export const TravelItemBox = ({ data }) => {
  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap='3'>
        {data.map((props) => (
          <TravelItem key={props.idx} {...props} />
        ))}
      </Grid>
    </>
  );
};
