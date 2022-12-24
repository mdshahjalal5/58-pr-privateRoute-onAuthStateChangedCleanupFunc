import React, { useContext } from 'react';
import { AuthContext } from './UserContext';

const Orders = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>This orders page for <span >{user?.email}</span> </h2>
        </div>
    );
};

export default Orders;