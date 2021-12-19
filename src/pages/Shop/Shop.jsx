import React, {useEffect, useContext}from 'react'
import './styles.scss'
import ShopFilters from './ShopComponents/ShopFilters/ShopFilters'
import ShopContent from './ShopComponents/ShopContent/ShopContent'
import { Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Banner from 'components/Banner/Banner'
import { useLocation,useParams,useHistory } from 'react-router'
import { ApiContext } from 'contexts/ApiContext'
import { FilterContext } from 'contexts/FilterContext'
import queryString from 'query-string'
export default function Shop() {
  const { getProductList } = useContext(ApiContext);
  const { name } = useParams();

  const history =useHistory()
 

    // when browser loaded get url to re-render
  window.addEventListener('load', () => {
    const params = history.location.search;
  
    if (params) {
      const paramsObj = JSON.parse(
        '{"' +
          decodeURI(
            params.substr(1).replace(/&/g, '","').replace(/=/g, '":"')
          ) +
          '"}'
      );
   
      getProductList(name, paramsObj);
    } else {
      getProductList(name);
    }
  }); 


    return (
        <div>
           <section className='shop'>
             <Banner/>
      <Container>
        <div className='shop__container'>
          <ShopFilters />
          <ShopContent/>
        </div>
      </Container>
    </section>

        </div>
    )
}
