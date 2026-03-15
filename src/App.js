import React, { useEffect } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Work from './components/Work';
import Teaching from './components/Teaching';
import Research from './components/Research';
import Tech from './components/About/Tech';
import Dev from './components/About/Dev';


function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('documentTitle');
  }, [t]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/tech" element={<Tech />} />
          <Route path="about/dev" element={<Dev />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="work" element={<Work />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="research" element={<Research />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
