import React from 'react';
import { Mail, Linkedin, Instagram, MessageCircle, ExternalLink, Handshake, Users2, Sparkles, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ContactCollaboration: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-sky-600" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-pink-600" />;
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5 text-emerald-500" />;
      case 'mail':
        return <Mail className="w-5 h-5 text-brand-red" />;
      default:
        return <ExternalLink className="w-5 h-5 text-brand-navy dark:text-blue-400" />;
    }
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 relative scroll-mt-20 bg-slate-100/50 dark:bg-dark-surface/30 border-t border-slate-200/60 dark:border-dark-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/20 mb-3">
            <Handshake className="w-3.5 h-3.5" />
            <span>Kolaborasi & Kemitraan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mari Bersinergi Bersama KOMITKABE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Terbuka untuk praktisi IT industri manufaktur, vendor solusi teknologi, akademisi, dan asosiasi industri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Card: Ajakan Bergabung Praktisi */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 w-fit rounded-xl bg-brand-navy/10 dark:bg-blue-500/20 text-brand-navy dark:text-blue-300 mb-6">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Untuk Praktisi IT Kawasan Industri
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Apakah Anda bekerja di bagian IT Support, System/Network Engineer, ERP Consultant, OT Engineer, atau IT Management di perusahaan kawasan industri?
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy dark:bg-blue-400" />
                  <span>Akses grup diskusi & troubleshooting langsung antar rekan seprofesi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy dark:bg-blue-400" />
                  <span>Prioritas tiket pendaftaran seminar & workshop IT Community Gathering</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy dark:bg-blue-400" />
                  <span>Informasi karir, benchmark teknologi, dan kunjungan industri</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/6281290008888?text=Halo%20Pengurus%20KOMITKABE%2C%20saya%20praktisi%20IT%20ingin%20bergabung%20dengan%20komunitas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-white bg-brand-navy hover:bg-brand-navy-light dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Gabung Komunitas (WhatsApp)</span>
            </a>
          </div>

          {/* Card: Kemitraan & Sponsorship */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 w-fit rounded-xl bg-brand-red/10 dark:bg-brand-red/20 text-brand-red dark:text-red-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Kemitraan Vendor, Sponsor & Media
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Kenalkan solusi teknologi Anda secara langsung kepada ratusan pengambil keputusan (decision makers) dan profesional IT di koridor manufaktur terbesar Asia Tenggara.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red dark:bg-red-400" />
                  <span>Slot Booth Pameran & Live Demo di IT Community Gathering</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red dark:bg-red-400" />
                  <span>Peluang Keynote Presentation & Tech Talk Session</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red dark:bg-red-400" />
                  <span>Branding resmi di seluruh materi publikasi & website portal</span>
                </li>
              </ul>
            </div>

            <a
              href="mailto:official@komitkabe.id?subject=Pengajuan%20Kemitraan%20%2F%20Sponsorship%20KOMITKABE"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-bold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-dark-surface dark:hover:bg-dark-border border border-slate-200 dark:border-dark-border transition-all active:scale-95"
            >
              <Mail className="w-4 h-4 text-brand-red" />
              <span>Hubungi Sekretariat via Email</span>
            </a>
          </div>
        </div>

        {/* Social & Channel Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border hover:border-brand-navy/30 dark:hover:border-blue-500/30 hover:shadow-md transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-dark-border group-hover:scale-110 transition-transform">
                {getSocialIcon(social.icon)}
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider block">
                  {social.platform}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate block group-hover:text-brand-navy dark:group-hover:text-blue-400 transition-colors">
                  {social.label}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Region & Secretariat Footer Note */}
        <div className="mt-10 p-4 rounded-xl bg-white/60 dark:bg-dark-card/60 border border-slate-200/60 dark:border-dark-border flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-dark-muted">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-red shrink-0" />
            <span><strong>Wilayah Layanan:</strong> {siteConfig.contact.region}</span>
          </div>
          <div>
            <span><strong>Sekretariat:</strong> {siteConfig.contact.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
