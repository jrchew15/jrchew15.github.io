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
                        <a href='https://word-play-puzzles.herokuapp.com' target="_blank" rel="noreferrer">
                            <h2>Word Play Puzzles</h2>
                        </a>
                        <a href='https://word-play-puzzles.herokuapp.com' target="_blank" rel="noreferrer">
                            <img src={wordPlayImg} alt='word-play' />
                        </a>
                            <p>
                                This application takes heavy inspiration from the New York Times Puzzles. In particular, Word Play offers a large collection of Wordle puzzles and Word-Gon puzzles (modeled after the NYT's Letter Boxed). The smooth, responsive puzzle display is the highlight of the project and was built with only css and React.
                            </p>
                    </li>
                    <li>
                        <a href='https://nah-sana.herokuapp.com' target="_blank" rel="noreferrer"><h2>Nah-Sana</h2></a>
                        <p>
                            Nah-sana is an online project management tool inspired by Asana that allows teams to effectively manage projects and tasks in one central location. This SPA is a collaborative project of 4 developers, built with a Flask backend and a React frontend.
                        </p>
                        <a href='https://nah-sana.herokuapp.com' target="_blank" rel="noreferrer">
                            <img src={nahSanaImg} alt='nah-sana' />
                        </a>
                    </li>
                    <li>
                        <a href='https://jrchew-soundcloud-clone.herokuapp.com' target="_blank" rel="noreferrer">
                            <h2>NoiseFog</h2>
                        </a>
                        <p>
                            An audio streaming platform featuring a responsive queue. Normalized data served by an Express backend, and content displayed with react to create a seamless SPA.
                        </p>
                        <a href='https://jrchew-soundcloud-clone.herokuapp.com' target="_blank" rel="noreferrer">
                            <img src={noiseFogImg} alt='noisefog' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <Loader type="ball-triangle-path" />
    </>
}
