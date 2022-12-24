import {  signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { auth, AuthContext } from './UserContext';
import  { useNavigate } from 'react-router-dom'
const Registration = () => {
    const navigate = useNavigate();
    const {createUser}   = useContext(AuthContext)
    const submitHandler = event => {
        event.preventDefault();
        const form = event.target;
        let name, email, password;
        name = form.name.value;
        email = form.email.value;
        password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(userCredential =>{
            const user = userCredential.user;
            console.log(user);
          navigate('/home');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <h2>This is register page</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={submitHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name:</span>
                                </label>
                                <input type="text" required placeholder="Your name" name='name' className="input input-bordered" />
                            </div>
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
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account? </Link>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Registration;