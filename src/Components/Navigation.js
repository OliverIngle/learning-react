import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring'

export default function Navigation() {
    const[showMenu, setShowMenu] = useState(false);
    
    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      })
      const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
      })

    // className="fixed bg-white top-0 left-0 w-4/5 h-full shadow z-50">
    // className="bg-black-t-50 fixed top-0 left-0 w-full h-full"


    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {
                maskTransitions(
                    (styles, item) => item && 
                    <animated.div 
                        style={styles}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                  )
            }

            {
                menuTransitions(
                    (styles, item) => item && 
                    <animated.div 
                        style={styles}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full shadow z-50"
                        //onClick={() => setShowMenu(false)}
                    >
                        <span className="p-3 font-bold">
                            Menu
                        </span>
                    </animated.div>
                  )
            }
        </nav>
    )
}
