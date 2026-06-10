import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './SectionTitle';
import {
  awardCeremonyImages,
  publicSpeakingImages,
  spokenEnglishImages,
  communityProgramImages,
  studentActivitiesImages,
} from '../data/galleryImages';

const PREVIEW_COUNT = 10;

const categories = [
  'All',
  'Spoken English Classes',
  'Public Speaking',
  'Award Ceremonies',
  'Student Activities',
  'Community Programs',
] as const;

type Category = (typeof categories)[number];

interface GalleryItem {
  src: string;
  category: Category;
  title: string;
  isMore?: boolean;
  allImages?: string[];
}

const staticGalleryItems: GalleryItem[] = [];

const folderCategories: Partial<Record<Category, string[]>> = {
  'Spoken English Classes': spokenEnglishImages,
  'Public Speaking': publicSpeakingImages,
  'Award Ceremonies': awardCeremonyImages,
  'Student Activities': studentActivitiesImages,
  'Community Programs': communityProgramImages,
};

function buildPreviewItems(images: string[], category: Category): GalleryItem[] {
  if (images.length <= PREVIEW_COUNT) {
    return images.map((src, i) => ({
      src,
      category,
      title: `${category} ${i + 1}`,
      isMore: false,
      allImages: images,
    }));
  }

  const preview = images.slice(0, PREVIEW_COUNT - 1).map((src, i) => ({
    src,
    category,
    title: `${category} ${i + 1}`,
    isMore: false,
    allImages: images,
  }));

  preview.push({
    src: images[PREVIEW_COUNT - 1],
    category,
    title: `${images.length - (PREVIEW_COUNT - 1)}+ more photos`,
    isMore: true,
    allImages: images,
  });

  return preview;
}

export default function Gallery() {
  const { ref, inView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], startIndex = 0) => {
    setLightboxImages(images);
    setLightboxIndex(startIndex);
  };

  const closeLightbox = () => {
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  const showPrev = () => {
    setLightboxIndex((i) => (i === 0 ? lightboxImages.length - 1 : i - 1));
  };

  const showNext = () => {
    setLightboxIndex((i) => (i === lightboxImages.length - 1 ? 0 : i + 1));
  };

  const getDisplayItems = () => {
    if (activeCategory === 'All') {
      const awardPreview = buildPreviewItems(awardCeremonyImages, 'Award Ceremonies').slice(0, 3);
      const speakingPreview = buildPreviewItems(publicSpeakingImages, 'Public Speaking').slice(0, 3);
      const englishPreview = buildPreviewItems(spokenEnglishImages, 'Spoken English Classes').slice(0, 3);
      const communityPreview = buildPreviewItems(communityProgramImages, 'Community Programs').slice(0, 3);
      return [...awardPreview, ...speakingPreview, ...englishPreview, ...communityPreview, ...staticGalleryItems];
    }

    const folderImages = folderCategories[activeCategory];
    if (folderImages) {
      return buildPreviewItems(folderImages, activeCategory);
    }

    return staticGalleryItems.filter((item) => item.category === activeCategory);
  };

  const displayItems = getDisplayItems();

  return (
    <div className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Memories"
          title="Our Gallery"
          description="Moments captured from our classes, events, and award ceremonies."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-5 py-2 font-inter text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="wait">
            {displayItems.map((item, i) => (
              <motion.button
                key={`${item.src}-${i}`}
                type="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => {
                  if (item.allImages?.length) {
                    openLightbox(
                      item.allImages,
                      item.isMore ? PREVIEW_COUNT - 1 : item.allImages.indexOf(item.src),
                    );
                  } else {
                    openLightbox([item.src], 0);
                  }
                }}
                className="group relative h-64 overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                {item.isMore && (
                  <div className="absolute inset-0 flex items-center justify-center bg-dark/60">
                    <span className="font-playfair text-4xl font-bold text-white">
                      {item.allImages ? `${item.allImages.length - (PREVIEW_COUNT - 1)}+` : '10+'}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                  <p className="font-playfair text-lg font-bold text-white">{item.title}</p>
                  <p className="font-inter text-xs text-white/70">{item.category}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightboxImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {lightboxImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); showPrev(); }}
                  className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); showNext(); }}
                  className="absolute right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            <motion.img
              key={lightboxImages[lightboxIndex]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={lightboxImages[lightboxIndex]}
              alt="Gallery"
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {lightboxImages.length > 1 && (
              <p className="absolute bottom-4 font-inter text-sm text-white/70">
                {lightboxIndex + 1} / {lightboxImages.length}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
