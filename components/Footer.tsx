
import React from 'react';
import { Translation } from '../types';
import { Lock } from 'lucide-react';

interface FooterProps {
  t: Translation;
  onLoginClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onLoginClick }) => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
           <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center text-primary font-bold">A</div>
           <span className="text-xl font-bold">ACDC India</span>
        </div>
        
        <div className="flex justify-center gap-6 mb-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
          <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
        </div>

        <div className="pt-8 border-t border-white/10 text-sm text-gray-400 flex flex-col items-center gap-4">
          <p>{t.footer.rights} | {t.footer.disclaimer}</p>
          <div className="flex items-center gap-4">
             <span className="text-xs text-gray-500">Designed with modern aesthetics.</span>
             {onLoginClick && (
               <button 
                 onClick={onLoginClick}
                 className="flex items-center gap-1 text-xs text-gray-600 hover:text-secondary transition-colors"
               >
                 <Lock size={12} /> Staff Login
               </button>
             )}
          </div>
        </div>
      </div>
    </footer>
  );
};
