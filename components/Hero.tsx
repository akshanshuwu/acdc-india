import React from 'react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { Translation } from '../types';
import { Button } from './Button';

interface HeroProps {
  t: Translation;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-bg opacity-40 -z-10"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            {t.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.hero.cta} <ArrowRight size={18} />
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.nav.contact}
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200/60 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/100/100?random=${i}`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                ))}
              </div>
              <span>{t.hero.trust}</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-primary" size={20} />
              <span>Certified Service Point</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};