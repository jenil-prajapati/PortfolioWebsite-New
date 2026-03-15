import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const { t } = useTranslation();
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
      <h2>{t('skills.languages')}</h2>
      <ul>
        {languages
          .sort((a, b) => a.years - b.years)
          .map((language, index) => (
            <li key={index}>
              <span>{language.name}: {t('skills.years', { count: language.years })}</span>
              <ProgressBar progress={language.progress} className={language.className} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LanguageList;
