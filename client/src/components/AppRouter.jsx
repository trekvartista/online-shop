import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { itemContext, userContext } from '../main';
import {authRoutes, publicRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/consts'
import {Context} from '../main'

const AppRouter = () => {

    
    const user = useContext(Context)
    console.log(user)

    return (
        <Routes>
            {
                user.isAuth && authRoutes.map( ( {path, Component} ) => 
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