 import { lazy } from "react";

import { PATH_NAMES } from "constants/routes";

const Home = lazy(() => import('../pages/Home/Home'));

const Shop = lazy(() => import('../pages/Shop/Shop'));


const routesConfig = [

  {
    exact: true,
    path: PATH_NAMES.HOME,
    component: Home,
  },

  {
    exact: true,
    path: PATH_NAMES.SHOP,
    component: Shop,
  },

];

export default routesConfig;
 