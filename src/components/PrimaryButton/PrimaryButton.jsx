import React, { useContext,useEffect } from 'react';
import { useDispatch } from 'react-redux';
// material ui core
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import { ApiContext } from 'contexts/ApiContext';
import  {FilterContext} from 'contexts/FilterContext'
import queryString from'query-string'
export default function PrimaryButton(props) {
  const {children} = props
  const {getProductList} =useContext(ApiContext)
  const {filter, setFilter} = useContext(FilterContext)
  const history =useHistory()
const handleClick =() => {
  setFilter({
    _limit:16,
    _page:1
  })

  const params = queryString.stringify(filter)

  
  getProductList('best-foods',filter)
history.push(`shop/${params}?_limit=16&_page=1`) 

}

/* useEffect(() => {
 getProductList('our-foods',filter)
}, [filter]) */
  return (


    <button  className='primary-btn' onClick={()=>handleClick()}>
   {children}
    </button>
  );
}


