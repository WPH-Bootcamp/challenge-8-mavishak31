import type { ITestimonial } from '../types';

export const testimonials: ITestimonial[] = [
  {
    id: 1,
    name: 'John Lee',
    role: 'Director',
    company: 'Innovate Corp',
    message:
      '"A game-changer for our project. They turned our idea into reality efficiently and effectively."',
    avatar: '../../src/assets/johnlee.png',
    // rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Tan',
    role: 'Product Manager',
    company: 'Finovate',
    message:
      '"The team delivered exactly what we needed on time and with outstanding quality."',
    avatar: '../../src/assets/sarahtan.png',
    // rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Marketing Head',
    company: 'TechSphere',
    message:
      '"The collaboration was seamless. Their expertise truly helped us succeed."',
    avatar: '../../src/assets/emilychen.png',
    // rating: 5,
  },
];
