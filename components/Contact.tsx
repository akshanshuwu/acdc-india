import React from 'react';
import { Translation } from '../types';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';

interface ContactProps {
  t: Translation;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t.nav.contact}</h2>
          <p className="text-gray-600">{t.contact.title}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 overflow-hidden rounded-3xl border border-gray-200 bg-surface">
          
          {/* Info Side */}
          <div className="lg:col-span-2 p-8 md:p-12 bg-primary text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decor */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
             
             <div>
               <h3 className="text-2xl font-bold mb-8">{t.contact.title}</h3>
               
               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <MapPin size={20} className="text-secondary" />
                   </div>
                   <div>
                     <p className="font-medium text-white/90">Address</p>
                     <p className="text-white/70 text-sm leading-relaxed mt-1">{t.contact.address}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <Phone size={20} className="text-secondary" />
                   </div>
                   <div>
                     <p className="font-medium text-white/90">Phone</p>
                     <p className="text-white/70 text-sm mt-1">{t.contact.phone}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <Mail size={20} className="text-secondary" />
                   </div>
                   <div>
                     <p className="font-medium text-white/90">Email</p>
                     <p className="text-white/70 text-sm mt-1">{t.contact.email}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                     <Clock size={20} className="text-secondary" />
                   </div>
                   <div>
                     <p className="font-medium text-white/90">Hours</p>
                     <p className="text-white/70 text-sm mt-1">Mon - Sat: 11:00 AM - 11:00 PM</p>
                     <p className="text-white/70 text-sm">Sun: 5:00 PM - 11:00 PM</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="mt-12">
               <a 
                 href={`https://wa.me/${CONTACT_INFO.phone}?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <Button variant="secondary" fullWidth>{t.contact.cta_whatsapp}</Button>
               </a>
             </div>
          </div>

          {/* Map Side */}
          <div className="lg:col-span-3 h-80 lg:h-auto min-h-[400px] bg-gray-100 relative">
            <iframe 
              src={CONTACT_INFO.mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
};