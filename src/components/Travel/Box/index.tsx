import { Grid } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useTravelDispatch, useTravelState } from '@/providers';

import { TravelItem } from '@/components/Travel/Item';
import { TravelItemType } from '@/types/TravelItemType';

interface TravelItemBoxProps {
  travelData: TravelItemType[];
}

export const TravelItemBox = ({ travelData }: TravelItemBoxProps) => {
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
      <Grid templateColumns='repeat(4, 1fr)' gap='4'>
        {filteredData.map((props) => (
          <TravelItem key={props.idx} {...props} />
        ))}
      </Grid>
    </>
  );
};
