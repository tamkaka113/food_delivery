import React from 'react'
import './styles.scss'
import ShopFilters from './ShopComponents/ShopFilters/ShopFilters'
import ShopContent from './ShopComponents/ShopContent/ShopContent'
import { Container } from '@material-ui/core'
import Banner from 'components/Banner/Banner'

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
