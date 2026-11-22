# KOMITKABE Official Website (Komunitas IT Kawasan Industri)

Website profil resmi **KOMITKABE** (*Komunitas IT Kawasan Industri* — koridor Bekasi, Cikarang, Karawang, dan sekitarnya). Dibangun dengan arsitektur **100% Static Data Config** tanpa database, cepat, responsif, beranimasi halus, dan siap di-deploy langsung ke **Cloudflare Pages**.

> Tagline: *"Connecting people. Sharing knowledge. Building the future."*

---

## 🚀 Fitur Unggulan

1. **100% Static Configuration Layer (`src/data/`):**
   - Seluruh konten (event mendatang, histori tahunan, info komunitas, galeri foto) terisolasi di file konfigurasi TypeScript sehingga mudah diperbarui tanpa mengubah kode tampilan/komponen.
2. **Sticky Glass Navbar & Anti-FOUC Theme Switcher:**
   - Mendukung mode **Auto / Light / Dark** dengan sinkronisasi sistem operasi tanpa kedipan (*flash of unstyled content*).
   - Menggunakan logo resmi CDN KOMITKABE (adaptif mode terang & gelap).
3. **Hero Section & Live Countdown ITCG:**
   - Menghitung mundur secara *real-time* (Hari, Jam, Menit, Detik) menuju event *IT Community Gathering* (ITCG) edisi berikutnya.
   - Status badge dinamis (*Registration Open*, *Upcoming*, dll.) dengan fallback rapi jika tanggal event telah tercapai.
4. **Tentang Komunitas & Animated Metrics:**
   - Visi & 4 pilar misi pergerakan komunitas.
   - *Animated counter* metrik praktisi IT (650+ praktisi, 180+ perusahaan kawasan, 12+ kawasan industri, 8+ edisi gathering).
   - Daftar representasi kawasan industri (Jababeka, MM2100, EJIP, GIIC, BIIE, Suryacipta, KIIC, dll.).
5. **Jejak & Info ITCG Sebelumnya (Interactive Year Tabs / Timeline):**
   - Transisi tab mulus berbasis *Framer Motion*.
   - Detail venue, jumlah peserta, highlight topik, narasumber, dan preview galeri dokumentasi per edisi.
6. **Galeri Dokumentasi Interaktif (Filter + Lightbox):**
   - Filter foto berdasarkan kategori/event (*ITCG 2024*, *ITCG 2025*, *Workshop*, *Gathering*).
   - Modal Lightbox layar penuh dengan navigasi keyboard (`ArrowLeft`, `ArrowRight`, `Escape`) serta *touch swipe* pada perangkat mobile.
7. **Kontak, Kolaborasi & Footer Wave:**
   - Pintu kemitraan sponsor/vendor dan pendaftaran praktisi IT.
   - Footer wave SVG resmi menyatu dengan navy `#092f78`.
8. **Cloudflare Pages Ready:**
   - Dilengkapi `public/_headers` untuk keamanan (`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`) dan *immutable caching* untuk aset statis.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animasi:** [Framer Motion](https://www.framer.com/motion/)
- **Ikon:** [Lucide React](https://lucide.dev/)
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 📁 Struktur Data Config (`src/data/`)

Untuk memperbarui konten website, cukup sunting file di dalam direktori `src/data/`:

| File | Keterangan |
| :--- | :--- |
| `src/data/siteConfig.ts` | Profil komunitas, visi, misi, tautan media sosial, kontak sekretariat, dan statistik komunitas. |
| `src/data/itcgUpcoming.ts` | Konfigurasi agenda ITCG mendatang (target tanggal countdown ISO-8601, tema, venue, tautan pendaftaran). |
| `src/data/itcgHistory.ts` | Daftar kegiatan dan konferensi ITCG sebelumnya per tahun (ringkasan, topik, peserta, foto dokumentasi). |
| `src/data/gallery.ts` | Koleksi dokumentasi foto dari CDN, kategori filter, dan keterangan foto. |

---

## 💻 Panduan Pengembangan & Pengujian Lokal

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server Vite (HMR)
npm run dev

# 3. Build untuk produksi (Cloudflare Pages / Workers)
npm run build

# 4. Preview hasil build produksi secara lokal dengan Vite
npm run preview

# 5. Uji coba lokal menggunakan Cloudflare Workers Static Assets (Wrangler)
npm run preview:worker
```

---

## ☁️ Panduan Deploy ke Cloudflare

### Opsi A: Cloudflare Workers Static Assets (via Wrangler CLI)
File konfigurasi [wrangler.jsonc](file:///home/trisf/Dev/komitkabe-web/wrangler.jsonc) sudah tersedia di root project:
```bash
# Uji coba build tanpa deploy ke Cloudflare
npx wrangler deploy --dry-run

# Deploy langsung ke Cloudflare Workers
npm run deploy
# atau
npx wrangler deploy
```

### Opsi B: Cloudflare Pages (Git Integration)
1. Hubungkan repositori GitHub/GitLab ke Cloudflare Pages.
2. Pengaturan build pada dashboard Cloudflare Pages:
   - **Framework Preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. File [public/_headers](file:///home/trisf/Dev/komitkabe-web/public/_headers) akan secara otomatis diterapkan oleh Cloudflare Pages untuk mengamankan HTTP response headers dan caching.
