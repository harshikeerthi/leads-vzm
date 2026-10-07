import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Translation } from '../data/translations';

interface DoctorsSectionProps {
  t: Translation;
  onDoctorClick?: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ t, onDoctorClick }) => {
  return (
    <section id="doctors" className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF6FA] via-[#FFFFFF] to-[#FAF6FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2A102D] tracking-tight">
            {t.doctors.title}
          </h2>

          <p className="text-base sm:text-lg text-[#56335B] font-medium leading-relaxed">
            {t.doctors.subtitle}
          </p>
        </div>

        {/* Doctor Card Centered in the Middle (Compact & Refined) */}
        <div className="max-w-2xl mx-auto">
          {t.doctors.list.map((doctor) => (
            <div
              key={doctor.id}
              className="glass-card rounded-3xl p-5 sm:p-7 md:p-8 relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl bg-white/95 border border-[#652D6C]/20"
            >
              
              {/* Main Card Content */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                
                {/* Left Side: Avatar Box & Name Badge Pill */}
                <div className="flex flex-col items-center shrink-0 w-full sm:w-auto">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-tr from-[#652D6C] via-[#9A389F] to-[#4D1F53] shadow-md">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-center rounded-xl bg-white"
                      onError={(e) => {
                        (e.target as HTMLElement).setAttribute('src', '/dr-swarna-kumari.png');
                      }}
                    />
                  </div>

                  {/* Dark Purple Name Badge Pill Under Photo */}
                  <div className="mt-2.5 bg-[#652D6C] text-white px-3 py-1 rounded-full text-xs font-extrabold shadow-md tracking-wide text-center w-full max-w-[170px] truncate" title={doctor.name}>
                    {doctor.name}
                  </div>
                </div>

                {/* Right Side: Details & Qualifications */}
                <div className="space-y-3 flex-1 w-full pt-1 sm:pt-0">
                  
                  {/* Doctor Name & Experience Badge Header Track */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#2A102D] tracking-tight">
                      {doctor.name}
                    </h3>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FAF3FB] border border-[#652D6C]/20 text-[#652D6C] text-[11px] font-black uppercase tracking-wider shadow-sm shrink-0">
                      {doctor.expBadge}
                    </span>
                  </div>

                  {/* Title / Designation */}
                  <p className="text-xs sm:text-sm font-bold text-[#652D6C]">
                    {doctor.title}
                  </p>

                  {/* Qualifications Pill Box (matching reference image) */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF3FB] border border-[#652D6C]/15 flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#9A389F] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-xs font-bold text-[#4D1F53] leading-snug">
                      {doctor.qualifications}
                    </p>
                  </div>

                  {/* Bio Description */}
                  <p className="text-xs sm:text-sm text-[#56335B] font-medium leading-relaxed">
                    {doctor.bio}
                  </p>

                </div>

              </div>

              {/* Bottom Achievement Ribbon Badge */}
              <div className="mt-6 pt-4 border-t border-[#652D6C]/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#652D6C]">
                  <Award className="w-4 h-4 text-[#9A389F] shrink-0" />
                  <span>{doctor.achievementBadge}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
