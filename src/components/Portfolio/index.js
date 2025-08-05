import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { categories, portfolio } = portfolioData;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const filteredProjects = selectedCategory === 'all' 
        ? portfolio 
        : portfolio.filter(project => project.category === selectedCategory);

    const renderCategories = () => (
        <div className="categories-container">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                >
                    <span className="category-icon">{category.icon}</span>
                    {category.name}
                </button>
            ))}
        </div>
    );

    const renderPortfolio = (projects) => {
        return (
            <div className="images-container">
                {projects.map((port, idx) => (
                    <div key={idx} className="image-box">
                        <img src={port.cover} alt="portfolio" className="portfolio-image"/>
                        <div className="content">
                            <p className="title">{port.title}</p>
                            <h4 className="description">{port.description}</h4>
                            <button className="btn" onClick={() => window.open(port.url)}>View</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters letterClass={letterClass} strArray={"Portfolio".split("")} idx={15}/>
                </h1>
                {renderCategories()}
                {selectedCategoryData && selectedCategoryData.id !== 'all' && (
                    <div className="category-description">
                        <h2>{selectedCategoryData.icon} {selectedCategoryData.name}</h2>
                        <p>Focus: {selectedCategoryData.description}</p>
                    </div>
                )}
                <div>{renderPortfolio(filteredProjects)}</div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Portfolio;