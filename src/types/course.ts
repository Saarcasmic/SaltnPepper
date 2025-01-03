export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  category: string;
  price: number;
  spots: number;
  startDate?: Date;
  isUpcoming?: boolean;
} 