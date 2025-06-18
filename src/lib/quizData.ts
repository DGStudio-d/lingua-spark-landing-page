export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
export type QuizType = 'Vocabulary' | 'Grammar' | 'Listening' | 'Reading' | 'Culture' | 'Mixed';

export interface StudentRating {
  userId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment?: string;
}

export interface PreviewQuestion {
  questionText: string;
  options?: string[];
  answerPreview: string; // Could be a snippet of the answer or a hint
}

export interface LearningPathRecommendation {
  pathId: string;
  pathName: string;
  order: number;
}

export interface Instructor {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface Quiz {
  id: string;
  title: string;
  language: string;
  difficulty: Difficulty;
  type: QuizType;
  durationMinutes: number;
  topic: string;
  numberOfQuestions: number;
  numberOfCompletions: number;
  averageScorePercent: number;
  studentRatings: StudentRating[];
  dateCreated: string; // ISO Date String
  tags: string[];
  previewQuestions: PreviewQuestion[];
  learningPathRecommendations?: LearningPathRecommendation[];
  instructor?: Instructor;
}

export const mockQuizzes: Quiz[] = [
  {
    id: 'quiz001',
    title: 'Spanish Basics: Greetings & Introductions',
    language: 'Spanish',
    difficulty: 'Beginner',
    type: 'Vocabulary',
    durationMinutes: 15,
    topic: 'Greetings',
    numberOfQuestions: 20,
    numberOfCompletions: 1250,
    averageScorePercent: 88,
    studentRatings: [
      { userId: 'user123', rating: 5, comment: 'Great for starting out!' },
      { userId: 'user456', rating: 4, comment: 'Helpful and clear.' },
    ],
    dateCreated: '2024-01-15T09:00:00Z',
    tags: ['spanish', 'beginner', 'greetings', 'vocabulary', 'A1'],
    previewQuestions: [
      { questionText: 'How do you say "Hello" in Spanish?', answerPreview: 'Hola' },
      { questionText: 'What does "¿Cómo estás?" mean?', answerPreview: 'How are you?' },
    ],
    instructor: { id: 'instr001', name: 'Maria Rodriguez', avatarUrl: '/placeholder.svg' },
  },
  {
    id: 'quiz002',
    title: 'French Verb Conjugation: Present Tense',
    language: 'French',
    difficulty: 'Intermediate',
    type: 'Grammar',
    durationMinutes: 30,
    topic: 'Verbs',
    numberOfQuestions: 25,
    numberOfCompletions: 875,
    averageScorePercent: 75,
    studentRatings: [
      { userId: 'user789', rating: 4, comment: 'Challenging but good practice.' },
      { userId: 'user101', rating: 3, comment: 'Some irregular verbs were tricky.' },
    ],
    dateCreated: '2024-02-10T11:30:00Z',
    tags: ['french', 'intermediate', 'grammar', 'verbs', 'B1'],
    previewQuestions: [
      { questionText: 'Conjugate "être" (to be) for "je" (I).', answerPreview: 'suis' },
      { questionText: 'What is the present tense of "avoir" (to have) for "nous" (we)?', answerPreview: 'avons' },
    ],
    learningPathRecommendations: [
      { pathId: 'path002', pathName: 'Mastering French Tenses', order: 1 },
    ],
  },
  {
    id: 'quiz003',
    title: 'German Listening Comprehension: At the Market',
    language: 'German',
    difficulty: 'Intermediate',
    type: 'Listening',
    durationMinutes: 20,
    topic: 'Shopping',
    numberOfQuestions: 15,
    numberOfCompletions: 650,
    averageScorePercent: 82,
    studentRatings: [
      { userId: 'user202', rating: 5, comment: 'Audio was very clear!' },
    ],
    dateCreated: '2024-03-05T14:00:00Z',
    tags: ['german', 'intermediate', 'listening', 'shopping', 'B1'],
    previewQuestions: [
      { questionText: 'Listen to the dialogue: What does the customer want to buy?', answerPreview: 'Apples and Bread' },
    ],
    instructor: { id: 'instr002', name: 'Klaus Weber' },
  },
  {
    id: 'quiz004',
    title: 'Italian Culture: Famous Landmarks',
    language: 'Italian',
    difficulty: 'Beginner',
    type: 'Culture',
    durationMinutes: 10,
    topic: 'Landmarks',
    numberOfQuestions: 10,
    numberOfCompletions: 980,
    averageScorePercent: 92,
    studentRatings: [
      { userId: 'user303', rating: 5, comment: 'Learned a lot of new things!' },
    ],
    dateCreated: '2024-04-20T08:15:00Z',
    tags: ['italian', 'beginner', 'culture', 'landmarks', 'A2'],
    previewQuestions: [
      { questionText: 'In which city is the Colosseum located?', answerPreview: 'Rome' },
    ],
  },
  {
    id: 'quiz005',
    title: 'Japanese Reading Practice: Hiragana & Katakana',
    language: 'Japanese',
    difficulty: 'Beginner',
    type: 'Reading',
    durationMinutes: 25,
    topic: 'Writing Systems',
    numberOfQuestions: 30,
    numberOfCompletions: 720,
    averageScorePercent: 85,
    studentRatings: [
      { userId: 'user404', rating: 4 },
    ],
    dateCreated: '2024-05-10T16:00:00Z',
    tags: ['japanese', 'beginner', 'reading', 'hiragana', 'katakana'],
    previewQuestions: [
      { questionText: 'What is the hiragana for "ko"?', answerPreview: 'こ' },
      { questionText: 'Read the word: アメリカ (a-me-ri-ka)', answerPreview: 'America' },
    ],
    instructor: { id: 'instr003', name: 'Yuki Tanaka', avatarUrl: '/placeholder.svg' },
  },
  {
    id: 'quiz006',
    title: 'Advanced Spanish Grammar: Subjunctive Mood',
    language: 'Spanish',
    difficulty: 'Advanced',
    type: 'Grammar',
    durationMinutes: 45,
    topic: 'Subjunctive',
    numberOfQuestions: 30,
    numberOfCompletions: 350,
    averageScorePercent: 68,
    studentRatings: [
      { userId: 'user505', rating: 4, comment: 'Very challenging, but essential.' },
      { userId: 'user606', rating: 3, comment: 'Still struggling with some uses.' },
    ],
    dateCreated: '2024-06-01T10:00:00Z',
    tags: ['spanish', 'advanced', 'grammar', 'subjunctive', 'C1'],
    previewQuestions: [
      { questionText: 'Complete the sentence: "Espero que _____ (venir) a la fiesta."', answerPreview: 'vengas' },
    ],
    learningPathRecommendations: [
      { pathId: 'path001', pathName: 'Advanced Spanish Mastery', order: 2 },
    ],
    instructor: { id: 'instr001', name: 'Maria Rodriguez', avatarUrl: '/placeholder.svg' },
  },
  {
    id: 'quiz007',
    title: 'French Mixed Review: Travel & Dining',
    language: 'French',
    difficulty: 'Intermediate',
    type: 'Mixed',
    durationMinutes: 35,
    topic: 'Review',
    numberOfQuestions: 40,
    numberOfCompletions: 550,
    averageScorePercent: 78,
    studentRatings: [
      { userId: 'user707', rating: 5, comment: 'Good all-round practice.' },
    ],
    dateCreated: '2024-06-15T13:20:00Z',
    tags: ['french', 'intermediate', 'review', 'travel', 'dining', 'B1-B2'],
    previewQuestions: [
      { questionText: 'How do you ask for the bill in French?', answerPreview: "L'addition, s'il vous plaît." },
      { questionText: 'What is "une valise"?', answerPreview: 'A suitcase' },
    ],
  },
  {
    id: 'quiz008',
    title: 'Expert German: Idiomatic Expressions',
    language: 'German',
    difficulty: 'Expert',
    type: 'Vocabulary',
    durationMinutes: 20,
    topic: 'Idioms',
    numberOfQuestions: 15,
    numberOfCompletions: 150,
    averageScorePercent: 72,
    studentRatings: [
      { userId: 'user808', rating: 5, comment: 'Finally, some real expert content!' },
    ],
    dateCreated: '2024-07-01T09:30:00Z',
    tags: ['german', 'expert', 'idioms', 'vocabulary', 'C2'],
    previewQuestions: [
      { questionText: 'What does "Tomaten auf den Augen haben" mean literally and figuratively?', answerPreview: 'To have tomatoes on one\'s eyes / To be oblivious' },
    ],
    instructor: { id: 'instr002', name: 'Klaus Weber' },
  },
  {
    id: 'quiz009',
    title: 'Portuguese Vocabulary: Carnival Celebration',
    language: 'Portuguese',
    difficulty: 'Intermediate',
    type: 'Vocabulary',
    durationMinutes: 15,
    topic: 'Festivals',
    numberOfQuestions: 20,
    numberOfCompletions: 450,
    averageScorePercent: 89,
    studentRatings: [
        { userId: 'user909', rating: 5, comment: 'Fun topic!' }
    ],
    dateCreated: '2024-07-10T11:00:00Z',
    tags: ['portuguese', 'intermediate', 'carnival', 'vocabulary', 'B1'],
    previewQuestions: [
        { questionText: 'What is "samba" in the context of Carnival?', answerPreview: 'A type of dance and music' }
    ],
  },
  {
    id: 'quiz010',
    title: 'Mandarin Chinese: Basic Tones Practice',
    language: 'Mandarin Chinese',
    difficulty: 'Beginner',
    type: 'Listening',
    durationMinutes: 20,
    topic: 'Pronunciation',
    numberOfQuestions: 25,
    numberOfCompletions: 300,
    averageScorePercent: 70,
    studentRatings: [
        { userId: 'user1010', rating: 4, comment: 'Tones are hard, but this helps.' }
    ],
    dateCreated: '2024-07-20T15:00:00Z',
    tags: ['mandarin', 'chinese', 'beginner', 'tones', 'pronunciation', 'A1'],
    previewQuestions: [
        { questionText: 'Listen to "ma" with the first tone. What does it mean?', answerPreview: 'Mother' }
    ],
    instructor: { id: 'instr004', name: 'Li Wei', avatarUrl: '/placeholder.svg' },
  }
];
