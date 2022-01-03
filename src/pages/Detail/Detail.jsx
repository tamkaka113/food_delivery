import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import shopApi from 'apis/shopApi';

// material ui core
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import Banner from 'components/Banner/Banner';
import DetailImage from './components/DetailImage/DetailImage';
import DetailInfo from './components/DetailInfo/DetailInfo';
import DetailTab from './components/DetailTab/DetailTab';
import './styles.scss';

export default function Detail() {
  const { name, id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const data = await shopApi.getAll(name, { id: id });

      setSelectedProduct(data[0]);
    };

    getProducts();
  }, [name, id]);

  return (
    <div className='detail'>
    <Banner />
      <Container>
        <section className='detail__container'>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <DetailImage product={selectedProduct} />
            </Grid>
            <Grid item xs={12} md={6}>
              <DetailInfo product={selectedProduct} />
            </Grid>
          </Grid>
        </section>
        <DetailTab/>
      </Container> 
    </div>
  );
}


