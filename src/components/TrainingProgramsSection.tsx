import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ProgramDetail = {
  tagline: string;
  duration: string;
  whoShouldEnroll: string[];
  courseContent: string[];
  benefits: string[];
  features?: string[];
};

type ProgramDetails = {
  [key: string]: ProgramDetail;
};

type TrainingProgram = {
  name: string;
  description: string;
  theory: string[];
  image: string;
  programDetails: ProgramDetails;
};
// Custom arrow components
const PrevArrow = (props: { onClick?: () => void; currentSlide?: number; slideCount?: number }) => (
  <button
    onClick={props.onClick}
    className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white -left-4"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const NextArrow = (props: { onClick?: () => void; currentSlide?: number; slideCount?: number }) => (
  <button
    onClick={props.onClick}
    className="absolute z-10 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white -right-4"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

// Carousel settings
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};


const trainingPrograms: TrainingProgram[] = [
  {
    name: 'Baking',
    description: 'Master the art of baking with hands-on experience in our state-of-the-art kitchen facilities. Learn from expert pastry chefs who will guide you through everything from basic bread making to advanced pastry techniques.',
    theory: [
      'Difference between Baking powder, soda and eno',
      'Why cake sponges crack on top and how to avoid that',
      'How to prevent the crust from the top and bake perfect sponge',
      'Why cake sunk/dipped in the middle',
      'How to use different instruments for baking like OTG microwave and gas',
      'Knowledge about ingredients, buying and storing'
    ],
    image: 'https://plus.unsplash.com/premium_photo-1683707120403-9add00a6140e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    programDetails: {
      'Beginner friendly training program': {
        tagline: 'Start baking, start earning',
        duration: '15 Days',
        whoShouldEnroll: [
          'Beginners',
          'Skill upgraders',
          'Passionate bakers',
          'Aspiring bakery owners',
          'Side income seekers',
          'Want to bake good cakes for family and friends'
        ],
        courseContent: [
          'Learning batter from scratch',
          'Cake baking like professional bakers',
          'Perfect whipping cream making',
          'Icing techniques',
          'Different theme garnishing',
          'Different popular flavors of cakes',
          'Basic chocolate garnishing',
          'Topper creation',
          'Nozzle and tool work',
          'Chocolate cream making'
        ],
        benefits: [
          'Make and take: Make your cakes in class, and make your family members happy by taking them home',
          'No prior Baking/Cooking knowledge required!!',
          'Learn Baking of Bakery Cakes Sponges From Scratch (Not only with ready cake mix)'
        ]
      },
      'Baking business course': {
        tagline: 'Bake Like a Pro, Earn with Confidence!',
        duration: '3 Months',
        whoShouldEnroll: [
          'Beginners',
          'Skill upgraders',
          'Passionate bakers',
          'Aspiring bakery owners',
          'Side income seekers',
          'Want to bake good cakes for family and friends'
        ],
        courseContent: [
          'Sponge baking',
          'Theory class',
          'Cupcake and muffin class',
          'Home made cake premix class',
          'Brownies',
          'Travel cakes',
          'Cheesecakes',
          'Dessert making class',
          'Art of pastries',
          'Cakesicles and popsicles',
          'Chocolate garnishing',
          'Fondant art',
          'Icing cakes',
          'Trendy cakes',
          'Branding, marketing strategy and product photography'
        ],
        benefits: [
          'Skill development program',
          'How to use bakery waste in an effective manner',
          'Easily start their own business',
          'Making bakery profitable',
          'Project based class: you\'ll be given regular work'
        ]
      },
      'Diploma baking course': {
        tagline: 'From Aspiring Baker to Professional Pastry Chef',
        duration: '6 Months',
        whoShouldEnroll: [
          'Aspiring pastry chefs',
          'Home bakers looking to go professional',
          'Bakery business owners',
          'Advanced skill seekers',
          'Passionate bakers aiming to start a bakery business',
          'Healthy and artisan baking enthusiasts'
        ],
        courseContent: [
          'Baked desserts like pies and tarts',
          'Complete fondant cakes and trendy cakes',
          'Advanced travel cakes, brownies, crownies, and brookies',
          'Healthy cookies and artisan breads',
          'Doughnuts, designer breads, and pizzas',
          'Business strategies and marketing techniques',
          'Profitability tips for bakeries'
        ],
        benefits: [
          'Brownie & cookie premix techniques',
          'Advanced icing and decorating methods',
          'Hands-on experience with tools and techniques',
          'Skill development program',
          'How to use bakery waste in an effective manner',
          'Easily start their own business',
          'Making bakery profitable',
          'Project based class: you\'ll be given regular work'
        ]
      },
    }
  },
  {
    name: 'Cooking',
    description: 'Master the art of baking with hands-on experience in our state-of-the-art kitchen facilities. Learn from expert pastry chefs who will guide you through everything from basic bread making to advanced pastry techniques.',
    theory: [
      'Difference between Baking powder, soda and eno',
      'Why cake sponges crack on top and how to avoid that',
      'How to prevent the crust from the top and bake perfect sponge',
      'Why cake sunk/dipped in the middle',
      'How to use different instruments for baking like OTG microwave and gas',
      'Knowledge about ingredients, buying and storing'
    ],
    image: 'https://plus.unsplash.com/premium_photo-1683707120403-9add00a6140e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    programDetails: {
      'Beginner friendly training program': {
        tagline: 'Start baking, start earning',
        duration: '15 Days',
        whoShouldEnroll: [
          'Beginners',
          'Skill upgraders',
          'Passionate bakers',
          'Aspiring bakery owners',
          'Side income seekers',
          'Want to bake good cakes for family and friends'
        ],
        courseContent: [
          'Learning batter from scratch',
          'Cake baking like professional bakers',
          'Perfect whipping cream making',
          'Icing techniques',
          'Different theme garnishing',
          'Different popular flavors of cakes',
          'Basic chocolate garnishing',
          'Topper creation',
          'Nozzle and tool work',
          'Chocolate cream making'
        ],
        benefits: [
          'Make and take: Make your cakes in class, and make your family members happy by taking them home',
          'No prior Baking/Cooking knowledge required!!',
          'Learn Baking of Bakery Cakes Sponges From Scratch (Not only with ready cake mix)'
        ]
      },
      'Baking business course': {
        tagline: 'Bake Like a Pro, Earn with Confidence!',
        duration: '3 Months',
        whoShouldEnroll: [
          'Beginners',
          'Skill upgraders',
          'Passionate bakers',
          'Aspiring bakery owners',
          'Side income seekers',
          'Want to bake good cakes for family and friends'
        ],
        courseContent: [
          'Sponge baking',
          'Theory class',
          'Cupcake and muffin class',
          'Home made cake premix class',
          'Brownies',
          'Travel cakes',
          'Cheesecakes',
          'Dessert making class',
          'Art of pastries',
          'Cakesicles and popsicles',
          'Chocolate garnishing',
          'Fondant art',
          'Icing cakes',
          'Trendy cakes',
          'Branding, marketing strategy and product photography'
        ],
        benefits: [
          'Skill development program',
          'How to use bakery waste in an effective manner',
          'Easily start their own business',
          'Making bakery profitable',
          'Project based class: you\'ll be given regular work'
        ]
      },
      'Diploma baking course': {
        tagline: 'From Aspiring Baker to Professional Pastry Chef',
        duration: '6 Months',
        whoShouldEnroll: [
          'Aspiring pastry chefs',
          'Home bakers looking to go professional',
          'Bakery business owners',
          'Advanced skill seekers',
          'Passionate bakers aiming to start a bakery business',
          'Healthy and artisan baking enthusiasts'
        ],
        courseContent: [
          'Baked desserts like pies and tarts',
          'Complete fondant cakes and trendy cakes',
          'Advanced travel cakes, brownies, crownies, and brookies',
          'Healthy cookies and artisan breads',
          'Doughnuts, designer breads, and pizzas',
          'Business strategies and marketing techniques',
          'Profitability tips for bakeries'
        ],
        benefits: [
          'Brownie & cookie premix techniques',
          'Advanced icing and decorating methods',
          'Hands-on experience with tools and techniques',
          'Skill development program',
          'How to use bakery waste in an effective manner',
          'Easily start their own business',
          'Making bakery profitable',
          'Project based class: you\'ll be given regular work'
        ]
      },
    }
  },
  {
    name: 'Cooking',
    description: 'Master the art of baking with hands-on experience in our state-of-the-art kitchen facilities. Learn from expert pastry chefs who will guide you through everything from basic bread making to advanced pastry techniques.',
    theory: [
      'Difference between Baking powder, soda and eno',
      'Why cake sponges crack on top and how to avoid that',
      'How to prevent the crust from the top and bake perfect sponge',
      'Why cake sunk/dipped in the middle',
      'How to use different instruments for baking like OTG microwave and gas',
      'Knowledge about ingredients, buying and storing'
    ],
    image: 'https://plus.unsplash.com/premium_photo-1683707120403-9add00a6140e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    programDetails: {
      'Beginner friendly training program': {
        tagline: 'Start baking, start earning',
        duration: '15 Days',
        whoShouldEnroll: [
          'Beginners',
          'Skill upgraders',
          'Passionate bakers',
          'Aspiring bakery owners',
          'Side income seekers',
          'Want to bake good cakes for family and friends'
        ],
        courseContent: [
          'Learning batter from scratch',
          'Cake baking like professional bakers',
          'Perfect whipping cream making',
          'Icing techniques',
          'Different theme garnishing',
          'Different popular flavors of cakes',
          'Basic chocolate garnishing',
          'Topper creation',
          'Nozzle and tool work',
          'Chocolate cream making'
        ],
        benefits: [
          'Make and take: Make your cakes in class, and make your family members happy by taking them home',
          'No prior Baking/Cooking knowledge required!!',
          'Learn Baking of Bakery Cakes Sponges From Scratch (Not only with ready cake mix)'
        ]
      },
      'Baking business course': {
        tagline: 'Bake Like a Pro, Earn with Confidence!',
        duration: '3 Months',
        whoShouldEnroll: [
          'Beginners',
          'Skill upgraders',
          'Passionate bakers',
          'Aspiring bakery owners',
          'Side income seekers',
          'Want to bake good cakes for family and friends'
        ],
        courseContent: [
          'Sponge baking',
          'Theory class',
          'Cupcake and muffin class',
          'Home made cake premix class',
          'Brownies',
          'Travel cakes',
          'Cheesecakes',
          'Dessert making class',
          'Art of pastries',
          'Cakesicles and popsicles',
          'Chocolate garnishing',
          'Fondant art',
          'Icing cakes',
          'Trendy cakes',
          'Branding, marketing strategy and product photography'
        ],
        benefits: [
          'Skill development program',
          'How to use bakery waste in an effective manner',
          'Easily start their own business',
          'Making bakery profitable',
          'Project based class: you\'ll be given regular work'
        ]
      },
      'Diploma baking course': {
        tagline: 'From Aspiring Baker to Professional Pastry Chef',
        duration: '6 Months',
        whoShouldEnroll: [
          'Aspiring pastry chefs',
          'Home bakers looking to go professional',
          'Bakery business owners',
          'Advanced skill seekers',
          'Passionate bakers aiming to start a bakery business',
          'Healthy and artisan baking enthusiasts'
        ],
        courseContent: [
          'Baked desserts like pies and tarts',
          'Complete fondant cakes and trendy cakes',
          'Advanced travel cakes, brownies, crownies, and brookies',
          'Healthy cookies and artisan breads',
          'Doughnuts, designer breads, and pizzas',
          'Business strategies and marketing techniques',
          'Profitability tips for bakeries'
        ],
        benefits: [
          'Brownie & cookie premix techniques',
          'Advanced icing and decorating methods',
          'Hands-on experience with tools and techniques',
          'Skill development program',
          'How to use bakery waste in an effective manner',
          'Easily start their own business',
          'Making bakery profitable',
          'Project based class: you\'ll be given regular work'
        ]
      },
    }
  },
];

