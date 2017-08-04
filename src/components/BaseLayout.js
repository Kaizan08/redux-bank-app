import React from 'react';
import {NavLink} from 'react-router-dom';

function BaseLayout({children}){
        return (
            <div>
                <div className="navbar-toggleable-md navbar navbar-light bg-faded">
                    <NavLink className="navbar-brand nav-item nav-link" to="/">BankShot</NavLink>
                    <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" to="/users">Users</NavLink>
                </div>
                <div>
                    {children}
                </div>
            </div>
        );
}

export default BaseLayout;