import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shopApi from "apis/shopApi";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Banner from "components/Banner/Banner";
import DetailImage from "./components/DetailImage/DetailImage";
import DetailTab from "./components/DetailTab/DetailTab";
import DetailContent from "./components/DetailInfo/DetailContent";
import "./styles.scss";
import DetailProducts from "./DetailProducts/DetailProducts";

export default function Detail() {
  const { name, id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      const data = await shopApi.getAll(name, {id: id });
         if(data) {
           
           setSelectedProduct(data[0]);
         }
    };

    getProducts();
  }, [name, id]);

  return (
    <div className="detail">
      <Banner />
      <Container>
        <section className="detail__container">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <DetailImage selectedProduct={selectedProduct} />
            </Grid>
            <Grid item xs={12} md={6}>
              <DetailContent selectedProduct={selectedProduct} />
            </Grid>
          </Grid>
        </section>
        <DetailTab />
        <DetailProducts selectedProduct={selectedProduct} />
      </Container>
    </div>
  );
}
