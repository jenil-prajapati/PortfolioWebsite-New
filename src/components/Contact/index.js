import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters" 
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const { t } = useTranslation()
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault() 

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                refForm.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                () => {
                    alert(t('contact.successMsg'))
                    window.location.reload(false)
                }, 
                () => { 
                    alert(t('contact.errorMsg'))
                }
            )
      }

    return(
        <>
            <div className = "container contact-page">
                <div className = "text-zone">
                    <table>
                        <tbody>
                        <tr>
                            <td className="left-side">
                                <h1>
                                    <AnimatedLetters letterClass={letterClass} strArray={t('contact.title').split("")} idx={15} />
                                </h1>
                                <p>
                                    <br/>
                                    {t('contact.intro1')}
                                    <br/>
                                    <br/>{t('contact.intro2')}
                                    <br/>
                                    <br/>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jenilprajapati/">
                                        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="mailto:prajapatijenil0407@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                    </a>
                                </p>
                            </td>
                            <td className="right-side">
                                <div className="contact-form" onSubmit={sendEmail}>
                                    <form ref={refForm}>
                                        <ul>
                                            <li className="half">
                                                <input type="text" name="name" placeholder={t('contact.namePlaceholder')} required />
                                            </li>
                                            <li className="half">
                                                <input type="email" name="email" placeholder={t('contact.emailPlaceholder')} required />
                                            </li>
                                            <li>
                                                <input placeholder={t('contact.subjectPlaceholder')} type="text" name="subject" required/>
                                            </li>
                                            <li>
                                                <textarea placeholder={t('contact.messagePlaceholder')} name="message" required></textarea>
                                            </li>
                                            <li>
                                                <input type="submit" className="flat-button" value={t('contact.sendBtn')} />
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
