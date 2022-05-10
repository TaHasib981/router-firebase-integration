import React from 'react';
import { getAuth } from 'firebase/auth';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from '../../firebase.init';
const auth = getAuth(app)

const Register = () => {
   const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>Please Register</h2>
            <div style={{margin:15}}>
                <button onClick={() =>signInWithGoogle()} >Continue with google</button>
            </div>
            <form>
                <input type="email" placeholder='enter email' name="" id="" /> <br />
                <input type="password" name="" placeholder='password' id="" /> <br /> <br />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;