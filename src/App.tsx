import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ItcgHistory } from './components/ItcgHistory';
import { Gallery } from './components/Gallery';
import { ContactCollaboration } from './components/ContactCollaboration';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { GalleryItem, galleryItems } from './data/gallery';

export const App: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [currentGalleryList, setCurrentGalleryList] = useState<GalleryItem[]>(galleryItems);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleSelectPhoto = (item: GalleryItem, allFilteredItems: GalleryItem[]) => {
    setSelectedPhoto(item);
    setCurrentGalleryList(allFilteredItems);
    setIsLightboxOpen(true);
  };

  const handleHistoryPhotoClick = (url: string, caption: string, title: string) => {
    const tempItem: GalleryItem = {
      id: `history-${Date.now()}`,
      title,
      category: 'itcg-2024',
      year: 2024,
      url,
      caption,
      event: 'Dokumentasi ITCG'
    };
    setSelectedPhoto(tempItem);
    setCurrentGalleryList([tempItem]);
    setIsLightboxOpen(true);
  };

  const handleSelectLightboxIndex = (index: number) => {
    if (index >= 0 && index < currentGalleryList.length) {
      setSelectedPhoto(currentGalleryList[index]);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-200">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <About />
          <ItcgHistory onPhotoClick={handleHistoryPhotoClick} />
          <Gallery onSelectPhoto={handleSelectPhoto} />
          <ContactCollaboration />
        </main>

        <Footer />

        {/* Global Lightbox Modal */}
        <LightboxModal
          isOpen={isLightboxOpen}
          item={selectedPhoto}
          items={currentGalleryList}
          onClose={() => setIsLightboxOpen(false)}
          onSelectIndex={handleSelectLightboxIndex}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
