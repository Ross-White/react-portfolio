import React from 'react';

const Navigation = ({ currentPage, handlePageChange }) => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/about">Home</a>
                </li>
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/cv">CV</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;