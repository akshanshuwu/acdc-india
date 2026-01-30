
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Dashboard } from './components/Dashboard';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  // Load language preference if available
  useEffect(() => {
    const savedLang = localStorage.getItem('acdc_lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'hi')) {
      setLang(savedLang);
    }
  }, []);

  // Save language preference
  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('acdc_lang', newLang);
  };

  const t = TRANSLATIONS[lang];

  if (currentView === 'dashboard') {
    return <Dashboard onExit={() => setCurrentView('landing')} />;
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans ${lang === 'hi' ? 'font-hindi' : ''}`}>
      <Header lang={lang} setLang={handleLangChange} t={t} onSignupClick={() => setCurrentView('dashboard')} />
      
      <main className="flex-grow">
        <Hero t={t} />
        <Services t={t} />
        <About t={t} />
        <Testimonials t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} onLoginClick={() => setCurrentView('dashboard')} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
