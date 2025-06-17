
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ClassFAQ = () => {
  const faqs = [
    {
      question: "What materials do I need for this class?",
      answer: "All digital materials are provided through our learning platform. We recommend having a notebook for personal notes and access to a computer or tablet for interactive exercises."
    },
    {
      question: "Can I make up missed classes?",
      answer: "Yes! We offer make-up sessions for missed classes with 24-hour advance notice. You can also access recorded sessions through our online platform."
    },
    {
      question: "What if I need to withdraw from the course?",
      answer: "We offer full refunds for withdrawals within the first week of classes. After that, partial refunds are available based on the number of remaining sessions."
    },
    {
      question: "How do I know if I'm ready for this level?",
      answer: "We offer a free placement test to ensure you're in the right level. You can also schedule a consultation with our academic advisor to discuss your goals and experience."
    },
    {
      question: "Are there any additional fees?",
      answer: "The course fee includes all digital materials and access to our online platform. Optional textbooks and certification exams may have additional costs."
    },
    {
      question: "Can I switch to a different class time?",
      answer: "Subject to availability, you can switch to another class of the same level. Please contact our student services team at least one week before the desired change."
    },
    {
      question: "What technology do I need for online components?",
      answer: "You'll need a stable internet connection, a computer or tablet with camera and microphone, and a modern web browser. We'll provide technical support during your first session."
    },
    {
      question: "Do you offer private lessons as an alternative?",
      answer: "Yes! We offer private and semi-private lessons with the same instructor. Contact us for pricing and availability."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <p className="text-gray-600">Get answers to common questions about this class</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClassFAQ;
