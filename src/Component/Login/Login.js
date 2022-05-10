import React from 'react';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const handleSignInWithGoogle = () =>{
        signInWithGoogle()
        .then( ()=>{
            navigate(from, {replace: true})
        })
    }

    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin:15}}>
                <button onClick={handleSignInWithGoogle} >Continue with google</button>
            </div>
            <form>
                <input type="email" placeholder='enter email' name="" id="" /> <br />
                <input type="password" name="" placeholder='password' id="" /> <br /> <br />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;