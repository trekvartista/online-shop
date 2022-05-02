import React, { useContext, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { itemContext, userContext } from '../main';
import {authRoutes, publicRoutes} from '../routes'
import {LOGIN_ROUTE, SHOP_ROUTE, REGISTER_ROUTE} from '../utils/consts'
import {Context} from '../App'
import Login from '../pages/Login';
import Registration from '../pages/Registration';

const AppRouter = () => {
    
    const { user } = useContext(Context)

    return (
        <Routes>
            {
                user.user.isAuth && authRoutes.map( ( {path, Component} ) => 
                    <Route key={path} path={path} element={<Component />} />
                )
            }
            {
                publicRoutes.map( ( {path, Component} ) =>
                    <Route key={path} path={path} element={<Component />} />
                )
            }

            <Route path="/:somePath" element={<Navigate to={SHOP_ROUTE} replace={true}/>} />
        </Routes>
    );
};

export default AppRouter;