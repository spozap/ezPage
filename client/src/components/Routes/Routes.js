import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../containers/Login/Login';
import Register from '../../containers/Register/Register';


const Routes = () => {

    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
    )

}

export default Routes;