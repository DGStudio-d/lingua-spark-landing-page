
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

const ClassPhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=600&h=400&fit=crop",
      caption: "Modern classroom environment",
      category: "classroom"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      caption: "Comfortable learning space",
      category: "classroom"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
      caption: "School building exterior",
      category: "building"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      caption: "Interactive learning materials",
      category: "materials"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      caption: "Study materials and books",
      category: "materials"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop",
      caption: "Digital learning tools",
      category: "technology"
    }
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6">Classroom & Learning Environment</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="cursor-pointer group"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View Image</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl max-h-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClassPhotoGallery;
