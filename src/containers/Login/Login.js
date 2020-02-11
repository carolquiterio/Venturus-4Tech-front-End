import React, { useState, useEffect, Fragment } from 'react';

import { user } from '../../services/user';
import { login } from '../../services/auth'

import { Button, TextField, Typography, Paper, Grid, } from '@material-ui/core';

import { useHistory } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [isLogin, setIsLogin ] = useState(true);
    const [fullName, setFullName] = useState('');
    const [userLogin, setUserLogin] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const onLoginChange = (event) => {
        setUserLogin(event.target.value);
    };

    const onRegister =  async (event) => {
        event.preventDefault();
        const response = await user.register(userLogin, fullName, password);
        console.log(response);
    };

    const onLogin = async (event) => {
        event.preventDefault();
        const response = await login(userLogin, password);
        console.log("oi");
        if(response.status >=200 && response.status < 300) {
            console.log("oi"); 
            history.push('/timeline');
        }
    }

    const renderLogin = () => {
        return (
            <Fragment>                 
                <TextField 
                    id = "userLogin" 
                    label = "User login" 
                    value = {userLogin} 
                    onChange = {onLoginChange}
                    required
                />

                <TextField 
                    id = "password" 
                    label = "Password" 
                    type = "password"
                    value = {password} 
                    onChange = {(event) => setPassword(event.target.value)}
                    required
                />
                <Button color="primary" type = "submit">Login</Button>
                <Button color="primary" onClick = {() => setIsLogin(!isLogin)} >Sign up</Button>
            </Fragment>
        )
    }


    const renderRegister = () => {
        return (
            <Fragment>
                <TextField
                    id = "fullName" 
                    label = "Full name" 
                    value = {fullName} 
                    onChange = {(event) => setFullName(event.target.value)}
                    required
                />
                        
                <TextField 
                    id = "userLogin" 
                    label = "User login" 
                    value = {userLogin} 
                    onChange = {(event) => setUserLogin(onLoginChange)}
                required
                />

                <TextField 
                    id = "password" 
                    label = "Password" 
                    type = "password"
                    value = {password} 
                    onChange = {(event) => setPassword(event.target.value)}
                    required
                />
                <Button color="primary" type = "submit">Sign in</Button>
                <Button color="secondary" onClick = {() => setIsLogin(true)}>Back</Button>
            </Fragment>
        )}

    return (
        <div className = "login">
            <Grid item xs = {2} className = "grid">
                <Paper className = "paper">
                    <form onSubmit = {isLogin ? onLogin : onRegister}>
                        <Typography variant = "h6">
                            Instagram 
                        </Typography>
                        {isLogin ? renderLogin() : renderRegister() }
                    </form>
                </Paper>
            </Grid>
            
        </div>
    );

};

export default Login;