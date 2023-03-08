import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import { useTravelDispatch, useTravelState } from '@/providers';

import { TravelItemBox } from '@/components/Travel/Box';
import { Filter } from '@/components/Travel/Filter';
import { TravelItemType } from '@/types/TravelItemType';

export const Main = () => {
  const travelData = useLoaderData() as TravelItemType[];
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
      <Filter />
      <TravelItemBox data={getTravelData()} />
    </>
  );
};
