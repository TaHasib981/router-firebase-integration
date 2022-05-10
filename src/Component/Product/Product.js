import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth = getAuth(app)
const Product = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h3>Who is here.. address yourself..</h3>
            <h1>I am {user?.displayName}</h1>
        </div>
    );
};

export default Product;