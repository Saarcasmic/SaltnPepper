import { useState, useEffect } from 'react';

const trainingPrograms = [
  {
    name: 'Baking',
    description: 'Master the art of baking with hands-on experience in our state-of-the-art kitchen facilities. Learn from expert pastry chefs who will guide you through everything from basic bread making to advanced pastry techniques.',
    image: 'https://plus.unsplash.com/premium_photo-1683707120403-9add00a6140e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    durations: {
      '15 days': ['Basic bread making', 'Kitchen safety', 'Fundamental techniques', 'Simple desserts'],
      '3 months': ['Advanced breads', 'Pastry skills', 'Cake decoration', 'Commercial baking'],
      '6 months': ['Master pastry', 'Chocolate work', 'Wedding cakes', 'Business management']
    }
  },
  {
    name: 'Cooking',
    description: 'Discover culinary excellence through our comprehensive cooking program. Learn from renowned chefs, master diverse cooking techniques, and understand the art of flavor composition.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    durations: {
      '15 days': ['Knife skills', 'Cooking basics', 'Kitchen setup', 'Simple meals'],
      '3 months': ['Global cuisines', 'Advanced techniques', 'Menu planning', 'Food styling'],
      '6 months': ['Expert techniques', 'Restaurant ops', 'Menu creation', 'Business skills']
    }
  }
];

export default function TrainingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState<'15 days' | '3 months' | '6 months'>('15 days');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % trainingPrograms.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleNext = () => {
    if (!isFlipped) {
      setActiveIndex((prev) => (prev + 1) % trainingPrograms.length);
    }
  };

  const handlePrev = () => {
    if (!isFlipped) {
      setActiveIndex((prev) => (prev - 1 + trainingPrograms.length) % trainingPrograms.length);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setIsPaused(!isPaused);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative">
        <div className="overflow-hidden">
          <h2 className="text-4xl font-bold text-center mb-4">Our Training Programs</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our specialized training programs to master the art of cooking and baking.
          </p>
          <div 
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {trainingPrograms.map((program, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`relative h-[600px] ${isFlipped && index === activeIndex ? 'rotate-y-180' : ''} transition-transform duration-700 transform-style-3d`}>
                  {/* Front */}
                  <div className={`absolute w-full h-full backface-hidden ${isFlipped && index === activeIndex ? 'invisible' : ''}`}>
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden h-full flex flex-col">
                      <img 
                        src={program.image} 
                        alt={program.name}
                        className="w-full h-72 object-cover"
                      />
                      <div className="p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <h2 className="text-3xl font-bold mb-4">{program.name}</h2>
                          <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                        </div>
                        <button
                          onClick={handleFlip}
                          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                          View Programs
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className={`absolute w-full h-full backface-hidden rotate-y-180 ${isFlipped && index === activeIndex ? '' : 'invisible'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">{program.name} Training Options</h3>
                        <div className="flex gap-3 mb-8">
                          {Object.keys(program.durations).map((duration) => (
                            <button
                              key={duration}
                              onClick={() => setSelectedDuration(duration as '15 days' | '3 months' | '6 months')}
                              className={`flex-1 py-3 px-4 rounded-lg transition-colors text-sm font-medium
                                ${selectedDuration === duration 
                                  ? 'bg-orange-500 text-white' 
                                  : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                              {duration}
                            </button>
                          ))}
                        </div>
                        <div className="space-y-4 mb-8">
                          {program.durations[selectedDuration as '15 days' | '3 months' | '6 months'].map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full" />
                              <p className="text-gray-700">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={handleFlip}
                        className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Back to Overview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 disabled:opacity-50"
          disabled={isFlipped}
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 disabled:opacity-50"
          disabled={isFlipped}
        >
          →
        </button>
      </div>
    </div>
  );
}