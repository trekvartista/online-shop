import {ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, ITEM_ROUTE} from './utils/consts'
import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Item from './pages/Item'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE + '/:id',
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTER_ROUTE,
        Component: Registration
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: Item
    },
]