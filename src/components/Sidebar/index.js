import './index.scss'
import Logo from '../../assets/images/icons8-geometry-96.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faFolder,
  faScrewdriverWrench,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname='active'
            className="projects-link"
            to="/projects"
          >
            <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>

        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/jason-r-chew/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jrchew15"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://angel.co/u/jason-chew-7"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faAngellist} />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
