// import { useEffect, useState } from 'react';
// import Loader from 'react-loaders';
// import { Link } from 'react-router-dom';
// import AnimatedLetters from '../AnimatedLetters';
// import './index.scss';
// import MePicture from '../../assets/images/me-picture.jpg';

// const Home = () => {
//     const [letterClass, setLetterClass] = useState('text-animate')
//     const nameArray = "enil,".split("");
//     const jobArray = "Software Engineer Intern.".split("");

//     useEffect(() => {
//         const timerId = setTimeout(() => {
//           setLetterClass('text-animate-hover');
//         }, 4000);
      
//         return () => {
//           clearTimeout(timerId);
//         };
//       }, []);

//     return(
//       <>
//         <div className="container home-page">
//             <div className="text-zone">
//                 <h1>
//                 <span className={`${letterClass} _8`}>H</span>
//                 <span className={`${letterClass} _9`}>i</span>
//                 <br /> 
//                 <span className={`${letterClass} _10`}>I</span>
//                 <span className={`${letterClass} _11`}>'m </span>
//                 <span className={`${letterClass} _12`}>J</span>
//                 <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={13} />
//                 <br /> 
//                 <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} /> 
//                 </h1>
//                 <h2>Computer Science & Statistics, 2026 at University of California - Santa Barbara</h2>
//                 <Link to="/contact" className="flat-button">CONTACT ME</Link>
//             </div>
//             <div className="profile-picture">
//                 <img src={MePicture} alt="Jenil" />
//             </div>
//         </div>
//         <Loader type="pacman" />
//       </>
//     )
// }

// export default Home

import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import MePicture from '../../assets/images/me-picture.jpg';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = "Jenil Prajapati,".split(""); // Updated name
    const jobArray = "Software Engineer Intern.".split("");

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
                    <span className={`${letterClass} _8`}>H</span>
                    <span className={`${letterClass} _9`}>i</span>
                    <br /> 
                    <span className={`${letterClass} _10`}>I</span>
                    <span className={`${letterClass} _11`}>'m</span>
                    <span className="spacer"> </span> {/* Added space here */}
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                    <br /> 
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} /> 
                </h1>
                <h2 className="black-text">
                    Computer Science & Statistics, 2026 at University of California - Santa Barbara
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
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
