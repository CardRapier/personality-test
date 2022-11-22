export interface Test {
  name: string;
  description: string;
  questions: Question[];
  results: Result[];
}

export interface Result {
  value: number;
  description: string;
}
export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  points: number;
}
