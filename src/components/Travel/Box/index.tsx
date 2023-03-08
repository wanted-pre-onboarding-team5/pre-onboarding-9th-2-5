import { Grid } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useTravelDispatch, useTravelState } from '@/providers';

import { TravelItem } from '@/components/Travel/Item';

export const TravelItemBox = ({ travelData }) => {
  const travelDispatch = useTravelDispatch();
  const { data, filteredData, isFilterSelected } = useTravelState();

  useEffect(() => {
    travelDispatch({
      type: 'init',
      payload: travelData,
    });
  }, []);

  const getTravelData = () => {
    if (isFilterSelected || filteredData.length) {
      return filteredData;
    }
    return data;
  };

  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap='3'>
        {getTravelData().map((props) => (
          <TravelItem key={props.idx} {...props} />
        ))}
      </Grid>
    </>
  );
};
