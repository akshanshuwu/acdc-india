
import React from 'react';
import { Translation, Review } from '../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  t: Translation;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">{t.testimonials.subtitle}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">{t.testimonials.title}</h3>
          </div>
          {/* Decorative Divider */}
          <div className="hidden md:block mb-3">
             <div className="h-px w-24 bg-slate-300"></div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Quote Icon */}
      <div className="absolute top-6 right-8 text-slate-100 group-hover:text-primary/10 transition-colors">
        <Quote size={48} fill="currentColor" stroke="none" />
      </div>

      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={16} 
            className={`${star <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} 
          />
        ))}
      </div>

      <p className="text-slate-600 mb-8 leading-relaxed relative z-10 text-lg italic">
        "{review.content}"
      </p>

      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 font-bold text-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
          <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{review.role}</p>
        </div>
      </div>
    </div>
  );
};
