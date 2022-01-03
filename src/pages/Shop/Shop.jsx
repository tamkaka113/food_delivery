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
