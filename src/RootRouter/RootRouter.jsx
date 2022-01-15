import React, { Suspense } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "pages/Home/Home";
import Shop from "pages/Shop/Shop";
import Detail from "pages/Detail/Detail";

export default function RootRouter() {

 
  return (
    <div>
    <Suspense>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>

        
          <Route  exact path="/shop/:name">
            <Shop/>
          </Route>
          <Route exact path="/shop/:name/:id">
            <Detail/>
          </Route>

       
        </Switch>
     
    </Suspense>
       
     
    </div>
  );
}