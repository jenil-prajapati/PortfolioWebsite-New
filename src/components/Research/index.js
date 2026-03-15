import "../Work/index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "react-loaders";
import Timeline from "../Work/Timeline";
import ResearchLogo from "./Logo";

const Research = () => {
    const { t } = useTranslation();
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    const events = t('research.events', { returnObjects: true });
    const clickMoreText = t('research.clickMore');

    return (
        <>
            <div className="container work-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={t('research.title').split("")} idx={10} />
                    </h1>
                    <Timeline events={events} clickMoreText={clickMoreText} />
                </div>
            </div>
            <ResearchLogo />
            <Loader type="pacman" />
        </>
    );
};

export default Research;
