import React, { useState } from 'react'

//components
import NextButton from '../Components/NextButton';
import Widget from '../Components/Widget';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    const APIlist = [
        {
            url: "https://v2.jokeapi.dev/joke/Any?safe-mode&type=single",
            propertyName: "joke",
            title: "Joke:",
            borderColor: "th-blue-cyan",
            type: "reload"
        },
        {
            url: "https://www.boredapi.com/api/activity",
            propertyName: "activity",
            title: "Are you bored? Try this:",
            borderColor: "th-pink-true",
            type: "reload"
        },
        {
            url: "https://api.ipify.org/?format=json",
            propertyName: "ip",
            title: "your IP:",
            borderColor: "th-yellow-gold",
            type: "no reload"
        },
        {
            url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
            propertyName: "bitcoin",
            subPropertyName:"usd",
            title: "btc price ($usd):",
            borderColor: "th-red-chili",
            type: "no reload"
        },
        {
            url: "https://v2.jokeapi.dev/joke/programming?safe-mode&type=single",
            propertyName: "joke",
            title: "Programming joke:",
            borderColor: "th-blue-cyan",
            type: "reload"
        },
    ]

    return (
        APIlist.map(api => {
            return <Widget key={api.title} params={api} />
        })
    )
}
