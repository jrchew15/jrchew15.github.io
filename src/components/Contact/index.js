import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const contactArray = 'Contact Me'.split('')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            <a href='https://github.com/jrchew15' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              My Github
            </a>
          </p>
          <p>
            <a href='https://linkedin.com/in/jason-r-chew' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              My LinkedIn
            </a>
          </p>
          <p>
            <a href='https://angel.co/u/jason-chew-7' target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faAngellist} />
              My AngelList / Wellfound
            </a>
          </p>
        </div>
      </div>
      <Loader type="ball-triangle-path" />
    </>
  )
}

export default Contact
