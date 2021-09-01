import React from 'react';
import Navigation from './Navigation';

export default function Header() {
    return (
        <header className="border-b font-bold p-3 flex justify-between items-center">
            <span>App Name</span>
            <Navigation />
        </header>
    )
}
