import React, { useContext } from 'react';
import { AuthContext } from '../../Hook/AuthProvider';
import Header from '../Header/Header';
 

const Login = () => {
    const {googleSignIn} = useContext(AuthContext);
    googleSignIn()
    return (
        <div>
 
            helllo
        </div>
    );
};

export default Login;