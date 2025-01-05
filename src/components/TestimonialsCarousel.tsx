import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

declare global {
  interface Window {
    instgrm: any;
  }
}

const testimonials = [
  {
    id: 1,
    embedCode: 'https://www.instagram.com/p/DC6HRt-T3FO/',
  },
  {
    id: 2,
    embedCode: 'https://www.instagram.com/reel/DDHIiRpz731/',
  },
  {
    id: 3,
    embedCode: 'https://www.instagram.com/reel/C0vbq-Hpznz/',
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [currentIndex]);

  return (
    <section className='bg-gray-50'>
    <div className="max-w-2xl  mx-auto py-12 px-4" id="testinomials">
      <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>
      
      <div className="relative flex justify-center items-center">
        <div className="overflow-hidden w-[540px]">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((post) => (
              <div key={post.id} className="w-full flex-shrink-0">
                <div className="flex justify-center">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={post.embedCode}
                    data-instgrm-version="14"
                    style={{ margin: '0 auto' }}
                  ></blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}