import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul className="list-reset md:flex justify-end flex-1 items-center text-base md:text-xl mr-32">                
                <li className='mr-3'>
                    <a className='transition duration-500 ease-in-out inline-block transform hover:scale-150 hover:shadow-2xl' href="/about">Home</a>
                </li>
                <li className='mr-3'>
                    <a className='transition duration-500 ease-in-out inline-block transform hover:scale-150' href="/portfolio">Projects</a>
                </li>
                <li className='mr-3'>
                    <a className='transition duration-500 ease-in-out inline-block transform hover:scale-150' href="/cv">CV</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;