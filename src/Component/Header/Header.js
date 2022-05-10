import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { getAuth , signOut} from 'firebase/auth';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app)

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/order">Order</Link>
            <Link to ="/register">Register</Link>
            {
                user && <>
                <Link to="/vip">VIP</Link>
                <Link to="/services">Services</Link>
                </>
            }
            <span>{user?.displayName}</span>
         {
             user?.uid ?
             <button onClick={()=>signOut(auth)} >Sign Out</button> :
            <Link to="/login">Login</Link>
         }
        </div>
    );
};

export default Header;