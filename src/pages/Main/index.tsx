import { useLoaderData } from 'react-router-dom';

import { TravelProvider } from '@/providers';

import { TravelItemBox } from '@/components/Travel/Box';
import { Filter } from '@/components/Travel/Filter';
import { TravelItemType } from '@/types/TravelItemType';

export const Main = () => {
  const travelData = useLoaderData() as TravelItemType[];

  return (
    <TravelProvider>
      <Filter />
      <TravelItemBox travelData={travelData} />
    </TravelProvider>
  );
};
