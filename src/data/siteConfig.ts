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

export interface CoreValueItem {
  letter: string;
  word: string;
  description: string;
}

export interface SteeringCommitteeMember {
  name: string;
  role: string;
  company: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  shortName: string;
  tagline: string;
  motto: string;
  description: string;
  historyIntro: string;
  historySectors: string;
  industrySectors: string[];
  vision: string;
  missions: string[];
  coreValues: CoreValueItem[];
  chairmanQuote: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  };
  steeringCommittee: SteeringCommitteeMember[];
  logos: {
    light: string;
    dark: string;
    footerWave: string;
  };
  connectUrl: string;
  itcgUrl: string;
  itcgPortalUrl: string;
  socials: SocialLink[];
  contact: {
    email: string;
    partnershipEmail: string;
    whatsapp: string;
    whatsappUrl: string;
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
  motto: "The Power of Collaborations",
  description: "Berawal dari pertemuan para praktisi IT di Kawasan Industri EJIP dan Lippo Cikarang pada tahun 2006, KOMITKABE tumbuh menjadi komunitas profesional yang mempererat jejaring, mendorong pertukaran pengetahuan, dan membangun kolaborasi lintas perusahaan di kawasan industri.",
  historyIntro: "Berawal dari pertemuan para praktisi IT di Kawasan Industri EJIP dan Lippo Cikarang pada tahun 2006, KOMITKABE tumbuh menjadi komunitas profesional yang mempererat jejaring, mendorong pertukaran pengetahuan, dan membangun kolaborasi lintas perusahaan di kawasan industri.",
  historySectors: "Dengan anggota yang berasal dari beragam sektor (mulai dari otomotif, elektronik, farmasi, makanan dan minuman, logistik, hingga kesehatan), KOMITKABE menjadi ruang bagi para praktisi IT untuk memperluas wawasan, mengembangkan kompetensi, serta menjalankan pertemuan rutin bulanan bersama vendor teknologi dan gelaran akbar IT Community Gathering (ITCG).",
  industrySectors: [
    "Otomotif",
    "Elektronik",
    "Farmasi",
    "Food & Beverage",
    "Logistik",
    "Kesehatan"
  ],
  vision: "Menjadikan KOMITKABE komunitas IT terbaik dalam kuantitas dan kualitas di lingkungan kawasan industri.",
  missions: [
    "Memperkenalkan dan mempromosikan KOMITKABE sebagai komunitas untuk IT di kawasan industri",
    "Berkontribusi untuk memberikan benefit baik kepada perusahaan, seluruh anggotanya, maupun masyarakat sekitarnya",
    "Sebagai sarana dan media untuk sharing knowledge dan upgrade knowledge",
    "Membuat kerjasama dengan pihak luar yang dianggap mampu berkontribusi terhadap kemajuan organisasi",
    "Berkontribusi pada masyarakat sekitarnya"
  ],
  coreValues: [
    { letter: "C", word: "Collaboration", description: "Membangun sinergi dan kolaborasi teknologi lintas perusahaan di koridor industri." },
    { letter: "O", word: "Ownership", description: "Memiliki rasa kepedulian bersama untuk memajukan komunitas dan anggotanya." },
    { letter: "N", word: "Networking", description: "Menjalin jejaring profesional yang solid antar praktisi IT kawasan manufaktur." },
    { letter: "N", word: "Noble Impact", description: "Menghadirkan dampak positif yang bernilai bagi industri, organisasi, dan masyarakat." },
    { letter: "E", word: "Excellence", description: "Berkomitmen pada mutu, standar keandalan sistem, dan keunggulan kompetensi." },
    { letter: "C", word: "Continuous Learning", description: "Terus meningkatkan wawasan dan beradaptasi dengan perkembangan teknologi terkini." },
    { letter: "T", word: "Trust", description: "Menjaga integritas, keterbukaan, dan saling percaya dalam ekosistem profesional." }
  ],
  chairmanQuote: {
    quote: "20 tahun adalah tonggak kebanggaan sekaligus awal perjalanan baru bagi KOMITKABE. Dengan semangat CONNECT, kita terus memperkuat persaudaraan, membangun kolaborasi, serta menghadirkan dampak positif bagi anggota, organisasi, dan masyarakat.",
    author: "Miswadi Abu Ihsan",
    role: "Chairman KOMITKABE",
    company: "PT. Kiyokuni Indonesia",
    avatar: "/images/chairman.webp"
  },
  steeringCommittee: [
    {
      name: "Miswadi Abu Ihsan",
      role: "Chairman",
      company: "PT. Kiyokuni Indonesia"
    },
    {
      name: "Noviyanto Wijaya",
      role: "Vice Chairman",
      company: "PT. Kawashima Engineering Plastic Indonesia"
    },
    {
      name: "Putri Khaerani",
      role: "General Secretary",
      company: "Jababeka"
    },
    {
      name: "Heru Pramono",
      role: "General Treasurer",
      company: "PT. Nitto Materials Indonesia"
    }
  ],
  logos: {
    light: "/assets/light-logo.webp",
    dark: "/assets/dark-logo.webp",
    footerWave: "/assets/komitkabe-footer-waves.svg"
  },
  connectUrl: "https://connect.komitkabe.id/",
  itcgUrl: "https://itcg.komitkabe.id",
  itcgPortalUrl: "https://itcg.komitkabe.id",
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
      label: "+62 821-2299-090",
      url: "https://wa.me/628212299090?text=Halo%20Pengurus%20KOMITKABE%2C%20saya%20ingin%20bertanya%20mengenai%20komunitas",
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
    partnershipEmail: "partnership@komitkabe.id",
    whatsapp: "+62 821-2299-090",
    whatsappUrl: "https://wa.me/628212299090?text=Halo%20Pengurus%20KOMITKABE%2C%20saya%20ingin%20bertanya%20mengenai%20komunitas",
    address: "Kawasan Industri Jababeka, Cikarang, Kab. Bekasi, Jawa Barat",
    region: "Bekasi - Cikarang - Karawang & Sekitarnya"
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
