import React, {useEffect}from 'react'
import './styles.scss'
import ShopFilters from './ShopComponents/ShopFilters/ShopFilters'
import ShopContent from './ShopComponents/ShopContent/ShopContent'
import { Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Banner from 'components/Banner/Banner'
import { useLocation,useParams } from 'react-router'
import {GetProductListAction, getProductListSuccessAction} from 'store/action/ProductAction'
export default function Shop() {

  const {name} =useParams()
  const dispatch =useDispatch()

 const params = {
   _page: 3,
   _limit: 10
 }



useEffect(() => {
  GetProductListAction(name,params).then(data => {
    if(data) {
     dispatch(getProductListSuccessAction(data))
    }
  })
   
  

}, [name])


    return (
        <div>
           <section className='shop'>
             <Banner/>
      <Container>
        <div className='shop__container'>
          <ShopFilters />
          <ShopContent />
        </div>
      </Container>
    </section>

        </div>
    )
}
