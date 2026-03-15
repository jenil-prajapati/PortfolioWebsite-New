import "./index.scss"; 
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faCss3, faJava, faHtml5, faAmazon, faReact } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";
import LanguageList from "./LanguageList";

const About = () => {
    const { t } = useTranslation();
    const [letterClass, setLetterClass] = useState('text-animate');
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowScrollIndicator(false);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight * 0.5,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={t('about.title').split("")} idx={15}/>
                    </h1>
                    <p>
                        {t('about.bio')}
                        <br/>
                        <LanguageList />
                        <Link to="/about/tech" className="flat-button">{t('about.frameworksBtn')}</Link>
                        <Link to="/about/dev" className="flat-button">{t('about.devToolsBtn')}</Link>
                    </p>
                </div>
                {showScrollIndicator && (
                    <div className="scroll-indicator" onClick={scrollDown}>
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                    </div>
                )}
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAmazon}/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faPython} color="#ffd700"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faJava} color="#EC4D28"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default About;
