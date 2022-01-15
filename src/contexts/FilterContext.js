import { createContext, useState,useEffect } from "react";

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
    isDisplayHeader:false

  })

  useEffect(() => {
    const scrollShowNav = () => {
      if (window.scrollY >= 120) {
        setIsDisplay({
          ...isDisplay,
          isDisplayHeader:true
        });
      } else {
        setIsDisplay({
          ...isDisplay,
          isDisplayHeader:false
        });
      }
    };

    window.addEventListener("scroll", scrollShowNav);

    return window.addEventListener("scroll", scrollShowNav);
  }, []);

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


