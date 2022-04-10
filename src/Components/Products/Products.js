import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>Knock Knock!!</h1>
            <p>{user ? user.displayName : 'voot'}</p>
        </div>
    );
};

export default Products;