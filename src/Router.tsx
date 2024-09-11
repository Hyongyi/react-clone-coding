import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Coin from './routes/Coin';
import ErrorComponent from './components/ErrorComponent';
import Coins from './routes/Coins';


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Root />,
        children:[
            {
                path:"",
                element:<Coins />,
                errorElement: <ErrorComponent />
            },
            {
                path:"/:coinId",
                element:<Coin />,
                errorElement: <ErrorComponent />
            }
        ]
    }
])

export default Router;