import React from 'react';
import Navigation from '../nav';

const Header = () => {
    return (
        <header class='flex items-center place-content-between h-32 p-3 text-3xl m-0'>
           <h1>Ross White Portfolio Page</h1>
           <Navigation />
        </header>
              
    )
};

export default Header;