export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  icon: 'instagram' | 'linkedin' | 'telegram' | 'mail' | 'whatsapp' | 'globe';
}

export interface MetricItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  shortName: string;
  tagline: string;
  description: string;
  vision: string;
  missions: string[];
  logos: {
    light: string;
    dark: string;
    footerWave: string;
  };
  itcgPortalUrl: string;
  socials: SocialLink[];
  contact: {
    email: string;
    whatsapp: string;
    address: string;
    region: string;
  };
  metrics: MetricItem[];
}

export const siteConfig: SiteConfig = {
  name: "KOMITKABE",
  fullName: "Komunitas IT Kawasan Industri",
  shortName: "KOMITKABE",
  tagline: "Connecting people. Sharing knowledge. Building the future.",
  description: "Berdiri sejak tahun 2006, KOMITKABE adalah wadah kolaboratif independen bagi para praktisi dan pimpinan IT di kawasan industri (Bekasi, Cikarang, Karawang, dan sekitarnya) yang aktif mengadakan pertemuan rutin bulanan bersama vendor teknologi serta gelaran akbar IT Community Gathering (ITCG).",
  vision: "Menjadikan KOMITKABE komunitas IT terbaik dalam kuantitas dan kualitas di lingkungan kawasan industri.",
  missions: [
    "Memperkenalkan dan mempromosikan KOMITKABE sebagai komunitas untuk IT di kawasan industri",
    "Berkontribusi untuk memberikan benefit baik kepada perusahaan, seluruh anggotanya, maupun masyarakat sekitarnya",
    "Sebagai sarana dan media untuk sharing knowledge dan upgrade knowledge",
    "Membuat kerjasama dengan pihak luar yang dianggap mampu berkontribusi terhadap kemajuan organisasi",
    "Berkontribusi pada masyarakat sekitarnya"
  ],
  logos: {
    light: "/assets/light-logo.webp",
    dark: "/assets/dark-logo.webp",
    footerWave: "/assets/komitkabe-footer-waves.svg"
  },
  itcgPortalUrl: "https://itcg.komitkabe.org",
  socials: [
    {
      platform: "LinkedIn",
      label: "KOMITKABE Official",
      url: "https://linkedin.com/company/komitkabe",
      icon: "linkedin"
    },
    {
      platform: "Instagram",
      label: "@komitkabe",
      url: "https://instagram.com/komitkabe",
      icon: "instagram"
    },
    {
      platform: "WhatsApp",
      label: "Komunitas Pengurus KOMITKABE",
      url: "https://wa.me/6281290008888",
      icon: "whatsapp"
    },
    {
      platform: "Email",
      label: "official@komitkabe.id",
      url: "mailto:official@komitkabe.id",
      icon: "mail"
    }
  ],
  contact: {
    email: "official@komitkabe.id",
    whatsapp: "+62 812-9000-8888",
    address: "Kawasan Industri Jababeka, Cikarang, Kab. Bekasi, Jawa Barat",
    region: "Bekasi — Cikarang — Karawang & Sekitarnya"
  },
  metrics: [
    {
      value: 467,
      suffix: "+",
      label: "Member & Praktisi IT",
      description: "Anggota aktif dari berbagai jenjang IT di perusahaan kawasan industri."
    },
    {
      value: 180,
      suffix: "+",
      label: "Perusahaan Kawasan",
      description: "Perusahaan manufaktur, logistik, otomotif, elektronik, dan FMCG."
    },
    {
      value: 12,
      suffix: "+",
      label: "Kawasan Industri",
      description: "Jababeka, MM2100, EJIP, GIIC, Suryacipta, KIM, KIIC, Delta Silicon, dll."
    },
    {
      value: 20,
      suffix: "+",
      label: "Tahun Eksis",
      description: "Berdiri sejak 2006 mewadahi sharing rutin bulanan & kolaborasi praktisi IT."
    }
  ]
};
