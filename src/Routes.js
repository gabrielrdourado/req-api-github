import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import Repos from './pages/Repos';

import Search from './pages/Search';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" component={Search} exact/>
            <Route path="/repos/:handle" component={Repos} />
            <Redirect from="*" to="/"/>
        </Switch>
    )
}