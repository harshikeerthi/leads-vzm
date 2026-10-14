import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { Translation } from '../data/translations';

interface GoogleReviewsProps {
  t: Translation;
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = () => {
  // Exact Google Review Link provided by client
  const googleMapsReviewsUrl = "https://share.google/UXCfHLD0TRKeyrYjr";

  const reviews = [
    {
      id: 1,
      name: "Pradeep Kumar",
      initial: "P",
      avatarBg: "bg-[#652D6C]",
      rating: 5,
      time: "5 months ago",
      text: "I am extremely grateful to the entire team at Vizag IVF hospital for making our IVF journey successful. From the very beginning, Dr. Seerisha Rani garu and support staff were highly professional, compassionate, and supportive. The doctor explained every step of the IVF process clearly, which helped us feel confident and comfortable throughout the treatment. Thanks to their expertise and dedication, we are now blessed with positive results, and we highly recommend this hospital to anyone considering IVF treatment!"
    },
    {
      id: 2,
      name: "Verified Patient",
      initial: "V",
      avatarBg: "bg-teal-700",
      rating: 5,
      time: "Google Review",
      text: "Thankyou Dr.B sireesha rani for giving us fruitful result of conceiving after long wait of 10yrs , underwent two ivf and iui treatment but no result thankyou madam and team vizag ivf centre"
    },
    {
      id: 3,
      name: "Happy Parent",
      initial: "H",
      avatarBg: "bg-amber-700",
      rating: 5,
      time: "Google Review",
      text: "Thankyou vizag IVF centre taken treatment in 2021 got success have a healthy baby baby age 5yrs we are greatful dr b sireesha Rani madam and team."
    }
  ];

  return (
    <section id="reviews" className="py-8 sm:py-10 bg-gradient-to-b from-[#FAF6FA] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Google Logo & 4.8 Rating */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
          
          {/* Google Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#652D6C]/15 shadow-xs">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span className="text-xs font-bold text-[#2A102D]">Patient Reviews on Google</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A102D] tracking-tight">
            What Our Families Say
          </h2>

          {/* Rating Summary Bar: 4.8 / 483 Reviews matching Google Maps */}
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="text-xl font-black text-[#2A102D]">4.8</span>
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#56335B] bg-[#FAF3FB] px-2.5 py-0.5 rounded-full border border-[#652D6C]/15">
              (483) Google Reviews
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto mb-6 items-stretch">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl p-5 border border-[#652D6C]/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full ${r.avatarBg} text-white font-extrabold text-sm flex items-center justify-center shadow-xs shrink-0`}>
                      {r.initial}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#2A102D] leading-tight">
                        {r.name}
                      </h4>
                      <span className="text-[11px] text-[#56335B]/70 font-medium">
                        {r.time}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-xs text-[#56335B] font-medium leading-relaxed">
                  "{r.text}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-3 border-t border-[#652D6C]/10 flex items-center gap-1.5 text-[11px] font-bold text-gray-500">
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Verified Google Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Read All Reviews Button linking to exact Google Share URL */}
        <div className="text-center">
          <a
            href={googleMapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-[#FAF3FB] border border-[#652D6C]/25 text-[#2A102D] hover:text-[#652D6C] px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold shadow-sm hover:shadow-md transition-all group cursor-pointer"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Read All 483+ Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#652D6C] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
