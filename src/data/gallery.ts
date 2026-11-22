export interface GalleryItem {
  id: string;
  title: string;
  category: 'meetup' | 'kongres' | 'itcg' | 'semua';
  year: number;
  url: string;
  caption: string;
  event: string;
  tag?: string;
}

export const galleryCategories = [
  { id: 'semua', label: 'Semua' },
  { id: 'meetup', label: 'Meetup Bulanan' },
  { id: 'kongres', label: 'Kongres & Forum' },
  { id: 'itcg', label: 'ITCG' }
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Sesi Pembukaan ITCG 2024",
    category: "itcg",
    year: 2024,
    url: "/images/events/gath-2024-01.webp",
    caption: "Presentasi narasumber utama mengenai ketahanan sistem operasional pabrik di hadapan ratusan praktisi IT.",
    event: "IT Community Gathering 2024",
    tag: "Keynote Session"
  },
  {
    id: "gal-02",
    title: "Networking & Sesi Diskusi Peserta",
    category: "itcg",
    year: 2024,
    url: "/images/events/gath-2024-02.webp",
    caption: "Antusiasme praktisi IT lintas kawasan industri dalam diskusi meja bundar dan penjajakan kolaborasi.",
    event: "IT Community Gathering 2024",
    tag: "Networking"
  },
  {
    id: "gal-03",
    title: "Sesi Tanya Jawab & Benchmark Implementasi IT",
    category: "itcg",
    year: 2025,
    url: "/images/events/gath-2024-03.webp",
    caption: "Tanya jawab kritis seputar penanganan insiden siber ransomware pada workstation industri.",
    event: "IT Community Gathering 2025",
    tag: "Q&A Plenary"
  },
  {
    id: "gal-04",
    title: "Sinergi Antar Tim IT Kawasan Industri",
    category: "meetup",
    year: 2025,
    url: "/images/events/gath-2024-04.webp",
    caption: "Kebersamaan perwakilan departemen IT dari kawasan Jababeka, MM2100, EJIP, dan GIIC.",
    event: "Regional IT Meetup",
    tag: "Community"
  },
  {
    id: "gal-05",
    title: "Workshop Hands-on OT Security",
    category: "meetup",
    year: 2024,
    url: "/images/events/gath-2024-05.webp",
    caption: "Praktek konfigurasi isolasi VLAN dan firewall industri untuk pencegahan intrusi malware.",
    event: "KOMITKABE Masterclass Workshop",
    tag: "Hands-on"
  },
  {
    id: "gal-06",
    title: "Foto Bersama Panitia & Pengurus KOMITKABE",
    category: "kongres",
    year: 2025,
    url: "/images/events/gath-2024-01.webp",
    caption: "Komitmen dedikasi pengurus relawan dalam memajukan kompetensi IT di koridor industri.",
    event: "IT Community Gathering 2025",
    tag: "Commitee & Team"
  }
];
