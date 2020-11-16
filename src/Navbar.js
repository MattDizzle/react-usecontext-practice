import React, { Component, useContext } from 'react'
import { AuthContext } from './AuthContext';
import { ThemeContext } from './ThemeContext'

 const Navbar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (      
        <nav style={ {background: theme.ui, color: theme.syntax}}>
            <h1> Book List</h1>
                <div onClick={toggleAuth}>
                    {isAuthenticated ? 'Logged in':'Logged Out'}
                </div>
            <ul>
                <li>Home</li>    
                <li>About</li>   
                <li>Contact</li>   
            </ul>          
        </nav>
        
    )
}

export default Navbar