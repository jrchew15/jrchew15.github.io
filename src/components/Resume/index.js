// import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import Loader from "react-loaders"
import { Link } from "react-router-dom";
// import AnimatedLetters from "../AnimatedLetters"
// import wordPlayImg from "../../assets/images/puzzle-only.png"
// import nahSanaImg from "../../assets/images/nah-sana-workspace.png"
// import noiseFogImg from "../../assets/images/noisefogpromo.png"
import './index.scss'
export default function Resume() {
    // pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
    // const myProjectsArea = 'My Projects'.split('');
    // const [letterClass, setLetterClass] = useState('text-animate')

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 2000)
    //     return () => clearTimeout(timer)
    // }, [])

    return <>
        <div className="container resume">
            <div className="text-zone">
                <Link to="/Jason_Chew_Resume.pdf" target="_blank" download>
                    <Document file="./Jason_Chew_Resume.pdf">
                        <Page pageNumber={1} />
                    </Document>
                </Link>
            </div>
        </div>
        <Loader type="ball-triangle-path" />
    </>
}
