import React from 'react';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="flex justify-center space-x-12">
            <a href="https://github.com/Ross-White"><FontAwesomeIcon icon={faGithubSquare} size='4x' /></a>
            <a href="https://www.linkedin.com/in/ross-white-b4751814b/"><FontAwesomeIcon icon={faLinkedin} size='4x' /></a>
            <a href="mailto:info@ross-white.co.uk"><FontAwesomeIcon icon={faEnvelope} size="4x" /></a>
        </footer>
    )
};

export default Footer;