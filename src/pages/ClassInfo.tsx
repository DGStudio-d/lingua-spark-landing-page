import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Users, Star, BookOpen, DollarSign } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ClassEnrollmentForm from '@/components/ClassEnrollmentForm';
import ClassPhotoGallery from '@/components/ClassPhotoGallery';
import ClassFAQ from '@/components/ClassFAQ';
import SimilarClasses from '@/components/SimilarClasses';
import ClassScheduleCalendar from '@/components/ClassScheduleCalendar';

const ClassInfo = () => {
  const { classId } = useParams();
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  // Mock data - in real app, this would come from API
  const classData = {
    id: classId,
    name: "Spanish Conversation Intermediate",
    language: "Spanish",
    level: "Intermediate",
    price: 299,
    duration: "8 weeks",
    sessionsPerWeek: 2,
    sessionDuration: "90 minutes",
    capacity: 12,
    enrolled: 8,
    rating: 4.8,
    reviewCount: 24,
    description: "Immerse yourself in conversational Spanish with our intermediate course. Perfect for students who have basic Spanish knowledge and want to improve their speaking confidence.",
    schedule: {
      days: ["Tuesday", "Thursday"],
      time: "7:00 PM - 8:30 PM",
      startDate: "2024-02-15",
      endDate: "2024-04-11"
    },
    prerequisites: [
      "Completed Beginner Spanish or equivalent",
      "Basic understanding of Spanish grammar",
      "Ability to form simple sentences"
    ],
    objectives: [
      "Engage in 30-minute conversations",
      "Master intermediate grammar structures",
      "Expand vocabulary by 500+ words",
      "Understand native speaker conversations"
    ],
    teacher: {
      id: "teacher-1",
      name: "María González",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Native Spanish speaker from Barcelona with 8 years of teaching experience. Specializes in conversational Spanish and cultural immersion.",
      qualifications: [
        "MA in Spanish Literature - University of Barcelona",
        "DELE Examiner Certification",
        "8+ years teaching experience"
      ],
      rating: 4.9,
      totalStudents: 150
    },
    syllabus: [
      {
        week: 1,
        topic: "Introduction & Travel Vocabulary",
        activities: ["Ice breakers", "Airport scenarios", "Hotel bookings"]
      },
      {
        week: 2,
        topic: "Food & Dining",
        activities: ["Restaurant conversations", "Ordering food", "Cultural dining etiquette"]
      },
      {
        week: 3,
        topic: "Shopping & Bargaining",
        activities: ["Market visits", "Price negotiations", "Clothing vocabulary"]
      },
      {
        week: 4,
        topic: "Health & Emergencies",
        activities: ["Doctor visits", "Pharmacy interactions", "Emergency situations"]
      }
    ],
    reviews: [
      {
        id: 1,
        student: "Jennifer L.",
        rating: 5,
        comment: "María is an amazing teacher! I feel so much more confident speaking Spanish now.",
        date: "2024-01-15"
      },
      {
        id: 2,
        student: "David M.",
        rating: 5,
        comment: "Great class structure and very interactive. Highly recommend!",
        date: "2024-01-10"
      }
    ],
    policies: {
      cancellation: "Cancel up to 48 hours before class starts for full refund",
      refund: "Partial refunds available within first week of classes",
      makeup: "Make-up sessions available for missed classes with 24-hour notice"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div>
                    <Badge className="mb-4 bg-white/20 text-white">{classData.level}</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{classData.name}</h1>
                    <div className="flex items-center space-x-6 text-lg">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 mr-2 text-yellow-400" />
                        <span>{classData.rating} ({classData.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        <span>{classData.enrolled}/{classData.capacity} enrolled</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">${classData.price}</div>
                    <div className="text-lg opacity-90">{classData.duration}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100"
                    onClick={() => setShowEnrollmentForm(true)}
                  >
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Free Trial Class
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="teacher">Teacher</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Class Description</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{classData.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Prerequisites</h4>
                            <ul className="space-y-1">
                              {classData.prerequisites.map((prereq, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {prereq}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Learning Objectives</h4>
                            <ul className="space-y-1">
                              {classData.objectives.map((objective, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {objective}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Class Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                            <span>Duration</span>
                          </div>
                          <span className="font-medium">{classData.duration}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-3 text-blue-600" />
                            <span>Session Length</span>
                          </div>
                          <span className="font-medium">{classData.sessionDuration}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                            <span>Sessions per Week</span>
                          </div>
                          <span className="font-medium">{classData.sessionsPerWeek}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Users className="w-5 h-5 mr-3 text-blue-600" />
                            <span>Class Size</span>
                          </div>
                          <span className="font-medium">Max {classData.capacity} students</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <DollarSign className="w-5 h-5 mr-3 text-blue-600" />
                            <span>Price</span>
                          </div>
                          <span className="font-medium text-2xl text-green-600">${classData.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Policies */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Policies & Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-red-600">Cancellation Policy</h4>
                          <p className="text-sm text-gray-600">{classData.policies.cancellation}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-600">Refund Policy</h4>
                          <p className="text-sm text-gray-600">{classData.policies.refund}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-green-600">Make-up Classes</h4>
                          <p className="text-sm text-gray-600">{classData.policies.makeup}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="teacher">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="text-center md:text-left">
                          <Avatar className="w-32 h-32 mx-auto md:mx-0 mb-4">
                            <AvatarImage src={classData.teacher.photo} alt={classData.teacher.name} />
                            <AvatarFallback>{classData.teacher.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex items-center justify-center md:justify-start mb-2">
                            <Star className="w-5 h-5 text-yellow-400 mr-1" />
                            <span className="font-medium">{classData.teacher.rating}</span>
                            <span className="text-gray-500 ml-2">({classData.teacher.totalStudents} students)</span>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold mb-2">{classData.teacher.name}</h2>
                          <p className="text-gray-600 mb-6">{classData.teacher.bio}</p>
                          
                          <div>
                            <h3 className="font-semibold mb-3">Qualifications</h3>
                            <ul className="space-y-2">
                              {classData.teacher.qualifications.map((qual, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  <span className="text-gray-600">{qual}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-6">
                            <Button variant="outline">View Full Profile</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="syllabus">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Syllabus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {classData.syllabus.map((week, index) => (
                          <div key={index} className="border-l-4 border-blue-600 pl-6">
                            <div className="flex items-center mb-2">
                              <Badge variant="outline" className="mr-3">Week {week.week}</Badge>
                              <h3 className="text-lg font-semibold">{week.topic}</h3>
                            </div>
                            <div className="space-y-1">
                              {week.activities.map((activity, actIndex) => (
                                <div key={actIndex} className="flex items-center text-gray-600">
                                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                                  {activity}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="space-y-6">
                    {classData.reviews.map((review, index) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center mb-2">
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                                <span className="ml-2 font-medium">{review.student}</span>
                              </div>
                              <p className="text-gray-600">{review.comment}</p>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="schedule">
                  <ClassScheduleCalendar classData={classData} />
                </TabsContent>

                <TabsContent value="gallery">
                  <ClassPhotoGallery />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Similar Classes */}
        <SimilarClasses currentClassId={classData.id} />

        {/* FAQ Section */}
        <ClassFAQ />
      </main>

      <Footer />

      {/* Enrollment Modal */}
      {showEnrollmentForm && (
        <ClassEnrollmentForm
          classData={classData}
          onClose={() => setShowEnrollmentForm(false)}
        />
      )}
    </div>
  );
};

export default ClassInfo;
