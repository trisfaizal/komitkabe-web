import React from 'react';
import { Linkedin, Instagram, Mail, MessageCircle, ExternalLink, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden mt-12">
      {/* SVG Footer Waves */}
      <div className="w-full leading-none pointer-events-none select-none">
        <img
          src={siteConfig.logos.footerWave}
          alt=""
          aria-hidden="true"
          className="w-full h-auto block translate-y-[2px]"
        />
      </div>

      {/* Main Navy Footer Container */}
      <div className="bg-[#092f78] text-white pt-10 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-t border-[#092f78]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <img
                src="/assets/dark-logo.webp"
                alt={siteConfig.name}
                className="h-9 md:h-10 w-auto object-contain"
              />

              <p className="text-sm font-medium text-blue-100/90 leading-relaxed max-w-sm">
                "{siteConfig.tagline}"
              </p>

              <p className="text-xs text-blue-200/80 leading-relaxed max-w-sm">
                Menghubungkan praktisi IT manufaktur di koridor industri Bekasi, Cikarang, Karawang, dan Jawa Barat untuk saling berbagi solusi dan mengakselerasi transformasi digital.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Navigasi Cepat
              </h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="#tentang" className="hover:text-white hover:underline transition-colors">
                    Tentang Komunitas
                  </a>
                </li>
                <li>
                  <a href="#itcg" className="hover:text-white hover:underline transition-colors">
                    Rekam Jejak ITCG
                  </a>
                </li>
                <li>
                  <a href="#galeri" className="hover:text-white hover:underline transition-colors">
                    Galeri Dokumentasi
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="hover:text-white hover:underline transition-colors">
                    Kontak & Kolaborasi
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.itcgPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-red-300 hover:text-white font-semibold transition-colors"
                  >
                    <span>Portal Khusus ITCG</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Socials Column */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Sekretariat & Kanal Resmi
              </h4>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                {siteConfig.contact.address}
              </p>
              <p className="text-xs text-blue-200">
                Email: <a href={`mailto:${siteConfig.contact.email}`} className="underline hover:text-white">{siteConfig.contact.email}</a>
              </p>
              <p className="text-xs text-blue-200">
                WhatsApp: <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{siteConfig.contact.whatsapp}</a>
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="https://linkedin.com/company/komitkabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn KOMITKABE"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/komitkabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram KOMITKABE"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Komunitas"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  aria-label="Email Sekretariat"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/80">
            <div>
              © 2006 - {new Date().getFullYear()} KOMITKABE (Komunitas IT Kawasan Industri). Hak Cipta Dilindungi.
            </div>
            <div className="flex items-center gap-1 text-blue-200/90">
              <span>Dikelola dengan</span>
              <Heart className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
              <span>oleh Relawan & Praktisi IT Kawasan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
