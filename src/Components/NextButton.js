import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

export default function NextButton(props) {
    const setNeedsReload = props.setNeedsReload;
    const needsReload = props.needsReload

    const buttonClass = `widget-next-content-button border-${props.borderColor} hover:border-${props.borderColor} sm:border-blue-500`

    return (
        <div 
                className={buttonClass}
                onClick={() => setNeedsReload(!needsReload)}
            >
                <FontAwesomeIcon 
                    icon={faForward}
                />
            </div>
    )
}
