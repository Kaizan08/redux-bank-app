import React from 'react';
import {NavLink} from 'react-router-dom';

function BaseLayout({children}){
        return (
            <div>
                <div className="navbar alert-info nav-header">
                    <NavLink className="navbar-brand" to="/">BankShot</NavLink>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/users">Users</NavLink>
                </div>
                <div>
                    {children}
                </div>
            </div>
        );
}

export default BaseLayout;