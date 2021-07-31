import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul className="list-reset lg:flex justify-end flex-1 items-center text-base">                
                <li className='mr-3'>
                    <a className='inline-block hover:text-gray-400' href="/about">Home</a>
                </li>
                <li className='mr-3'>
                    <a className='inline-block hover:text-gray-400' href="/portfolio">Portfolio</a>
                </li>
                <li className='mr-3'>
                    <a className='inline-block hover:text-gray-400' href="/contact">Contact</a>
                </li>
                <li className='mr-3'>
                    <a className='inline-block hover:text-gray-400' href="/cv">CV</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;