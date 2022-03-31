
import { CircularProgress } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { authCheck } from './api/userAPI';
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar';
import { Context } from './main';

const App = () => {
    
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            authCheck().then( data => {
                user.isAuth = true
                user.userData = {...data}
                // console.log(user.isAuth)
            } ).finally( () => setLoading(false) )
        }, 1000)
    }, [])

    if (loading) {
        return <CircularProgress className='fixed left-1/2 top-1/2'/>
    }

    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>
    );
    
};

export default App;
