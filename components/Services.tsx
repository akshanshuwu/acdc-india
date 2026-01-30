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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    <div className={`group relative bg-surface hover:bg-white border border-transparent hover:border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${isLarge ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      <div className="absolute top-8 right-8 text-gray-300 group-hover:text-primary transition-colors">
        <ArrowUpRight size={24} />
      </div>
      
      <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {iconMap[service.iconName]}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
      
      <div className="space-y-3">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
            {feature}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center justify-between">
         <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">Starting At</span>
         <span className="font-bold text-primary">{service.priceRange}</span>
      </div>
    </div>
  );
};