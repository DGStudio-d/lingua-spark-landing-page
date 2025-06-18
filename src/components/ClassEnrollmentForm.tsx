
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X, CreditCard, User, Mail, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const enrollmentSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  emergencyContact: z.string().min(10, 'Please enter emergency contact'),
  paymentMethod: z.enum(['credit', 'debit', 'paypal']),
  agreeTerms: z.boolean().refine(val => val === true, 'You must agree to terms and conditions')
});

type EnrollmentFormData = z.infer<typeof enrollmentSchema>;

interface ClassData {
  name: string;
  level: string;
  price: number;
  duration: string;
  sessionsPerWeek: number; // Assuming this is a number based on context elsewhere
}

interface ClassEnrollmentFormProps {
  classData: ClassData;
  onClose: () => void;
}

const ClassEnrollmentForm: React.FC<ClassEnrollmentFormProps> = ({ classData, onClose }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<EnrollmentFormData>({
    resolver: zodResolver(enrollmentSchema)
  });

  const onSubmit = async (data: EnrollmentFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Enrollment data:', data);
      // Handle successful enrollment
      alert('Enrollment successful! You will receive a confirmation email shortly.');
      onClose();
    } catch (error) {
      console.error('Enrollment failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <Card>
          <CardHeader className="relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <CardTitle className="text-2xl">Enroll in {classData.name}</CardTitle>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Badge>{classData.level}</Badge>
              <span>${classData.price}</span>
              <span>{classData.duration}</span>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        {...register('firstName')}
                        className={errors.firstName ? 'border-red-500' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        {...register('lastName')}
                        className={errors.lastName ? 'border-red-500' : ''}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      {...register('emergencyContact')}
                      className={errors.emergencyContact ? 'border-red-500' : ''}
                    />
                    {errors.emergencyContact && (
                      <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full"
                  >
                    Continue to Payment
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Payment Information
                  </h3>
                  
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Class Fee</span>
                      <span className="text-xl font-bold">${classData.price}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {classData.duration} • {classData.sessionsPerWeek} sessions per week
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Payment Method</Label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" value="credit" {...register('paymentMethod')} />
                        <span>Credit Card</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" value="debit" {...register('paymentMethod')} />
                        <span>Debit Card</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" value="paypal" {...register('paymentMethod')} />
                        <span>PayPal</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      {...register('agreeTerms')}
                      className="mt-1"
                    />
                    <label className="text-sm text-gray-600">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  {errors.agreeTerms && (
                    <p className="text-red-500 text-sm">{errors.agreeTerms.message}</p>
                  )}
                  
                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1"
                    >
                      {isLoading ? 'Processing...' : 'Complete Enrollment'}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ClassEnrollmentForm;
