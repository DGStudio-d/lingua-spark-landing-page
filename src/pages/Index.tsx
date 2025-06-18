
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { LanguageCards } from '@/components/LanguageCards';
import { FeaturedTeachers } from '@/components/FeaturedTeachers';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { FeaturedQuizzes } from '@/components/FeaturedQuizzes';
import { LevelAssessment } from '@/components/LevelAssessment';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LanguageCards />
        <FeaturedTeachers />
        <TestimonialsCarousel />
        <FeaturedQuizzes />
        <LevelAssessment />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
