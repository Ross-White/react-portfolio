import React from 'react';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="flex justify-center space-x-12 bg-primary-color">
            <a href="https://github.com/Ross-White" title="GitHub"><FontAwesomeIcon icon={faGithubSquare} size='4x' /></a>
            <a href="https://www.linkedin.com/in/ross-white-b4751814b/" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} size='4x' /></a>
            <a href="mailto:info@ross-white.co.uk" title="email"><FontAwesomeIcon icon={faEnvelope} size="4x" /></a>
            <a href="./images/Ross_White__CV.pdf" title="Download CV" target="_blank" download><FontAwesomeIcon icon={faDownload} size="4x" /></a>
        </footer>
    )
};

export default Footer;