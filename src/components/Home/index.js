import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ' Jason Chew'.split('')
  const jobArray = 'Web Developer,'.split('')
  const interestArray = 'Mathematician,'.split('')
  const enthusiastArray = 'Board Game Designer'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={enthusiastArray}
              idx={22}
            />
            <span id='aside-container'>
              <span className='carot'>^</span>
              <span className='aside'>(amateur)</span>
            </span>
          </h1>
          {/* <h2>
            Full Stack Developer / Puzzle Enthusiast / Avid Learner
          </h2> */}
          <NavLink to="/about" className="flat-button">
            ABOUT ME
          </NavLink>
        </div>
        {/* <Logo /> */}
        {/* <div>JC</div> */}
      </div>

      <Loader type="ball-triangle-path" />
    </>
  )
}

export default Home
