import axios from 'axios';
import { current } from 'daisyui/src/colors';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { auth, AuthContext } from './UserContext';

const Home = () => {
const { user} = useContext(AuthContext);
    return (
        <div>
            <h2>Home for {user?.email}</h2>
        </div>
    );
};

export default Home;