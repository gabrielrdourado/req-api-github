import React from 'react';

import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Routes from './Routes';
import Login from './pages/Login';

const App = ()=> {
    const user = useSelector(selectUser);

    return(
        <div>
            {user ? (
              <BrowserRouter>                
                <Routes></Routes>
              </BrowserRouter>
            ) : <Login/>}
        </div>
    );
}

export default App