
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import LanguageCards from '../components/LanguageCards';
import FeaturedTeachers from '../components/FeaturedTeachers';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ClassSchedule from '../components/ClassSchedule';
import FeaturedQuizzes from '../components/FeaturedQuizzes';
import LevelAssessment from '../components/LevelAssessment';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Mock API functions (replace with real endpoints)
const fetchLanguages = async () => {
  // Simulating API call
  return [
    { id: 1, name: 'English', flag: '🇺🇸', description: 'Master the global language of business and communication', students: 2500 },
    { id: 2, name: 'Spanish', flag: '🇪🇸', description: 'Learn the romance language spoken by 500M+ people worldwide', students: 1800 },
    { id: 3, name: 'French', flag: '🇫🇷', description: 'Discover the language of love, culture, and diplomacy', students: 1200 },
    { id: 4, name: 'German', flag: '🇩🇪', description: 'Excel in the language of innovation and engineering', students: 900 },
    { id: 5, name: 'Mandarin', flag: '🇨🇳', description: 'Connect with the world\'s most spoken language', students: 1500 },
    { id: 6, name: 'Japanese', flag: '🇯🇵', description: 'Explore the fascinating culture through its unique language', students: 800 }
  ];
};

const fetchTeachers = async () => {
  return [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      language: 'English', 
      specialization: 'Business English & IELTS Prep',
      experience: '8 years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b840?w=300&h=300&fit=crop&crop=face',
      rating: 4.9
    },
    { 
      id: 2, 
      name: 'Carlos Rodriguez', 
      language: 'Spanish', 
      specialization: 'Conversational Spanish & Culture',
      experience: '6 years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      rating: 4.8
    },
    { 
      id: 3, 
      name: 'Marie Dubois', 
      language: 'French', 
      specialization: 'DELF/DALF Preparation',
      experience: '10 years',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      rating: 4.9
    }
  ];
};

const fetchTestimonials = async () => {
  return [
    {
      id: 1,
      name: 'Alex Chen',
      course: 'Spanish Intermediate',
      rating: 5,
      text: 'The teaching methodology here is exceptional. I went from beginner to conversational in just 6 months!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Emma Wilson',
      course: 'French Advanced',
      rating: 5,
      text: 'Amazing teachers and interactive lessons. I passed my DALF C1 exam with flying colors!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'David Kim',
      course: 'English Business',
      rating: 5,
      text: 'The business English course helped me get promoted at work. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face'
    }
  ];
};

const fetchQuizzes = async () => {
  return [
    {
      id: 1,
      title: 'English Grammar Mastery',
      language: 'English',
      difficulty: 'Intermediate',
      questions: 25,
      completions: 1240,
      averageScore: 78
    },
    {
      id: 2,
      title: 'Spanish Vocabulary Builder',
      language: 'Spanish',
      difficulty: 'Beginner',
      questions: 30,
      completions: 890,
      averageScore: 85
    },
    {
      id: 3,
      title: 'French Pronunciation Challenge',
      language: 'French',
      difficulty: 'Advanced',
      questions: 20,
      completions: 340,
      averageScore: 72
    }
  ];
};

const Index = () => {
  const { data: languages } = useQuery({
    queryKey: ['languages'],
    queryFn: fetchLanguages,
  });

  const { data: teachers } = useQuery({
    queryKey: ['teachers'],
    queryFn: fetchTeachers,
  });

  const { data: testimonials } = useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
  });

  const { data: quizzes } = useQuery({
    queryKey: ['quizzes'],
    queryFn: fetchQuizzes,
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LanguageCards languages={languages} />
        <FeaturedTeachers teachers={teachers} />
        <TestimonialsCarousel testimonials={testimonials} />
        <ClassSchedule />
        <FeaturedQuizzes quizzes={quizzes} />
        <LevelAssessment />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
