
import React from 'react';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface Filters {
  language: string;
  difficulty: string;
  duration: string;
  topic: string;
}

interface QuizFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const QuizFilters: React.FC<QuizFiltersProps> = ({ filters, onFiltersChange }) => {
  const updateFilter = (key: keyof Filters, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilter = (key: keyof Filters) => {
    updateFilter(key, '');
  };

  const clearAllFilters = () => {
    onFiltersChange({
      language: '',
      difficulty: '',
      duration: '',
      topic: ''
    });
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Filters</h3>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Language Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Language</label>
          <Select value={filters.language} onValueChange={(value) => updateFilter('language', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Languages</SelectItem>
              <SelectItem value="Spanish">Spanish</SelectItem>
              <SelectItem value="French">French</SelectItem>
              <SelectItem value="German">German</SelectItem>
              <SelectItem value="Italian">Italian</SelectItem>
              <SelectItem value="Portuguese">Portuguese</SelectItem>
              <SelectItem value="Japanese">Japanese</SelectItem>
              <SelectItem value="Chinese">Chinese</SelectItem>
              <SelectItem value="English">English</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Difficulty Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Difficulty</label>
          <Select value={filters.difficulty} onValueChange={(value) => updateFilter('difficulty', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Duration Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Duration</label>
          <Select value={filters.duration} onValueChange={(value) => updateFilter('duration', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any Duration</SelectItem>
              <SelectItem value="short">Short (≤ 20 min)</SelectItem>
              <SelectItem value="medium">Medium (21-40 min)</SelectItem>
              <SelectItem value="long">Long (> 40 min)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Topic Filter */}
        <div>
          <label className="text-sm font-medium mb-2 block">Topic</label>
          <Select value={filters.topic} onValueChange={(value) => updateFilter('topic', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Topics</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="travel">Travel</SelectItem>
              <SelectItem value="academic">Academic</SelectItem>
              <SelectItem value="conversation">Conversation</SelectItem>
              <SelectItem value="culture">Culture</SelectItem>
              <SelectItem value="literature">Literature</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="mt-4 pt-4 border-t">
          <div className="text-sm font-medium mb-2">Active Filters</div>
          <div className="flex flex-wrap gap-2">
            {filters.language && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Language: {filters.language}
                <button onClick={() => clearFilter('language')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.difficulty && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {filters.difficulty}
                <button onClick={() => clearFilter('difficulty')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.duration && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {filters.duration === 'short' ? '≤ 20 min' : 
                 filters.duration === 'medium' ? '21-40 min' : '> 40 min'}
                <button onClick={() => clearFilter('duration')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {filters.topic && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {filters.topic}
                <button onClick={() => clearFilter('topic')}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};
