import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';



const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>Knock Knock!!</h1>
            <p>{user ? user.displayName : 'voot'}</p>
        </div>
    );
};

export default Products;