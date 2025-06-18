
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface QuizFiltersProps {
  filters: {
    language: string;
    difficulty: string;
    duration: string;
    topic: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
}

export const QuizFilters = ({ filters, onFilterChange, onClearFilters }: QuizFiltersProps) => {
  const languages = [
    { value: '', label: 'All Languages' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'italian', label: 'Italian' },
    { value: 'portuguese', label: 'Portuguese' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'korean', label: 'Korean' },
  ];

  const difficulties = [
    { value: '', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const durations = [
    { value: '', label: 'Any Duration' },
    { value: 'short', label: 'Under 10 min' },
    { value: 'medium', label: '10-30 min' },
    { value: 'long', label: 'Over 30 min' },
  ];

  const topics = [
    { value: '', label: 'All Topics' },
    { value: 'grammar', label: 'Grammar' },
    { value: 'vocabulary', label: 'Vocabulary' },
    { value: 'listening', label: 'Listening' },
    { value: 'reading', label: 'Reading' },
    { value: 'writing', label: 'Writing' },
    { value: 'speaking', label: 'Speaking' },
    { value: 'culture', label: 'Culture' },
    { value: 'business', label: 'Business' },
  ];

  const activeFiltersCount = Object.values(filters).filter(value => value !== '').length;

  const getFilterLabel = (key: string, value: string) => {
    switch (key) {
      case 'language':
        return languages.find(l => l.value === value)?.label || value;
      case 'difficulty':
        return difficulties.find(d => d.value === value)?.label || value;
      case 'duration':
        return durations.find(d => d.value === value)?.label || value;
      case 'topic':
        return topics.find(t => t.value === value)?.label || value;
      default:
        return value;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={onClearFilters}>
              Clear All ({activeFiltersCount})
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Language</label>
            <Select value={filters.language} onValueChange={(value) => onFilterChange('language', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Difficulty</label>
            <Select value={filters.difficulty} onValueChange={(value) => onFilterChange('difficulty', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((diff) => (
                  <SelectItem key={diff.value} value={diff.value}>
                    {diff.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Duration</label>
            <Select value={filters.duration} onValueChange={(value) => onFilterChange('duration', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                {durations.map((dur) => (
                  <SelectItem key={dur.value} value={dur.value}>
                    {dur.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Topic</label>
            <Select value={filters.topic} onValueChange={(value) => onFilterChange('topic', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((topic) => (
                  <SelectItem key={topic.value} value={topic.value}>
                    {topic.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {Object.entries(filters)
                .filter(([_, value]) => value !== '')
                .map(([key, value]) => (
                  <Badge key={key} variant="secondary" className="flex items-center gap-1">
                    {getFilterLabel(key, value)}
                    <button
                      onClick={() => onFilterChange(key, '')}
                      className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
