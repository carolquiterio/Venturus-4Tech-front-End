import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Restaurant } from '@material-ui/icons';
import { isAuthenticated } from '../../services/auth';

const PrivateRoute  = ({ component: Component, ...rest}) => {

    return(
        <Route 
            {...rest}
            render = {(props) => {
               return isAuthenticated() ? <Component {...props} /> : <Redirect to = '/' />
            }

            }
        
        />
    )
}

export default PrivateRoute;