import React, { useEffect, useState } from 'react'

export default function Joke(props) {
    const url = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=single';
    const [joke, setJoke] = useState(null)

    const needsReload = props.needsReload;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setJoke(data));
    }, [needsReload])

    if (joke) {
        return (
            <div className="p-2 border-solid border-4 border-blue-500 m-3 rounded-lg">
                <h1 className="font-bold text-2xl">Programming joke:</h1>
                <p className="font-semibold">{joke.joke}</p>
            </div>
        )
    }

    return (
        <div></div>
    )
}
