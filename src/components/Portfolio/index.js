import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import { useTranslation } from "react-i18next";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../data/portfolio.json";

const projectKeys = [
    "reminisce", "weatherapp", "gotchugaucho", "parkingapp",
    "stockmarket", "datathon", "genai", "yolo",
    "blackswan", "outfitrec", "bowmaster", "boabomb"
];

const categoryIds = ["all", "software", "data", "ai", "games"];

const Portfolio = () => {
    const { t } = useTranslation();
    const [letterClass, setLetterClass] = useState('text-animate');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    const categories = categoryIds.map((id, idx) => ({
        id,
        name: t(`portfolio.categories.${id}`),
        icon: portfolioData.categories[idx].icon,
        description: t(`portfolio.categoryDescriptions.${id}`),
    }));

    const portfolio = portfolioData.portfolio.map((project, idx) => ({
        ...project,
        title: t(`portfolio.projects.${projectKeys[idx]}.title`),
        description: t(`portfolio.projects.${projectKeys[idx]}.description`),
    }));

    const filteredProjects = selectedCategory === 'all' 
        ? portfolio 
        : portfolio.filter((_, idx) => portfolioData.portfolio[idx].category === selectedCategory);

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
                    <div
                        key={port.title}
                        className="image-box"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                        <img
                            src={port.cover}
                            alt={port.title}
                            className="portfolio-image"
                            loading="eager"
                        />
                        <div className="content">
                            <p className="title">{port.title}</p>
                            <h4 className="description">{port.description}</h4>
                            <button className="btn" onClick={() => window.open(port.url)}>{t('portfolio.viewBtn')}</button>
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
                    <AnimatedLetters letterClass={letterClass} strArray={t('portfolio.title').split("")} idx={15}/>
                </h1>
                {renderCategories()}
                {selectedCategoryData && selectedCategoryData.id !== 'all' && (
                    <div className="category-description">
                        <h2>{selectedCategoryData.icon} {selectedCategoryData.name}</h2>
                        <p>{t('portfolio.focus')} {selectedCategoryData.description}</p>
                    </div>
                )}
                <div>{renderPortfolio(filteredProjects)}</div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Portfolio;
