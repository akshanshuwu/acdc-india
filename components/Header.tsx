import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Language, Translation } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-secondary font-bold text-xl">
            A
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">ACDC India</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Globe size={16} />
            {lang === 'en' ? 'HI' : 'EN'}
          </button>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="bg-primary text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-[#0A261A] transition-colors">
            {t.nav.contact}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-4 md:hidden flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollToSection(link.id)}
              className="text-left py-2 text-gray-700 font-medium border-b border-gray-50"
            >
              {link.label}
            </button>
          ))}
          <div className="flex justify-between items-center pt-2">
             <button 
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gray-100"
            >
              <Globe size={16} />
              {lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};