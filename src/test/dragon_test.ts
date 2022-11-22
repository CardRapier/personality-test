import { Test } from 'src/common/interfaces/test.interfaces';

export const dragon_test: Test = {
  name: 'Dragon Personality Test',
  description: 'A test of the dragon',
  questions: [
    {
      question: 'What is the name of the dragon?',
      answers: [
        {
          answer: 'Smaug',
          points: 1,
        },
        {
          answer: 'Balerion',
          points: 2,
        },
        {
          answer: 'Drogon',
          points: 3,
        },
        {
          answer: 'Viserion',
          points: 4,
        },
      ],
    },
    {
      question: 'What is the color of the dragon?',
      answers: [
        {
          answer: 'Red',
          points: 1,
        },
        {
          answer: 'Green',
          points: 2,
        },
        {
          answer: 'Blue',
          points: 3,
        },
        {
          answer: 'Black',
          points: 4,
        },
      ],
    },
    {
      question: 'What is the size of the dragon?',
      answers: [
        {
          answer: 'Small',
          points: 1,
        },
        {
          answer: 'Medium',
          points: 2,
        },
        {
          answer: 'Large',
          points: 3,
        },
        {
          answer: 'Giant',
          points: 4,
        },
      ],
    },
    {
      question: 'What is the age of the dragon?',
      answers: [
        {
          answer: 'Young',
          points: 1,
        },
        {
          answer: 'Adult',
          points: 2,
        },
        {
          answer: 'Old',
          points: 3,
        },
        {
          answer: 'Ancient',
          points: 4,
        },
      ],
    },
    {
      question: 'Who do you serve?',
      answers: [
        {
          answer: 'Erebor',
          points: 1,
        },
        {
          answer: 'Valyria',
          points: 2,
        },
        {
          answer: 'Daenerys Targaryen',
          points: 3,
        },
        {
          answer: 'Daenerys Targaryen',
          points: 4,
        },
      ],
    },
  ],
  results: [
    {
      value: 1,
      description: 'You are Smaug, the Young Small Red Dragon of Erebor.',
    },
    {
      value: 2,
      description:
        'You are Balerion, the Adult Medium Green Dragon of Valyria.',
    },
    {
      value: 3,
      description:
        'You are Drogon, the Old Large Blue Dragon of Daenerys Targaryen.',
    },
    {
      value: 4,
      description:
        'You are Viserion, the Ancient Giant Black Dragon of Daenerys Targaryen.',
    },
  ],
};
