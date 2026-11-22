export interface EventHistoryItem {
  id: string;
  edition: string;
  year: number;
  date?: string;
  badge: string;
  title: string;
  theme: string;
  venue: string;
  attendeesCount: string;
  companiesCount?: string;
  summary: string;
  topics: string[];
  keySpeakers?: string[];
  photos: {
    url: string;
    caption: string;
  }[];
}

export const itcgHistory: EventHistoryItem[] = [
  {
    id: "itcg-5",
    edition: "ITCG 5",
    year: 2025,
    badge: "Edisi Terakhir",
    title: "5th IT Community Gathering",
    theme: "Connect, Collaborate, Elevate",
    venue: "Albero Hotel Bogor",
    attendeesCount: "280+ IT Practitioners",
    companiesCount: "95+ Perusahaan Kawasan",
    summary: "Mempertemukan ratusan praktisi dan pimpinan IT dalam satu ekosistem solid untuk saling terhubung, berkolaborasi merumuskan solusi atas tantangan teknologi terkini, serta mengangkat standar kepemimpinan dan kapabilitas IT kawasan industri ke level yang lebih tinggi.",
    topics: [
      "Leadership & IT Management",
      "Smart Factory 4.0 Optimization",
      "Hybrid Cloud Infrastructure",
      "Talent Elevation in Industrial IT"
    ],
    photos: [
      {
        url: "/images/events/gathering-2024-2025.jpg",
        caption: "Suasana pleno kebersamaan para praktisi IT kawasan industri"
      },
      {
        url: "/images/events/gath-2024-02.webp",
        caption: "Networking interaktif dan perumusan solusi teknologi industri"
      }
    ]
  },
  {
    id: "itcg-4",
    edition: "ITCG 4",
    year: 2023,
    badge: "Synergy Milestone",
    title: "4th IT Community Gathering",
    theme: "SYNERGY: UNLEASHING THE POWER OF COLLABORATION",
    venue: "Prime Plaza Hotel Purwakarta",
    attendeesCount: "250+ IT Practitioners",
    companiesCount: "85+ Perusahaan Kawasan",
    summary: "Menyatukan kekuatan lintas perusahaan, praktisi IT, dan prinsipal teknologi untuk meruntuhkan sekat kerja yang terisolasi. Melalui pertukaran pengalaman nyata dan sinergi ekosistem, setiap organisasi mampu mempercepat inovasi, ketangguhan infrastruktur, serta pemecahan masalah bersama.",
    topics: [
      "Cross-Enterprise Synergy",
      "Industrial Cybersecurity Resilience",
      "Zero-Downtime Infrastructure",
      "Multi-Vendor Integration"
    ],
    photos: [
      {
        url: "/images/events/gath-2024-03.webp",
        caption: "Pemberian apresiasi kepada narasumber dan mitra teknologi industri"
      },
      {
        url: "/images/events/gath-2024-04.webp",
        caption: "Foto bersama pengurus KOMITKABE dan peserta ITCG 4"
      }
    ]
  },
  {
    id: "itcg-3",
    edition: "ITCG 3",
    year: 2021,
    badge: "Industry 4.0 Era",
    title: "3rd IT Community Gathering",
    theme: "Industry 4.0: Opportunity or Threat?",
    venue: "Camp Hulu Cai, Bogor",
    attendeesCount: "200+ IT Practitioners",
    companiesCount: "70+ Perusahaan Kawasan",
    summary: "Membedah dua sisi gelombang Revolusi Industri 4.0 bagi ekosistem IT lintas perusahaan. Mengupas langkah strategis mengubah disrupsi otomasi, konektivitas data, dan risiko keamanan siber menjadi peluang efisiensi operasional serta keunggulan kompetitif jangka panjang.",
    topics: [
      "Industrial Automation Disruption",
      "Data Connectivity & IoT in Plants",
      "Cyber Threat Mitigation in OT",
      "Competitive Manufacturing Strategy"
    ],
    photos: [
      {
        url: "/images/events/gath-2024-05.webp",
        caption: "Diskusi interaktif bedah tantangan Revolusi Industri 4.0"
      },
      {
        url: "/images/events/gath-2024-01.webp",
        caption: "Presentasi arsitektur otomasi dan pengamanan sistem pabrik"
      }
    ]
  },
  {
    id: "itcg-2",
    edition: "ITCG 2",
    year: 2019,
    badge: "Digital Transformation",
    title: "2nd IT Community Gathering",
    theme: "THE ROLE OF IT IN THE ERA OF DIGITAL BUSINESS TRANSFORMATION",
    venue: "Grand Mulya Bogor",
    attendeesCount: "150+ IT Practitioners",
    companiesCount: "55+ Perusahaan Kawasan",
    summary: "Menggeser paradigma divisi IT dari sekadar fungsi pendukung teknis menjadi penggerak utama transformasi bisnis digital. Membahas strategi modernisasi proses operasional, efisiensi alur kerja, serta kesiapan talenta teknologi dalam menjawab tuntutan daya saing perusahaan modern.",
    topics: [
      "Digital Business Transformation",
      "Operational Process Modernization",
      "Workflow Automation in Manufacturing",
      "Tech Talent Readiness"
    ],
    photos: [
      {
        url: "/images/events/gath-2024-01.webp",
        caption: "Keynote plenary mengenai peran strategis IT dalam bisnis manufaktur"
      },
      {
        url: "/images/events/gath-2024-02.webp",
        caption: "Sesi networking dan benchmark antar manajer IT industri"
      }
    ]
  },
  {
    id: "itcg-1",
    edition: "ITCG 1",
    year: 2017,
    badge: "Inaugural Gathering",
    title: "1st IT Community Gathering",
    theme: "THINK Safe, WORK Safe, KEEP Safe, and FEEL Safe, in the age of TECHNOLOGY",
    venue: "Harper Purwakarta",
    attendeesCount: "80+ IT Practitioners",
    companiesCount: "35+ Perusahaan Kawasan",
    summary: "Membangun kesadaran menyeluruh di kalangan praktisi IT kawasan industri bahwa adopsi teknologi harus berjalan seiring dengan budaya keselamatan dan keamanan. Mulai dari pola pikir preventif, praktik kerja aman, hingga perlindungan infrastruktur agar setiap tim dapat berinovasi dengan rasa aman.",
    topics: [
      "Industrial IT Safety Culture",
      "Preventive Mindset in Technology",
      "Infrastructure Protection",
      "Safe Innovation Practices"
    ],
    photos: [
      {
        url: "/images/events/gath-2024-04.webp",
        caption: "Momen bersejarah berkumpulnya para perintis komunitas IT kawasan industri"
      },
      {
        url: "/images/events/gath-2024-03.webp",
        caption: "Sesi perdana pembentukan jejaring silaturahmi IT industri manufaktur"
      }
    ]
  }
];
