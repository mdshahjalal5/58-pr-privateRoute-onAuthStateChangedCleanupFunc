import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './UserContext';

const Login = () => {
    const navigate = useNavigate();
    const { signIn, user, googleSignIn } = useContext(AuthContext);
    function submitHandler(event) {
        event.preventDefault();
        const form = event.target;
        let email, password;
        email = form.email.value;
        password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(function(userCredential){
            console.log(userCredential, 'sign in info');
            navigate('/home');            
        })
    }
    return (
        <div>
            <h2>This is login page for       {user?.email}  </h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={submitHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <Link to='/registration'>Not registered? </Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="btn  lowercase" onClick={googleSignIn}>
                            Sign in with Google dada vai
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;