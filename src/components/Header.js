import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, AuthContext } from './UserContext';
import { signOut } from 'firebase/auth';
const Header = () => {
    // const {signOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const {  user } = useContext(AuthContext);
    return (
        
       <>
           
            <div>
                <div className="text-5xl text-center">Practising</div>
                <div className="navbar bg-primary text-primary-content">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link>
                    <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
                    <Link to='/login' className="btn btn-ghost normal-case text-xl"> Login</Link>
                    <Link to='/registration' className="btn btn-ghost normal-case text-xl">Register</Link>
                    {
                        user?.email && <span> Welcome {user?.email} </span>
                    }
                    {user?.uid ? <span className="btn btn-ghost normal-case text-xl" onClick={() => { signOut(auth) }}>LogOut</span> : <span className="btn btn-ghost normal-case text-xl"><span onClick={() => {
                        navigate('/login');
                    }}>Login</span></span>

                    }            </div>
            </div>
       </>
    );
};
export default Header;