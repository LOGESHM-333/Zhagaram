import React, { useState } from 'react';
import { Search, Menu, X, Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TrustLogo } from './VisualAsset';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onOpenSearch }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { route: '/', label_ta: 'முகப்பு', label_en: 'Home' },
    { route: '/about', label_ta: 'எங்களைப் பற்றி', label_en: 'About' },
    { route: '/publications', label_ta: 'நூல்கள்', label_en: 'Publications' },
    { route: '/documents', label_ta: 'ஆவணங்கள்', label_en: 'Documents' },
    { route: '/videos', label_ta: 'காணொளிகள்', label_en: 'Videos' },
    { route: '/images', label_ta: 'படங்கள்', label_en: 'Gallery' },
    { route: '/events', label_ta: 'நிகழ்வுகள்', label_en: 'Events' },
    { route: '/contact', label_ta: 'தொடர்பு', label_en: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8DFD5] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4 lg:gap-8">
          
          {/* ZONE 1: Single element brand wordmark */}
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-3 text-left focus:outline-hidden group shrink-0"
            aria-label="Zhagaram Trust Homepage"
          >
            <TrustLogo size={36} className="transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-tamil-serif font-bold text-base md:text-lg text-[#132B20] tracking-tight leading-none group-hover:text-[#C85A32] transition-colors whitespace-nowrap">
                {language === 'ta' ? 'ழகரம் அறக்கட்டளை' : 'Zhagaram Trust'}
              </span>
              <span className="text-[10px] text-[#786E63] font-serif tracking-widest uppercase mt-0.5 whitespace-nowrap hidden sm:inline">
                {language === 'ta' ? 'தமிழ் அறிவுக் களஞ்சியம்' : 'Tamil Knowledge Foundation'}
              </span>
            </div>
          </button>

          {/* ZONE 2: Concise single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-xs xl:text-sm font-medium text-[#4A4036]">
            {navLinks.map(link => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => onNavigate(link.route)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#132B20] ${
                    isActive ? 'text-[#C85A32] font-semibold' : ''
                  }`}
                >
                  {language === 'ta' ? link.label_ta : link.label_en}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C85A32] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ZONE 3: 1 primary action & compact utility controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Icon Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#4A4036] hover:text-[#132B20] hover:bg-[#EFE7DE] rounded-sm transition-colors"
              aria-label={t('தேடல்', 'Search')}
              title={t('வளங்களைத் தேடுக', 'Search resources')}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Persistent Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center px-2.5 py-1.5 border border-[#D5C9BD] hover:border-[#C85A32] rounded-sm text-xs font-semibold text-[#132B20] bg-white/70 hover:bg-white transition-all whitespace-nowrap shadow-2xs"
              aria-label="Toggle Tamil and English"
              title={language === 'ta' ? 'Switch to English' : 'தமிழுக்கு மாறவும்'}
            >
              <span className={language === 'ta' ? 'text-[#C85A32] font-bold' : 'text-[#786E63]'}>தமிழ்</span>
              <span className="mx-1 text-[#A89C8E]">/</span>
              <span className={language === 'en' ? 'text-[#C85A32] font-bold' : 'text-[#786E63]'}>EN</span>
            </button>

            {/* Admin CMS Access Link */}
            <button
              onClick={() => onNavigate('/admin')}
              className={`p-1.5 border rounded-sm transition-colors text-xs flex items-center gap-1.5 whitespace-nowrap ${
                currentRoute === '/admin'
                  ? 'border-[#C85A32] bg-[#C85A32] text-white'
                  : 'border-[#D5C9BD] text-[#5C5044] hover:border-[#132B20] hover:text-[#132B20]'
              }`}
              title={t('நிர்வாக பலகை', 'Admin Portal')}
            >
              <Shield className="w-3.5 h-3.5" />
              <span className="hidden md:inline font-sans text-[11px]">
                {t('நிர்வாகம்', 'Admin')}
              </span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden p-2 text-[#4A4036] hover:text-[#132B20] rounded-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#E8DFD5] bg-[#FAF8F5] animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              {navLinks.map(link => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => {
                      onNavigate(link.route);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-3 py-2 text-sm rounded-sm transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#EFE7DE] text-[#C85A32] font-semibold'
                        : 'text-[#4A4036] hover:bg-[#F2ECE3]'
                    }`}
                  >
                    <span>{language === 'ta' ? link.label_ta : link.label_en}</span>
                    <span className="text-[11px] text-[#8C8074] font-serif italic">
                      {language === 'ta' ? link.label_en : link.label_ta}
                    </span>
                  </button>
                );
              })}
              <div className="pt-2 mt-2 border-t border-[#E8DFD5] flex justify-between items-center px-3">
                <button
                  onClick={() => {
                    onNavigate('/admin');
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs text-[#786E63] hover:text-[#C85A32] flex items-center gap-1.5 py-1"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>{t('நிர்வாகப் பகுதி (Admin Portal)', 'Administrator Portal')}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
