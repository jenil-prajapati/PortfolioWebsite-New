import "../Work/index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "react-loaders";
import Timeline from "../Work/Timeline";
import TeachingLogo from "./Logo";

const Teaching = () => {
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

    const events = t('teaching.events', { returnObjects: true });
    const clickMoreText = t('teaching.clickMore');

    return (
        <>
            <div className="container work-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={t('teaching.title').split("")} idx={10} />
                    </h1>
                    <Timeline events={events} clickMoreText={clickMoreText} />
                </div>
            </div>
            <TeachingLogo />
            <Loader type="pacman" />
        </>
    );
};

export default Teaching;
