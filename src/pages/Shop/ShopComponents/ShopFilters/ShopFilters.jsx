
import { useParams,useLocation, useHistory} from 'react-router-dom';

import Checkbox from 'components/Checkbox/Checkbox';

// material ui icons
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { Bread, Burger, Drinks, Pizza, Sandwich } from 'utils/shopSvgs';

import './styles.scss';

const typeOptions = [
  {
    img: Burger,
    name: 'Burgers',
    type: 'burgers',
  },
  {
    img: Bread,
    name: 'Breads',
    type: 'breads',
  },
  {
    img: Sandwich,
    name: 'Sandwiches',
    type: 'sandwiches',
  },
  {
    img: Drinks,
    name: 'Drinks',
    type: 'drinks',
  },
  {
    img: Pizza,
    name: 'Pizzas',
    type: 'pizzas',
  },
];

const priceOptions = [
  { content: 'Under $100', range: { price_lte: 100 } },
  { content: '$50 to $100', range: { price_gte: 50, price_lte: 100 } },
  { content: 'Under $50', range: { price_lte: 50 } },
  { content: 'Above $100', range: { price_gte: 100 } },
];


function ShopFilters({search}) {
 const history =useHistory()

  const handleFilter = (name) => {
    history.push(
      `/shop/${name}`
    );

  }

 
  return (
    <div className='shop-filters'>
      <h2 className='shop-filters__title'>Popular</h2>
      <ul className='shop-filters__list'>
        {typeOptions.map(({ img, name, type }) => (
          <li
            key={name}
            onClick={()=> {handleFilter(type)}}
            className={
   
                'shop-filters__item active'
              
            }>
            <img src={img} alt='Shop icons' />
            <span className='shop-filters__item-name'>{name}</span>
          </li>
        ))}
      </ul>

      <h2 className='shop-filters__title'>Price</h2>
      <form className='shop-filters__form'>
        {priceOptions.map(({ content, range }) => (
          <Checkbox
            key={content}
      
          
         
            value={content}
            content={content}
          />
        ))}
      </form>

      <h2 className='shop-filters__title'>Rate</h2>
      <div
   
        className='shop-filters__stars'>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <span>& up</span>
      </div>
      <div
        
        className='shop-filters__stars'>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <span>& up</span>
      </div>
      <div
     
        className='shop-filters__stars'>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <span>& up</span>
      </div>
    </div>
  );
}

export default ShopFilters;
