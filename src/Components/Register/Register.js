import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please register now!!</h3>
            <form action="">
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Enter your email' />
                <br />
                <input type="password" placeholder='Enter password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;