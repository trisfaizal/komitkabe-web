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
    <section id="kontak" className="py-20 md:py-24 lg:py-28 relative scroll-mt-20 md:scroll-mt-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#060d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-12">
          {/* Card 1: Registrasi Member & Event Bulanan */}
          <div className="p-7 rounded-2xl bg-white dark:bg-dark-card border border-brand-red/30 dark:border-brand-red/40 shadow-sm flex flex-col h-full relative group hover:shadow-lg transition-all">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 w-fit rounded-xl bg-brand-red/10 dark:bg-brand-red/20 text-brand-red dark:text-red-400">
                  <Users2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-red/10 text-brand-red dark:bg-brand-red/20 dark:text-red-400 border border-brand-red/20">
                  Wajib Praktisi IT
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                Registrasi Member & Event Bulanan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Seluruh praktisi IT di kawasan industri wajib mendaftar melalui portal resmi keanggotaan KOMITKABE Connect untuk mendapatkan identitas anggota serta reservasi tiket event bulanan.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                  <span>Registrasi akun anggota resmi & ID Member</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                  <span>Jadwal & pendaftaran meetup bulanan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                  <span>Akses direktori jejaring praktisi industri</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <a
                href={siteConfig.connectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-red hover:bg-brand-red-hover shadow-md transition-all active:scale-95"
              >
                <span>Daftar di Portal Connect</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Kolaborasi Technology Partner */}
          <div className="p-7 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm flex flex-col h-full hover:shadow-lg transition-all">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 w-fit rounded-xl bg-brand-navy/10 dark:bg-blue-500/20 text-brand-navy dark:text-blue-300">
                  <Handshake className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-navy/10 text-brand-navy dark:bg-blue-500/20 dark:text-blue-300 border border-brand-navy/20">
                  Tech Partner
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                Kolaborasi Technology Partner
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Peluang bagi prinsipal dan mitra solusi teknologi (Cloud, ERP, Cyber Security, OT/IoT, Infrastructure) untuk presentasi teknologi di hadapan praktisi industri pada agenda bulanan.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy dark:bg-blue-400 shrink-0" />
                  <span>Slot presentasi & live product showcase</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy dark:bg-blue-400 shrink-0" />
                  <span>Diskusi use-case langsung dengan IT Manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy dark:bg-blue-400 shrink-0" />
                  <span>Kurasi materi oleh pengurus KOMITKABE</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <a
                href="mailto:official@komitkabe.id?subject=Pengajuan%20Sesi%20Tech%20Sharing%20KOMITKABE"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-navy hover:bg-brand-navy-light dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md transition-all active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Ajukan Sesi Tech Sharing</span>
              </a>
            </div>
          </div>

          {/* Card 3: Kemitraan Umum & Sponsorship ITCG */}
          <div className="p-7 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm flex flex-col h-full hover:shadow-lg transition-all">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 w-fit rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-500/20">
                  Flagship Gathering
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                Kemitraan & Sponsor ITCG
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                Kerja sama strategis, sponsor utama, dan pemesanan booth eksibisi pameran teknologi di konferensi akbar IT Community Gathering (ITCG). Dikelola khusus di portal ITCG.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>30+ Booth pameran & exclusive keynote slot</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>Branding nasional di seluruh media event</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>Informasi sponsorship & registrasi di portal ITCG</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <a
                href={siteConfig.itcgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-dark-surface dark:hover:bg-dark-border border border-slate-200 dark:border-dark-border shadow-sm transition-all active:scale-95"
              >
                <span>Buka Portal ITCG</span>
                <ExternalLink className="w-4 h-4 text-indigo-500" />
              </a>
            </div>
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
              className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border hover:border-brand-navy/30 dark:hover:border-blue-500/30 hover:shadow-md transition-all group min-w-0"
            >
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-dark-border group-hover:scale-110 transition-transform shrink-0">
                {getSocialIcon(social.icon)}
              </div>
              <div className="overflow-hidden min-w-0">
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
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span><strong>Sekretariat:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">{siteConfig.contact.email}</a></span>
            <span className="hidden sm:inline">•</span>
            <span><strong>WhatsApp:</strong> <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-emerald-600 dark:text-emerald-400 font-semibold">{siteConfig.contact.whatsapp}</a></span>
            <span className="hidden sm:inline">•</span>
            <span><strong>Kemitraan/Sponsor:</strong> <a href={`mailto:${siteConfig.contact.partnershipEmail}`} className="hover:underline text-indigo-600 dark:text-indigo-400 font-semibold">{siteConfig.contact.partnershipEmail}</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};
