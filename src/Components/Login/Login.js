import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login!!</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign in</button>
            </div>
            <form action="">

                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;