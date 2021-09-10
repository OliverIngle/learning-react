import React, { useState } from 'react'
import Joke from '../Components/Joke';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    const [needsReload, setNeedsReload] = useState(false)
    return (
        <div className="flex flex-row items-center">
            <div className="w-3/4">
                <Joke needsReload={needsReload} />
            </div>
            <div 
                className="m-3 rounded-lg flex text-xl border-4 hover:border-blue-500 flex-grow self-stretch justify-center items-center"
                onClick={() => setNeedsReload(!needsReload)}
            >
                <FontAwesomeIcon 
                    icon={faForward}
                />
            </div>
        </div>
    )
}
