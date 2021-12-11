import React from 'react'
import Banners from './HomeComponents/HomeBanners/Banners'
import HomeDeliveryAnimate from './HomeComponents/HomeDeliveryAnimate/HomeDeliveryAnimate'
import HomeFigure from './HomeComponents/HomeFigure/HomeFigure'
import HomeIngredients from './HomeComponents/HomeIngredients/HomeIngredients'
import HomeOrder from './HomeComponents/HomeOrder/HomeOrder'
import HomeProducts from './HomeComponents/HomeProducts/HomeProducts'
import HomeReviews from './HomeComponents/HomeReviews/HomeReviews'
export default function Home() {
    return (
        <div>
            <Banners/>
            <HomeDeliveryAnimate/>
            <HomeIngredients/>
            <HomeOrder/>
            <HomeProducts/>
            <HomeFigure/>
            <HomeReviews/>
        </div>
    )
}
