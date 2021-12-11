import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

/* import {
  filterShopByOrder,
  setShopProductsView,
} from 'features/Shop/shopSlice'; */
/* import { ApiContext } from 'contexts/ApiContext'; */
/* import { PrevFilterContext } from 'contexts/PrevFilterContext'; */

// material ui icons
import SearchIcon from '@material-ui/icons/Search';
import ViewList from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './ShopHandle.scss';



const dataTypes = [
  {
    value: 'Price: Low to High',
    sort: 'price_lth',
  },
  {
    value: 'Price: High to Low',
    sort: 'price_htl',
  },
  {
    value: 'Rate: Low to High',
    sort: 'rate_lth',
  },
  {
    value: 'Rate: High to Low',
    sort: 'rate_htl',
  },
];

function ShopHandle() {
  const [inputValue, setInputValue] = useState('');
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef();
  console.log(inputValue)
  const dispatch = useDispatch();



/*   const { selectedDrop, setSelectedDrop, setPrevSearch } = handlePrevious(); */
/*   const { shopProductsView } = useSelector((state) => state.shop); */

  // close sort when user clicks outside
  useEffect(() => {
    const handleClickDrop = (e) => {
      const el = ref.current;

      if (el && el.contains(e.target)) {
        setIsDrop(!isDrop);
      } else {
        setIsDrop(false);
      }
    };

    window.addEventListener('click', handleClickDrop);

    return window.addEventListener('click', handleClickDrop);
  }, []);

  const handleSearch = (e) => {

  
  };

  const onFilterBySort = (sort, value) => {
   
  };

  const handleSetShopProductsView = (type) => {
  
  };

  return (
    <div className='shop-handle'>
      <form onSubmit={handleSearch} className='shop-handle__search'>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Search your product'
        />
        <button className='shop-handle__search-btn'>
          <SearchIcon />
        </button>
      </form>

      <div className='shop-handle__drop'>
        <div ref={ref} className='shop-handle__drop-current'>
          <span>tam</span>
          <ExpandMoreIcon />
        </div>

        <ul
          className={
            isDrop ? 'shop-handle__drop-list drop' : 'shop-handle__drop-list'
          }>
          {dataTypes.map(({ value, sort }, index) => (
            <li
              onClick={() => onFilterBySort(sort, value)}
              key={index}
              className='shop-handle__drop-item'>
              {value}
            </li>
          ))}
        </ul>
      </div>

      <div className='shop-handle__display-types'>
        <ViewList
          onClick={() => handleSetShopProductsView('list')}
          className='shop-handle__display-type active'
         
        />
        <ViewModuleIcon
          onClick={() => handleSetShopProductsView('grid')}
          className='shop-handle__display-type active'
         
        />
      </div>
    </div>
  );
}

export default ShopHandle;
