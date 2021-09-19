import React from 'react'
import { useState ,useEffect } from 'react';
import NextButton from './NextButton';

export default function Widget(props) {


    const { url, propertyName, title, borderColor, type } = props.params;
    
    const contentClass = `widget-content border-${borderColor}`


    const [content, setContent] = useState(null);
    const [needsReload, setNeedsReload] = useState(false);

    var subPropertyName;
    try {
        subPropertyName = props.params.subPropertyName;
    } catch(err) {
        subPropertyName = false
    }

    

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (subPropertyName) {
                    setContent(data[propertyName][subPropertyName])
                } else {
                    setContent(data[propertyName])
                }
            })
            .catch(err => setContent('there was an error'))
    }, [needsReload])

    if (type == "reload") {
        return (
            <div className="wiget-container">
                <div 
                    className={contentClass}
                >
                    <div>
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <p className="font-semibold">{content}</p>
                    </div>
                </div>
                <NextButton setNeedsReload={setNeedsReload} needsReload={needsReload} borderColor={borderColor} />
            </div>
        )
    } else {
        return (
            <div className="wiget-container">
                <div 
                    className={contentClass}
                >
                    <div>
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <p className="font-semibold">{content}</p>
                    </div>
                </div>
            </div>
        )
    }
}
