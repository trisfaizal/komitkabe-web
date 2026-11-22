export interface ItcgUpcomingConfig {
  id: string;
  edition: string;
  title: string;
  theme: string;
  targetDate: string; // ISO-8601 string: e.g. "2027-01-16T08:00:00+07:00"
  location: {
    venue: string;
    city: string;
    mapsUrl?: string;
  };
  registration: {
    status: 'open' | 'closed' | 'early_bird' | 'ongoing' | 'upcoming';
    statusLabel: string;
    quotaText: string;
    portalUrl: string;
    isLive: boolean;
  };
  highlights: string[];
  scheduleOverview: {
    time: string;
    activity: string;
  }[];
}

export const itcgUpcoming: ItcgUpcomingConfig = {
  id: "itcg-2027",
  edition: "ITCG 6 (2027)",
  title: "6th IT Community Gathering 2027",
  theme: "INTELLIGENCE IN MOTION: Driving Smart Industry. Securing the Future.",
  targetDate: "2027-01-16T08:00:00+07:00",
  location: {
    venue: "Sutan Raja Hotel and Convention Centre",
    city: "Soreang, Bandung",
    mapsUrl: "https://maps.google.com/?q=Sutan+Raja+Hotel+and+Convention+Centre+Soreang+Bandung"
  },
  registration: {
    status: "open",
    statusLabel: "Pendaftaran & Sponsorship Dibuka",
    quotaText: "300+ IT Leaders & Practitioners (30 Technical Exhibition Booths)",
    portalUrl: "https://itcg.komitkabe.id",
    isLive: false
  },
  highlights: [
    "Pillar 01: Artificial Intelligence — Industrial Computer Vision, Predictive Quality & Smart Operations",
    "Pillar 02: Industrial IoT & OT Convergence — SCADA Integration, Edge Computing & Real-Time Telemetry",
    "Pillar 03: Zero-Trust Cybersecurity — ICS/SCADA Defense, Ransomware Mitigation & Enterprise Resilience",
    "30 Exhibition Booths & Exclusive Executive Industry Networking"
  ],
  scheduleOverview: [
    { time: "Hari 1 — 08:00 - 09:30", activity: "Registrasi, Welcome Coffee & Morning Networking Exhibition" },
    { time: "Hari 1 — 09:30 - 11:45", activity: "Opening Plenary: INTELLIGENCE IN MOTION — Driving Smart Industry" },
    { time: "Hari 1 — 13:00 - 16:30", activity: "Breakout Sessions: AI in Manufacturing, OT Convergence & Zero Trust" },
    { time: "Hari 1 — 19:00 - 21:30", activity: "Gala Dinner, Awarding & IT Leaders Night" },
    { time: "Hari 2 — 08:30 - 12:00", activity: "Tech Showcase, Community Roundtable & Closing Assembly" }
  ]
};
