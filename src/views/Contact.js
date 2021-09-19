import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <div className="p-3">
            <a 
                href="https://twitter.com/oliverIngle"
                className="border-blue-400 contact-info"
            >
                <FontAwesomeIcon icon={faTwitter} />
                <h1>@oliverIngle</h1>
            </a>
            <a 
                href="https://github.com/OliverIngle"
                className="border-black contact-info mt-2"
            >
                <FontAwesomeIcon icon={faGithub} />
                <h1>@OliverIingle</h1>
            </a>
            <a 
                href="https://www.instagram.com/olly_ingle/"
                className="contact-info mt-2 border-pink-600"
            >
                <FontAwesomeIcon icon={faInstagram} />
                <h1>@olly_ingle</h1>
            </a>
        </div>
    )
}
