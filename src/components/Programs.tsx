import React from 'react';
import { UserCheck, CalendarCheck, Users2, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Programs: React.FC = () => {
  const programs = [
    {
      id: 'membership',
      title: 'Registrasi & Direktori Member',
      portal: 'connect.komitkabe.id',
      badge: 'Wajib Praktisi IT',
      badgeColor: 'bg-brand-red/10 text-brand-red border-brand-red/25 dark:bg-brand-red/20 dark:text-red-400',
      icon: UserCheck,
      iconColor: 'text-brand-red bg-brand-red/10 dark:bg-brand-red/20',
      description:
        'Seluruh praktisi IT di kawasan industri wajib melakukan registrasi keanggotaan resmi melalui platform KOMITKABE Connect untuk mendapatkan identitas anggota, akses komunikasi terverifikasi, serta hak partisipasi kegiatan.',
      ctaText: 'Buka Portal Connect',
      ctaUrl: siteConfig.connectUrl,
      isExternal: true,
      highlight: true
    },
    {
      id: 'monthly-events',
      title: 'Kegiatan Rutin Bulanan',
      subtitle: 'Tech & Vendor Sharing',
      portal: 'connect.komitkabe.id',
      badge: 'Pertemuan Bulanan',
      badgeColor: 'bg-brand-navy/10 text-brand-navy border-brand-navy/25 dark:bg-blue-500/20 dark:text-blue-300',
      icon: CalendarCheck,
      iconColor: 'text-brand-navy bg-brand-navy/10 dark:text-blue-400 dark:bg-blue-500/20',
      description:
        'Pertemuan rutin bulanan berisi presentasi solusi teknologi mutakhir dari vendor terkemuka, diskusi troubleshooting arsitektur pabrik, dan networking. Jadwal dan pendaftaran peserta dibuka terpusat di platform Connect.',
      ctaText: 'Jadwal Event di Connect',
      ctaUrl: siteConfig.connectUrl,
      isExternal: true
    },
    {
      id: 'congress-social',
      title: 'Kongres, Forum & Kontribusi Sosial',
      portal: 'komitkabe.id',
      badge: 'Tata Kelola & Sosial',
      badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/25 dark:bg-emerald-500/20 dark:text-emerald-300',
      icon: Users2,
      iconColor: 'text-emerald-600 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/20',
      description:
        'Musyawarah besar organisasi, evaluasi kepengurusan, konsolidasi tata kelola komunitas IT kawasan industri, serta inisiatif bakti sosial yang memberikan dampak positif bagi perusahaan dan masyarakat sekitar kawasan.',
      ctaText: 'Pelajari Misi Kami',
      ctaUrl: '#tentang',
      isExternal: false
    },
    {
      id: 'itcg',
      title: 'IT Community Gathering (ITCG)',
      portal: 'itcg.komitkabe.id',
      badge: 'Flagship Gathering',
      badgeColor: 'bg-indigo-500/10 text-indigo-700 border-indigo-500/25 dark:bg-indigo-500/20 dark:text-indigo-300',
      icon: Sparkles,
      iconColor: 'text-indigo-600 bg-indigo-500/10 dark:text-indigo-400 dark:bg-indigo-500/20',
      description:
        'Konferensi dan gathering akbar berskala besar yang diselenggarakan secara periodik dengan jadwal fleksibel. Menampilkan 30+ booth eksibisi teknologi industri, keynote session, dan gala networking pimpinan IT. Seluruh detail acara dikelola terpisah.',
      ctaText: 'Kunjungi Portal ITCG',
      ctaUrl: siteConfig.itcgUrl,
      isExternal: true
    }
  ];

  return (
    <section id="program" className="py-20 lg:py-28 relative scroll-mt-20 border-t border-slate-200/70 dark:border-slate-800/70 bg-slate-50/50 dark:bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-navy/10 text-brand-navy dark:bg-blue-500/20 dark:text-blue-300 border border-brand-navy/20 dark:border-blue-400/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-red" />
            <span>Program & Layanan Komunitas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ekosistem & Program Terintegrasi KOMITKABE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Menghubungkan praktisi IT manufaktur melalui portal keanggotaan terpusat, agenda berkala bulanan bersama vendor teknologi, serta konferensi akbar industri.
          </p>
        </div>

        {/* 4 Balanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border transition-all duration-300 hover:shadow-xl flex flex-col justify-between relative group ${
                  item.highlight
                    ? 'border-brand-red/30 dark:border-brand-red/40 shadow-md ring-1 ring-brand-red/20'
                    : 'border-slate-200/80 dark:border-dark-border shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar with Badge & Portal */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border tracking-wide ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-600 dark:text-slate-300">
                      {item.portal}
                    </span>
                  </div>

                  {/* Header Title with Icon */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`p-3 rounded-xl shrink-0 ${item.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-navy dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs font-semibold text-brand-red dark:text-red-400 mt-0.5">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2 mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card CTA Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-dark-border/60">
                  <a
                    href={item.ctaUrl}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-bold transition-all active:scale-[0.99] ${
                      item.highlight
                        ? 'bg-brand-red hover:bg-brand-red-hover text-white shadow-md shadow-brand-red/20'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-dark-surface dark:hover:bg-dark-border text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span>{item.ctaText}</span>
                    {item.isExternal ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
