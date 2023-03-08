import { Grid } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useTravelDispatch, useTravelState } from '@/providers';

import { TravelItem } from '@/components/Travel/Item';

export const TravelItemBox = ({ travelData }) => {
  const travelDispatch = useTravelDispatch();
  const { filteredData } = useTravelState();

  useEffect(() => {
    travelDispatch({
      type: 'init',
      payload: travelData,
    });
  }, []);

  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap='3'>
        {filteredData.map((props) => (
          <TravelItem key={props.idx} {...props} />
        ))}
      </Grid>
    </>
  );
};
