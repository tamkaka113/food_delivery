import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "pages/Home/Home";
import Shop from "pages/Shop/Shop";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import ScrollButton from "components/ScrollButton";
export default function RootRouter() {
 

 
  return (
    <div>
      <BrowserRouter>
         <Header/> 
      <ScrollButton/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

        
          <Route  path="/shop/:name">
            <Shop/>
          </Route>

       
        </Switch>
     
      </BrowserRouter>
    </div>
  );
}