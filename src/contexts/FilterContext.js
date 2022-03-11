import { createContext, useState } from "react";

export const FilterContext = createContext();

export default function FilterProvider({ children }) {
  const [prevFilter, setPrevFilter] = useState({
    prevName: null,
    prevPrice: null,
    prevRate: null,
    selectedRadio: null,
    prevSearch: "",
    selectedDrop: "Feature",
  });

  const [filter, setFilter] = useState({
    _limit: 16,
    _page: 1,
  });

  const [isDisplay, setIsDisplay] =useState({
    isDisplayProduct:true,
    isDisplayCart:false,

  })



  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        prevFilter,
        setPrevFilter,
        isDisplay, 
        setIsDisplay
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}


