/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pic from '../../assets/images/Jason-8.jpg'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone" style={{ width: '80%' }}>
          <img src={pic} alt={'Jason R Chew'} id='profile-pic' />
          <h1>
            About Me
          </h1>
          <p>
            I am a born puzzler and analyst. The joy of tinkering within a clearly defined structure is no small part of what drives me. It motivated my graduate studies in mathematics, and it led me to software engineering.
          </p>
          <p>
            My master's and doctoral math programs honed and refined my logical skills, but I found that a career in academia would not be enough for me. My experience in research was missing precisely the piece I have found in coding: constant opportunity for creativity and ingenuity. In the full stack applications I've developed, there have been innumerable opportunities to exercise my creative and analytic skills in tandem.
          </p>
          <p>
            I love searching for methods of optimization in backend API routes and SQL queries. The sense of accomplishment in creating smooth UX with React.js for a word puzzle was intoxicating. Even refactoring old code for scalability and reusability hits that dopamine button!
          </p>
          <p>
            I'm grateful for the opportunities I've had to bring me this far in my coding journey, and I can't wait for the next one where I can learn even more!
          </p>
        </div>

        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> */}
      </div>
      <Loader type="ball-triangle-path" />
    </>
  )
}

export default About
