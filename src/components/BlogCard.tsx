import { Calendar } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

export default function BlogCard({ 
  title, excerpt, image, date, category, readTime 
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <span>{readTime} read</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        <a
          href="#"
          className="inline-block mt-4 text-orange-500 hover:text-orange-600 font-medium"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}