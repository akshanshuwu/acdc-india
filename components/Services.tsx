import React from 'react';
import { Translation, ServiceCategory } from '../types';
import { Printer, Smartphone, FileCheck, Camera, Globe, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  t: Translation;
}

const iconMap: Record<string, React.ReactNode> = {
  Printer: <Printer size={32} />,
  Smartphone: <Smartphone size={32} />,
  FileCheck: <FileCheck size={32} />,
  Camera: <Camera size={32} />,
  Globe: <Globe size={32} />,
};

export const Services: React.FC<ServicesProps> = ({ t }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">{t.services.title}</h2>
          <p className="text-lg text-gray-600">{t.services.subtitle}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.services.categories.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              isLarge={index === 0 || index === 3} // Feature specific items larger if needed
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: ServiceCategory; isLarge?: boolean }> = ({ service, isLarge }) => {
  return (
    <div className={`group relative bg-surface hover:bg-white border border-transparent hover:border-gray-200 rounded-2xl p-4 md:p-8 transition-all duration-300 hover:shadow-xl ${isLarge ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="scale-75 md:scale-100">
          {iconMap[service.iconName]}
        </div>
      </div>
      
      <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{service.title}</h3>
      <p className="text-xs md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2">{service.description}</p>
      
      <div className="space-y-2 md:space-y-3">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
            <span className="line-clamp-1">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200/50 flex items-center justify-between">
         <span className="text-[10px] md:text-xs font-semibold uppercase text-gray-400 tracking-wider">Starting At</span>
         <span className="text-sm md:text-base font-bold text-primary">{service.priceRange}</span>
      </div>
    </div>
  );
};