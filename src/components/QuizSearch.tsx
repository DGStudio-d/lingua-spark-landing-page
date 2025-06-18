
import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface QuizSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const QuizSearch: React.FC<QuizSearchProps> = ({ searchTerm, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock suggestions - in real app, this would come from API
  const mockSuggestions = [
    'Spanish grammar',
    'French vocabulary',
    'German listening',
    'Italian conversation',
    'Japanese writing',
    'Chinese pronunciation',
    'English grammar',
    'Portuguese basics'
  ];

  useEffect(() => {
    if (searchTerm && searchTerm.length > 1) {
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSuggestionClick = (suggestion: string) => {
    onSearchChange(suggestion);
    setIsFocused(false);
    inputRef.current?.blur();
  };

  const clearSearch = () => {
    onSearchChange('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative">
      <Card className="p-4">
        <h3 className="font-semibold mb-3">Search Quizzes</h3>
        
        <div className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search by title, description, or tags..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Search Suggestions */}
          {isFocused && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-2">
                <div className="text-xs text-gray-500 mb-2">Suggestions</div>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded text-sm"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Recent Searches */}
        {!searchTerm && (
          <div className="mt-4">
            <div className="text-sm text-gray-500 mb-2">Popular searches</div>
            <div className="flex flex-wrap gap-2">
              {['Spanish grammar', 'French vocab', 'German listening'].map(tag => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer hover:bg-blue-100"
                  onClick={() => onSearchChange(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
