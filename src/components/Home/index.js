import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import MePicture from '../../assets/images/me-picture.jpg';

const Home = () => {
    const { t } = useTranslation();
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = t('home.name').split("");
    const jobArray = t('home.job').split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
    }, []);

    return (
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={`${letterClass} _8`}>{t('home.greeting').charAt(0)}</span>
                    <span className={`${letterClass} _9`}>{t('home.greeting').slice(1)}</span>
                    <br /> 
                    <AnimatedLetters letterClass={letterClass} strArray={t('home.intro').split("")} idx={10} />
                    <span className="spacer"> </span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                    <br /> 
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} /> 
                </h1>
                <h2 className="black-text">
                    {t('home.education')}
                </h2>
                <Link to="/contact" className="flat-button">{t('home.contactBtn')}</Link>
            </div>
            <div className="profile-picture">
                <img src={MePicture} alt="Jenil Prajapati" />
            </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Home;
