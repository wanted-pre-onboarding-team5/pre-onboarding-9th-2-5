import React from 'react';

interface FilterType {
  [key: string]: string;
  space: string;
  price: string;
}

interface FilterContextType {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

type Props = {
  children: React.ReactNode;
};

const FilterContext = React.createContext<FilterContextType>({} as FilterContextType);
export const useFilterContext = () => React.useContext(FilterContext);
export const defaultFilter: FilterType = { space: '', price: '' };

function FilterProvider({ children }: Props) {
  const [filter, setFilter] = React.useState(defaultFilter);
  return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>;
}

export default FilterProvider;
