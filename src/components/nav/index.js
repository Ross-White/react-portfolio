import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul className="list-reset lg:flex justify-end flex-1 items-center text-sm">                
                <li className='mr-3'>
                    <a className='inline-block text-gray-600 hover:text-gray-200 py-2 px-4' href="/about">Home</a>
                </li>
                <li className='mr-3'>
                    <a className='inline-block text-gray-600 hover:text-gray-200 py-2 px-4' href="/portfolio">Portfolio</a>
                </li>
                <li className='mr-3'>
                    <a className='inline-block text-gray-600 hover:text-gray-200 py-2 px-4' href="/contact">Contact</a>
                </li>
                <li className='mr-3'>
                    <a className='inline-block text-gray-600 hover:text-gray-200 py-2 px-4' href="/cv">CV</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;