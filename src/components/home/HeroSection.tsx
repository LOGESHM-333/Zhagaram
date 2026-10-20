import React from 'react';
import { ArrowRight, BookOpen, Calendar, Video, FileText, ImageIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  onNavigate: (route: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const tamilPictureUrl = '/assets/aistudio/WhatsApp_Image_2026-10-20_at_1.07.37_PM_8790fe47.jpeg';
  const zhagaramLogoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-20_at_1.07.36_PM_1015e3fc.jpeg';
  const mbbsBookPhotoUrl = '/assets/aistudio/WhatsApp_Image_2026-10-20_at_1.07.57_PM_9e5db21a.jpeg';

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-28 border-b border-[#E8DFD5] bg-[#FAF8F5] min-h-[85vh] flex flex-col justify-center">
      
      {/* Authentic Tamil Science, Medicine & Research Artwork Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-90 sm:opacity-95"
        style={{ backgroundImage: `url('/assets/landing-bg.jpg')` }}
      />

      {/* Gentle gradient vignette to ensure crystal-clear text readability while preserving the artwork */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/60 via-[#FAF8F5]/30 to-[#FAF8F5]/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Cultural Kicker with Zhagaram Emblem */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#132B20]/15 bg-white/70 backdrop-blur-md px-4 sm:px-6 py-3 rounded-sm shadow-2xs">
          <div className="flex items-center gap-3">
            <img
              src={zhagaramLogoUrl}
              alt="Zhagaram Emblem ழ"
              className="w-10 h-10 object-contain rounded-full shadow-2xs border border-[#E0D7CC] bg-white p-0.5"
            />
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#C85A32] block">
                {t('ழகரம் அறக்கட்டளை · கல்வி & அறிவியல் தளம்', 'Zhagaram Educational & Medical Foundation')}
              </span>
              <span className="text-[11px] text-[#5C5044] font-serif italic">
                {t('அரசு ஓமந்தூரார் மருத்துவக் கல்லூரி வளாகம், சென்னை', 'Govt. Omandurar Medical College Campus, Chennai')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#5C5044]">
            <span className="px-3 py-1 bg-emerald-900/90 text-white rounded-xs font-semibold shadow-2xs">
              {t('MBBS in Tamil — 27 விரிவுரைகள்', 'MBBS in Tamil — 27 Lectures')}
            </span>
          </div>
        </div>

        {/* Main 2-Column Split: Editorial Prose + The Supplied Tamil Picture Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography & Calls to Action with Frosted Glass Backdrop */}
          <div className="lg:col-span-7 min-w-0 flex flex-col justify-center bg-white/85 sm:bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-sm border border-[#E0D7CC]/90 shadow-md">
            
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-0.5 bg-[#C85A32]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#C85A32]">
                {t('தாய்மொழி வழி மருத்துவக் கல்வி', 'Vernacular Medical Pedagogy')}
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-tamil-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132B20] leading-[1.18] tracking-tight mb-4 break-words">
              {t(
                'தாய்மொழியில் அறிவோம். அறிவியலில் உயர்வோம்.',
                'Learn in Your Language. Grow Through Knowledge.'
              )}
            </h1>

            {/* Supporting Prose */}
            <p className="text-sm md:text-base text-[#3D342C] font-normal leading-relaxed mb-6 font-tamil-sans break-words">
              {t(
                'மருத்துவம், அறிவியல் மற்றும் உயர்கல்வி அறிவைத் தமிழில் அனைவருக்கும் கொண்டு சேர்ப்போம். இளநிலை MBBS மாணவர்களுக்கான பாடநூல்கள், உடற்கூறியல் கலைச்சொல் களஞ்சியங்கள், திறன் 2026 பயிலரங்குகள் மற்றும் ஆய்வுக் கட்டுரைகளின் அதிகாரப்பூர்வக் கூடம்.',
                'Making medical, scientific, and educational knowledge universally accessible through the richness of Tamil. Official undergraduate MBBS in Tamil textbooks, clinical glossaries, THIRAN 2026 workshops, and research archives.'
              )}
            </p>

            {/* Quick Section Shortcuts Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              <button
                onClick={() => onNavigate('/events')}
                className="p-2.5 bg-[#FAF8F5]/90 hover:bg-white border border-[#DDD3C7] hover:border-[#C85A32] rounded-sm text-left transition-all group shadow-2xs min-w-0 overflow-hidden"
              >
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#132B20] group-hover:text-[#C85A32] truncate">
                  <Calendar className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                  <span className="truncate">{t('நிகழ்வுகள்', 'Events')}</span>
                </div>
                <span className="text-[10px] text-[#786E63] block mt-0.5 truncate font-medium">
                  {t('திறன் 2026', 'THIRAN 2026')}
                </span>
              </button>

              <button
                onClick={() => onNavigate('/images')}
                className="p-2.5 bg-[#FAF8F5]/90 hover:bg-white border border-[#DDD3C7] hover:border-[#C85A32] rounded-sm text-left transition-all group shadow-2xs min-w-0 overflow-hidden"
              >
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#132B20] group-hover:text-[#C85A32] truncate">
                  <ImageIcon className="w-3.5 h-3.5 text-[#8C6D46] shrink-0" />
                  <span className="truncate">{t('படத்தொகுப்பு', 'Gallery')}</span>
                </div>
                <span className="text-[10px] text-[#786E63] block mt-0.5 truncate font-medium">
                  {t('புகைப்படங்கள்', 'Photo Archives')}
                </span>
              </button>

              <button
                onClick={() => onNavigate('/videos')}
                className="p-2.5 bg-[#FAF8F5]/90 hover:bg-white border border-[#DDD3C7] hover:border-[#C85A32] rounded-sm text-left transition-all group shadow-2xs min-w-0 overflow-hidden"
              >
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#132B20] group-hover:text-[#C85A32] truncate">
                  <Video className="w-3.5 h-3.5 text-[#B84A28] shrink-0" />
                  <span className="truncate">{t('காணொளிகள்', 'Videos')}</span>
                </div>
                <span className="text-[10px] text-[#786E63] block mt-0.5 truncate font-medium">
                  {t('விரிவுரைகள்', 'Video Lectures')}
                </span>
              </button>

              <button
                onClick={() => onNavigate('/documents')}
                className="p-2.5 bg-[#FAF8F5]/90 hover:bg-white border border-[#DDD3C7] hover:border-[#C85A32] rounded-sm text-left transition-all group shadow-2xs min-w-0 overflow-hidden"
              >
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#132B20] group-hover:text-[#C85A32] truncate">
                  <FileText className="w-3.5 h-3.5 text-[#1E4D38] shrink-0" />
                  <span className="truncate">{t('ஆவணங்கள்', 'Documents')}</span>
                </div>
                <span className="text-[10px] text-[#786E63] block mt-0.5 truncate font-medium">
                  {t('கணையாழி PDF', 'Kanaiyazhi PDF')}
                </span>
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/publications')}
                className="px-6 py-3 bg-[#C85A32] hover:bg-[#B54E29] text-white text-xs md:text-sm font-semibold rounded-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>{t('MBBS தமிழ் நூல்கள் காண்க', 'Explore MBBS Textbooks')}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={() => onNavigate('/events')}
                className="px-6 py-3 bg-white hover:bg-[#FAF8F5] border border-[#D5C9BD] text-[#132B20] text-xs md:text-sm font-semibold rounded-sm transition-colors flex items-center gap-2 shadow-2xs"
              >
                <Calendar className="w-4 h-4 text-[#C85A32] shrink-0" />
                <span>{t('திறன் 2026 பயிலரங்கம்', 'THIRAN 2026 Conclave')}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 min-w-0 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* The Supplied Tamil Picture (Focal Anchor) with Frosted Border */}
              <div className="bg-white/90 backdrop-blur-md p-3.5 sm:p-4 rounded-sm border border-[#E5DCD0] shadow-xl overflow-hidden group">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-[2px] bg-[#FAF8F5] border border-[#EFE7DE]">
                  <img
                    src={tamilPictureUrl}
                    alt="தமிழ் - அமுதே தமிழே அழகிய மொழியே எனதுயிரே"
                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-3 text-white">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#E5A086]">
                      {t('ழகரம் முகப்புத் திருவுருவம்', 'Zhagaram Emblem & Language Heritage')}
                    </span>
                    <p className="font-tamil-serif text-sm sm:text-base font-bold text-white leading-tight">
                      {t('“தமிழ்” — அமுதே தமிழே அழகிய மொழியே எனதுயிரே...', '"Tamil" — The Essence of Wisdom and Science')}
                    </p>
                  </div>
                </div>

                {/* Sub-caption bar with real books thumbnail preview */}
                <div className="mt-3 pt-3 border-t border-[#F2ECE3] flex items-center justify-between text-xs text-[#5C5044] gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={mbbsBookPhotoUrl}
                      alt="MBBS in Tamil Textbook"
                      className="w-10 h-10 object-cover rounded-xs border border-[#DDD3C7] shadow-2xs shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="font-tamil-sans font-bold text-xs text-[#132B20] block leading-tight truncate">
                        MBBS in Tamil — தொகுதி 1
                      </span>
                      <span className="text-[10px] text-[#786E63] truncate block">
                        {t('10 மாணவர்கள் & ஆசிரியர் குழு', 'By 10 Students & Teachers')}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('/publications')}
                    className="text-xs font-semibold text-[#C85A32] hover:underline flex items-center gap-1 shrink-0"
                  >
                    <span>{t('நூல் விவரம்', 'Details')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Offset Decorative Academic Seal */}
              <div className="absolute -bottom-4 -left-4 bg-[#132B20] text-white p-3 rounded-sm shadow-xl hidden sm:flex items-center gap-3 border border-[#234233] z-20">
                <img
                  src={zhagaramLogoUrl}
                  alt="ழ"
                  className="w-8 h-8 rounded-full bg-white/10 p-1"
                />
                <div>
                  <span className="text-[10px] text-[#E5A086] uppercase tracking-wider block font-semibold">
                    {t('அங்கீகரிக்கப்பட்ட பதிப்பு', 'Authentic Publications')}
                  </span>
                  <span className="text-xs font-bold text-white">
                    {t('ஏனெனில், தமிழ் பெரிது', 'Because, Tamil is Vast')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
