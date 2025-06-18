
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface ClassScheduleInfo { // Renamed from ClassScheduleData to be more specific
  schedule: {
    time: string;
    days: string[];
  };
  // Add other properties used from classData if any
  // For example, if classData.name was used: name?: string;
}

interface ClassScheduleCalendarProps {
  classData: ClassScheduleInfo;
}

const ClassScheduleCalendar: React.FC<ClassScheduleCalendarProps> = ({ classData }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Mock schedule data - in real app, this would come from API
  const sessions = [
    { date: '2024-02-15', topic: 'Introduction & Travel Vocabulary', status: 'upcoming' },
    { date: '2024-02-18', topic: 'Travel Scenarios Practice', status: 'upcoming' },
    { date: '2024-02-22', topic: 'Food & Dining Conversations', status: 'upcoming' },
    { date: '2024-02-25', topic: 'Restaurant Role Play', status: 'upcoming' },
    { date: '2024-03-01', topic: 'Shopping & Bargaining', status: 'upcoming' },
    { date: '2024-03-05', topic: 'Market Visit Simulation', status: 'upcoming' },
    { date: '2024-03-08', topic: 'Health & Emergency Vocabulary', status: 'upcoming' },
    { date: '2024-03-12', topic: 'Doctor Visit Practice', status: 'upcoming' }
  ];

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Class Schedule Overview
          </CardTitle>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {classData.schedule.time}
            </div>
            <div>
              {classData.schedule.days.join(', ')}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Room 205, Language Center
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Upcoming Sessions</h3>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={prevMonth}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="font-medium">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <Button variant="outline" size="sm" onClick={nextMonth}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {sessions.slice(0, 6).map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-blue-600">
                        {formatDate(session.date)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {classData.schedule.time.split(' - ')[0]}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Session {index + 1}</h4>
                      <p className="text-sm text-gray-600">{session.topic}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={session.status === 'upcoming' ? 'default' : 'secondary'}
                    >
                      {session.status}
                    </Badge>
                    {session.status === 'upcoming' && (
                      <Button variant="outline" size="sm">
                        Join Online
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Class Information</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-blue-700 font-medium">Total Sessions:</span>
                  <span className="ml-2">16 sessions</span>
                </div>
                <div>
                  <span className="text-blue-700 font-medium">Remaining:</span>
                  <span className="ml-2">8 sessions</span>
                </div>
                <div>
                  <span className="text-blue-700 font-medium">Progress:</span>
                  <span className="ml-2">50% complete</span>
                </div>
                <div>
                  <span className="text-blue-700 font-medium">Next Class:</span>
                  <span className="ml-2">Feb 15, 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Important Dates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg">
              <div>
                <div className="font-medium text-green-800">Course Start</div>
                <div className="text-sm text-green-600">February 15, 2024</div>
              </div>
              <Badge className="bg-green-100 text-green-800">Start</Badge>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div>
                <div className="font-medium text-yellow-800">Mid-term Assessment</div>
                <div className="text-sm text-yellow-600">March 15, 2024</div>
              </div>
              <Badge className="bg-yellow-100 text-yellow-800">Assessment</Badge>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-red-50 border border-red-200 rounded-lg">
              <div>
                <div className="font-medium text-red-800">Course End</div>
                <div className="text-sm text-red-600">April 11, 2024</div>
              </div>
              <Badge className="bg-red-100 text-red-800">End</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassScheduleCalendar;
