import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Type1() {
    return (
        <div>
            <Typewriter
            options={{
                strings: [
                "Software Developer",
                "Front-End Engineer",
                "Passionate Learner",
                'Gamer',
                "Lover of Sports and Music",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                wrapperClassName: 'typewriter',
                cursorClassName: 'type-cursor'
            }}
            
            />
        </div>
    )
}
