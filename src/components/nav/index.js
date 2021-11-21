import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul className="list-reset md:flex justify-end flex-1 items-center text-base md:text-xl mr-8">                
                <li className='mr-3'>
                    <a className='inline-block hover:text-gray-400' href="/about">Home</a>
                </li>
                <li className='mr-3'>
                    <a className='inline-block hover:text-gray-400' href="/portfolio">Portfolio</a>
                </li>
                <li className='mr-3'>
                    <a className='inline-block hover:text-gray-400' href="/cv">CV</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;