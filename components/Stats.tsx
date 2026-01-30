import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Translation } from '../types';

interface StatsProps {
  t: Translation;
  lang: 'en' | 'hi';
}

export const Stats: React.FC<StatsProps> = ({ t, lang }) => {
  // Mock data for the chart
  const data = [
    { name: lang === 'en' ? 'Repairs' : 'मरम्मत', value: 850 },
    { name: lang === 'en' ? 'Forms' : 'फॉर्म', value: 1200 },
    { name: lang === 'en' ? 'Prints' : 'प्रिंट', value: 3500 },
    { name: lang === 'en' ? 'Clients' : 'ग्राहक', value: 2100 },
  ];

  return (
    <section id="about" className="py-20 bg-surface border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.stats.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.stats.subtitle}
              <br/><br/>
              {lang === 'en' 
                ? "Since 2018, ACDC India Services has been the go-to hub for students, professionals, and residents in Bhopal. We pride ourselves on speed, accuracy, and data privacy."
                : "२०१८ से, ACDC इंडिया सर्विसेज भोपाल में छात्रों, पेशेवरों और निवासियों के लिए एक प्रमुख केंद्र रहा है। हमें गति, सटीकता और डेटा गोपनीयता पर गर्व है।"}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-gray-500 font-medium">{lang === 'en' ? 'Years Experience' : 'वर्षों का अनुभव'}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-gray-500 font-medium">{lang === 'en' ? 'Satisfaction Rate' : 'संतुष्टि दर'}</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-[400px]">
             <h3 className="text-lg font-bold text-gray-800 mb-6">{lang === 'en' ? 'Monthly Service Volume' : 'मासिक सेवा मात्रा'}</h3>
             <ResponsiveContainer width="100%" height="85%">
                <BarChart data={data}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 2 ? '#103927' : '#A3E635'} />
                    ))}
                  </Bar>
                </BarChart>
             </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};