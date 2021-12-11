import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
// material ui core
import { Button } from '@material-ui/core';

import './styles.scss';

export default function PrimaryButton(props) {
  const {children} = props
 

  return (
    <button  className='primary-btn' >
   {children}
    </button>
  );
}


