import { useState, useEffect } from "react";
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import wordPlayImg from "../../assets/images/puzzle-only.png"
import nahSanaImg from "../../assets/images/nah-sana-workspace.png"
import noiseFogImg from "../../assets/images/noisefogpromo.png"
import './index.scss'

export default function Projects() {
    const myProjectsArea = 'My Projects'.split('');
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return <>
        <div className="container projects">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={myProjectsArea}
                        idx={15}
                    />
                </h1>
                <ul>
                    <li>
                        <h2>Word Play Puzzles</h2>
                        <img src={wordPlayImg} alt='word-play' />
                        <p>
                            This application takes heavy inspiration from the New York Times Puzzles. In particular, Word Play offers a large collection of Word-Gon puzzles, modeled after the NYT's Letter Boxed. The smooth, responsive puzzle display is the highlight of the project and was built with only css and React.
                        </p>
                    </li>
                    <li>
                        <h2>Nah-Sana</h2>
                        <p>
                            Nah-sana is an online project management tool inspired by Asana that allows teams to effectively manage projects and tasks in one central location. This SPA is a collaborative project of 4 developers, built with a Flask backend and a React frontend.
                        </p>
                        <img src={nahSanaImg} alt='nah-sana' />
                    </li>
                    <li>
                        <h2>NoiseFog</h2>
                        <p>
                            An audio streaming platform featuring a responsive queue. Normalized data served by an Express backend, and content displayed with react to create a seamless SPA.
                        </p>
                        <img src={noiseFogImg} alt='noisefog' />
                    </li>
                </ul>
            </div>
        </div>
        <Loader type="ball-triangle-path" />
    </>
}
