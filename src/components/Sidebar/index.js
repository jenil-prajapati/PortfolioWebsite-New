import './index.scss'
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faFolderOpen, faBars, faClose, faGraduationCap, faFlask } from '@fortawesome/free-solid-svg-icons'
import LogoE from '../../assets/images/E.png'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        const newLang = i18n.language === 'de' ? 'en' : 'de'
        i18n.changeLanguage(newLang)
    }

    return(
        <div className='nav-bar'> 
            <Link className="logo" to="/"> 
                <img src={LogoE} alt="logo" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ""}>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" onClick={() => setShowNav(false)}/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="teaching-link" to="/teaching">
                    <FontAwesomeIcon icon={faGraduationCap} color="#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="research-link" to="/research">
                    <FontAwesomeIcon icon={faFlask} color="#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" onClick={() => setShowNav(false)} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" onClick={() => setShowNav(false)}/>
                </NavLink>
                <FontAwesomeIcon icon={faClose} color="#ffd700" size="3x" className="close-icon" onClick={() => setShowNav(false)} />
            </nav>
            <div className="lang-toggle" onClick={toggleLanguage} title="Switch language">
                <span className={i18n.language === 'en' ? 'active-lang' : ''}>EN</span>
                <span className="lang-divider">|</span>
                <span className={i18n.language === 'de' ? 'active-lang' : ''}>DE</span>
            </div>
            <ul className='social-links'>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jenilprajapati/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/jenil-prajapati'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.instagram.com/jenil.prajapati/'>
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#ffd700" size="3x" className="hamburger-icon" />
        </div>
    )
}

export default Sidebar
