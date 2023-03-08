import { useLayoutEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import { useTravelDispatch, useTravelState } from '@/providers';

import { Filter } from '@/components/Filter';
import { TravelItemBox } from '@/components/TravelItemBox';
import { TravelItemType } from '@/types/TravelItemType';

export const Main = () => {
  const travelData = useLoaderData() as TravelItemType[];
  const travelDispatch = useTravelDispatch();
  const { data, filteredData } = useTravelState();

  useLayoutEffect(() => {
    travelDispatch({
      type: 'init',
      payload: travelData,
    });
  }, []);

  return (
    <>
      <Filter />
      <TravelItemBox data={filteredData.length ? filteredData : data} />
    </>
  );
};
