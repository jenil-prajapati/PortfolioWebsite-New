import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const FrameworksList = () => {
  const [frameworks] = useState([
    { name: "Large Language Models", progress: 37.5, className: "llm-progress", years: 1.5 },
    { name: "Natural Language Processing", progress: 37.5, className: "nlp-progress", years: 1.5 },
    { name: "Amazon Web Services (AWS)", progress: 50, className: "aws-progress", years: 2 },
    { name: "AngularJS", progress: 50, className: "angular-progress", years: 2 },
    { name: "NodeJS", progress: 50, className: "nodejs-progress", years: 2 },
    { name: "PostgreSQL", progress: 50, className: "postgresql-progress", years: 2 },
    { name: "Spring Boot", progress: 50, className: "springboot-progress", years: 2 },
    { name: "ReactJS", progress: 75, className: "react-progress", years: 3 }
  ]);

  return (
    <div>
      <h2>Frameworks & Technologies</h2>
      <ul>
        {frameworks
          .sort((a, b) => a.years - b.years)
          .map((framework, index) => (
            <li key={index}>
              <span>{framework.name}: {`${framework.years} years`}</span>
              <ProgressBar progress={framework.progress} className={framework.className} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FrameworksList;