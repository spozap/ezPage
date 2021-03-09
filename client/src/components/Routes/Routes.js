import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../containers/Login/Login';
import Register from '../../containers/Register/Register';
import Admin from '../../containers/Admin/Admin'
import StylesResult from '../../components/StylesResult';

const Routes = () => {

    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/admin" component={Admin} />
            <Route path="/result" component={StylesResult} />

        </Switch>
    )

}

export default Routes;