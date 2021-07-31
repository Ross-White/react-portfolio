import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul className='space-x-4'>
                <li className='inline-block'>
                    <a href="/about">Home</a>
                </li>
                <li className='inline-block'>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li className='inline-block'>
                    <a href="/contact">Contact</a>
                </li>
                <li className='inline-block'>
                    <a href="/cv">CV</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;