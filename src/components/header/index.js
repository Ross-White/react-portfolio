import React from 'react';
import Navigation from '../nav';

const Header = () => {
    return (
        <header className='text-2xl flex items-center place-content-between h-32 pl-8 md:text-5xl m-0'>
           <h1>Ross White Portfolio Page</h1>
           <Navigation />
        </header>
              
    )
};

export default Header;