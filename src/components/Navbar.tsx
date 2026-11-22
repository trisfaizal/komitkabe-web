import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Laptop, ExternalLink } from 'lucide-react';
import { useTheme, ThemeMode } from '../context/ThemeContext';
import { siteConfig } from '../data/siteConfig';

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'ITCG', href: '#itcg' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const themeOptions: { mode: ThemeMode; label: string; icon: React.FC<{ className?: string }> }[] = [
    { mode: 'light', label: 'Light', icon: Sun },
    { mode: 'dark', label: 'Dark', icon: Moon },
    { mode: 'auto', label: 'Auto', icon: Laptop },
  ];

  const currentThemeIcon = () => {
    if (theme === 'light') return <Sun className="w-4 h-4 text-amber-500" />;
    if (theme === 'dark') return <Moon className="w-4 h-4 text-indigo-400" />;
    return <Laptop className="w-4 h-4 text-slate-500 dark:text-slate-400" />;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-dark-bg/90 backdrop-blur-md shadow-md border-b border-slate-200/70 dark:border-dark-border py-3'
          : 'bg-white/60 dark:bg-dark-bg/60 backdrop-blur-sm border-b border-slate-200/40 dark:border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Text Only */}
        <a
          href="#"
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy rounded-lg"
          aria-label="KOMITKABE Beranda"
        >
          <span className="font-extrabold text-xl tracking-tight text-brand-navy dark:text-white select-none transition-colors">
            KOM<span className="text-brand-red">I</span>TKABE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-navy dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-dark-surface/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Theme Toggle & Quick CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-dark-surface dark:hover:bg-dark-card border border-slate-200 dark:border-dark-border transition-colors flex items-center justify-center focus:outline-none"
              aria-label={`Ganti tema. Saat ini: ${theme}`}
              title={`Mode: ${theme}`}
            >
              {currentThemeIcon()}
            </button>

            {themeDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setThemeDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-32 py-1.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-xl z-20">
                  {themeOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isActive = theme === opt.mode;
                    return (
                      <button
                        key={opt.mode}
                        onClick={() => {
                          setTheme(opt.mode);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs font-medium transition-colors ${
                          isActive
                            ? 'bg-brand-navy/10 text-brand-navy dark:bg-blue-600/20 dark:text-blue-300 font-semibold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-surface'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{opt.label}</span>
                        {isActive && <span className="ml-auto text-xs">•</span>}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Quick CTA to ITCG Portal */}
          <a
            href={siteConfig.itcgPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-light dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm transition-all duration-200 active:scale-95"
          >
            <span>Portal ITCG</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Direct Theme Toggle Button */}
          <button
            onClick={() => {
              if (theme === 'auto') setTheme('light');
              else if (theme === 'light') setTheme('dark');
              else setTheme('auto');
            }}
            className="p-2 rounded-lg bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border"
            aria-label="Ganti tema"
            title={`Mode: ${theme}`}
          >
            {currentThemeIcon()}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-dark-border focus:outline-none"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/70 dark:border-dark-border bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-dark-surface"
            >
              {link.label}
            </a>
          ))}

          {/* Theme selector in mobile menu */}
          <div className="pt-2 border-t border-slate-100 dark:border-dark-border/60">
            <span className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider px-3 mb-2">
              Pilihan Mode Tampilan
            </span>
            <div className="grid grid-cols-3 gap-2 px-1">
              {themeOptions.map((opt) => {
                const Icon = opt.icon;
                const isActive = theme === opt.mode;
                return (
                  <button
                    key={opt.mode}
                    onClick={() => {
                      setTheme(opt.mode);
                    }}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium border ${
                      isActive
                        ? 'bg-brand-navy text-white border-brand-navy dark:bg-blue-600 dark:border-blue-500'
                        : 'bg-slate-50 dark:bg-dark-surface text-slate-700 dark:text-slate-300 border-slate-200 dark:border-dark-border'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-3">
            <a
              href={siteConfig.itcgPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-center font-semibold text-white bg-brand-navy hover:bg-brand-navy-light dark:bg-blue-600"
            >
              <span>Kunjungi Portal ITCG</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
