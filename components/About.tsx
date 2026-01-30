
import React from 'react';
import { Translation } from '../types';
import { Shield, Users, Award, CheckCircle } from 'lucide-react';

interface AboutProps {
  t: Translation;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-slate-50 -skew-y-3 origin-top-left -z-10 translate-y-[-100px]"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Content */}
          <div className="relative">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">{t.about.subtitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">{t.about.title}</h3>
            
            <div className="prose prose-lg text-slate-500 mb-8">
              <p className="leading-relaxed">{t.about.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                     <img src={`https://picsum.photos/100/100?random=${i + 10}`} alt="Team" className="w-full h-full object-cover" />
                   </div>
                 ))}
              </div>
              <div>
                <p className="font-bold text-slate-900">Meet the Team</p>
                <p className="text-sm text-slate-500">Certified Experts</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
             <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 opacity-5"></div>
             <img 
               src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop" 
               alt="Office" 
               className="relative rounded-3xl shadow-2xl z-10 w-full h-[400px] object-cover filter contrast-[1.05]" 
             />
             
             {/* Floating Stats Card */}
             <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary">
                     <Award size={24} />
                   </div>
                   <div>
                     <p className="text-2xl font-bold text-slate-900">6+</p>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Years Active</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-16">
          {t.about.features.map((feature, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300">
              <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {idx === 0 ? <Users size={20} /> : idx === 1 ? <Shield size={20} /> : <CheckCircle size={20} />}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
