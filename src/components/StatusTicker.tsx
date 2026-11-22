import React from 'react';

interface TickerMessage {
  tag: string;
  type: 'status' | 'info' | 'live' | 'node';
  text: string;
}

const tickerMessages: TickerMessage[] = [
  {
    tag: 'PORTAL_CONNECT: ACTIVE',
    type: 'live',
    text: 'Registrasi keanggotaan resmi & pendaftaran sharing event bulanan aktif di connect.komitkabe.id.'
  },
  {
    tag: 'PORTAL_UTAMA: ONLINE',
    type: 'status',
    text: 'KOMITKABE.ID beroperasi sebagai portal induk organisasi, direktori program & ekosistem kawasan.'
  },
  {
    tag: 'PORTAL_ITCG: 2027',
    type: 'info',
    text: 'Informasi rundown & sponsorship 6th IT Community Gathering 2027 dapat diakses via itcg.komitkabe.id.'
  },
  {
    tag: 'NODE: BEKASI • CIKARANG • KARAWANG',
    type: 'node',
    text: 'Connecting people. Sharing knowledge. Building the future.'
  }
];

export const StatusTicker: React.FC = () => {
  const getBadgeStyle = (type: TickerMessage['type']) => {
    switch (type) {
      case 'status':
        return 'bg-brand-red/10 text-brand-red border-brand-red/25 dark:bg-[#f10d2f]/20 dark:text-[#ff5a73] dark:border-[#f10d2f]/30';
      case 'live':
        return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/25 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30';
      case 'info':
        return 'bg-brand-navy/10 text-brand-navy border-brand-navy/20 dark:bg-blue-500/20 dark:text-[#9ec0ff] dark:border-blue-500/30';
      case 'node':
        return 'bg-slate-200/70 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700';
    }
  };

  const renderItems = (prefix: string) =>
    tickerMessages.map((item, idx) => (
      <div key={`${prefix}-${idx}`} className="inline-flex items-center gap-2.5 px-3">
        {/* Pulsing Dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f10d2f] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f10d2f]" />
        </span>

        {/* Tag Badge */}
        <span
          className={`font-mono text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md border tracking-wider uppercase shrink-0 ${getBadgeStyle(
            item.type
          )}`}
        >
          [{item.tag}]
        </span>

        {/* Message Content */}
        <span className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
          {item.text}
        </span>

        {/* Techie Separator */}
        <span className="text-slate-400 dark:text-slate-600 font-mono text-xs px-3 select-none">
          //
        </span>
      </div>
    ));

  return (
    <div
      aria-label="Status Ticker"
      className="w-full overflow-hidden border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#0b1426]/80 backdrop-blur-sm py-2.5 mask-marquee"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] select-none items-center">
        {renderItems('set1')}
        {renderItems('set2')}
      </div>
    </div>
  );
};
