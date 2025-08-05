import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const DevToolsList = () => {
  const [devTools] = useState([
    { name: "Firebase", progress: 12.5, className: "firebase-progress", years: 0.5 },
    { name: "Flutter", progress: 12.5, className: "flutter-progress", years: 0.5 },
    { name: "Amazon Web Services (AWS)", progress: 25, className: "aws-progress", years: 1 },
    { name: "Azure DevOps", progress: 25, className: "azure-progress", years: 1 },
    { name: "Docker", progress: 25, className: "docker-progress", years: 1 },
    { name: "Git", progress: 75, className: "git-progress", years: 3 }
  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <ul>
        {devTools
          .sort((a, b) => a.years - b.years)
          .map((tool, index) => (
            <li key={index}>
              <span>{tool.name}: {`${tool.years} years`}</span>
              <ProgressBar progress={tool.progress} className={tool.className} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DevToolsList;