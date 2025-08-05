// import React, { useState } from "react";
// import ProgressBar from "../ProgressBar";
// import "./index.scss"

// const LanguageList = () => {
//   const [languages] = useState([
//     { name: "Java", progress: 100, className: "java-progress", years: 4 },
//     { name: "Python", progress: 75, className: "python-progress", years: 3 },
//     { name: "HTML/CSS/JS", progress: 75, className: "web-progress", years: 3 },
//     { name: "SQL", progress: 37.5, className: "sql-progress", years: 1.5 },
//     { name: "C", progress: 25, className: "c-progress", years: 1 },
//     { name: "GoLang", progress: 25, className: "golang-progress", years: 1 },
//     { name: "VHDL", progress: 25, className: "vhdl-progress", years: 1 },
//   ]);

//   return (
//     <div>
//       <h2>Languages</h2>
//       <ul>
//         {languages.map((language, index) => (
//           <li key={index}>
//             <span>{language.name}: {`${language.years} years`}</span>
//             <ProgressBar progress={language.progress} className={language.className} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LanguageList;

import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const [languages] = useState([
    { name: "Typescript", progress: 25, className: "typescript-progress", years: 1 },
    { name: "SQL", progress: 50, className: "sql-progress", years: 2 },
    { name: "Java", progress: 50, className: "java-progress", years: 2 },
    { name: "C/C++", progress: 62.5, className: "c-progress", years: 2.5 },
    { name: "Python", progress: 100, className: "python-progress", years: 4 },
    { name: "HTML/CSS/JS", progress: 100, className: "web-progress", years: 4 }
  ]);

  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {languages
          .sort((a, b) => a.years - b.years)
          .map((language, index) => (
            <li key={index}>
              <span>{language.name}: {`${language.years} years`}</span>
              <ProgressBar progress={language.progress} className={language.className} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LanguageList;