export default function TrainingGridWithModal() {
  const [selectedProgram, setSelectedProgram] = useState<TrainingProgram | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const handleClose = () => {
    setSelectedProgram(null);
    setSelectedDuration(null);
  };

  useEffect(() => {
    if (selectedProgram) {
      const firstDuration = Object.keys(selectedProgram.programDetails)[0];
      setSelectedDuration(firstDuration);
    }
  }, [selectedProgram]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Training Programs</h2>
      <div className="relative px-4 md:px-8">
        <Slider {...settings}>
          {trainingPrograms.map((program, index) => (
            <div key={index} className="px-2">
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow h-full"
                onClick={() => setSelectedProgram(program)}
              >
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="text-lg font-bold text-gray-800">{program.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                  {program.theory && (
                    <div className="mt-4">
                      <h3 className="text-base font-semibold mb-2 text-orange-600">
                        Know the Theory Behind Baking
                      </h3>
                      <div className="grid gap-1.5">
                        {program.theory.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5" />
                            <p className="text-gray-700 text-xs leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl h-[90vh] relative flex flex-col">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 z-10"
              onClick={handleClose}
            >
              ✕
            </button>
            
            {/* Fixed Header Section */}
            <div className="p-6 border-b">

              {/* Duration Buttons */}
              <div className="flex gap-2">
                {Object.keys(selectedProgram.programDetails).map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`py-2 px-4 rounded-lg font-medium text-sm ${
                      selectedDuration === duration
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {`${duration} (${selectedProgram.programDetails[duration].duration})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Content Section */}
            <div className="flex-1 overflow-y-auto p-6">
              {selectedDuration && (
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    {selectedDuration}
                  </h3>
                  <p className="text-sm text-orange-600 mb-2">
                    {selectedProgram.programDetails[selectedDuration].tagline}
                  </p>
                  <h4 className="text-sm font-semibold mb-2 text-gray-800">
                    Who Should Enroll:
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-gray-600 mb-4">
                    {selectedProgram.programDetails[selectedDuration].whoShouldEnroll.map(
                      (item, idx) => (
                        <li key={idx}>{item}</li>
                      )
                    )}
                  </ul>
                  <h4 className="text-sm font-semibold mb-2 text-gray-800">
                    Course Content:
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-gray-600 mb-4">
                    {selectedProgram.programDetails[selectedDuration].courseContent.map(
                      (item, idx) => (
                        <li key={idx}>{item}</li>
                      )
                    )}
                  </ul>
                  <h4 className="text-sm font-semibold mb-2 text-gray-800">
                    Benefits:
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-gray-600">
                    {selectedProgram.programDetails[selectedDuration].benefits.map(
                      (item, idx) => (
                        <li key={idx}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}