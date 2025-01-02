export default function WhyJoinUsSection() {
  const benefits = [
    {
      id: 1,
      title: "Comprehensive Skill Development",
      description: "Our program focuses on both technical skills and creative development, suitable for all age groups with no age restrictions.",
      icon: "📚"
    },
    {
      id: 2,
      title: "Proven Track Record",
      description: "With over 10 years of experience and 6000+ successful students, we've established ourselves as leaders in culinary education.",
      icon: "🏆"
    },
    {
      id: 3,
      title: "Global Opportunities",
      description: "Our globalised expansion ensures you learn international techniques and standards, opening doors worldwide.",
      icon: "🌍"
    }
  ];

  const whyBaking = [
    {
      id: 4,
      title: "Creative Expression",
      description: "Express your artistic side through experimenting with flavors, textures, and presentation techniques.",
      icon: "🎨"
    },
    {
      id: 5,
      title: "Health and Wellness",
      description: "Learn to prepare nutritious meals while maintaining control over ingredients and cooking methods.",
      icon: "🥗"
    },
    {
      id: 6,
      title: "Empowerment and Independence",
      description: "Develop skills that foster self-sufficiency and explore entrepreneurial opportunities in the culinary field.",
      icon: "💪"
    }
  ];

  return (
    <section className="py-24 bg-white" id="why-join-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Why Join Us?</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Embark on a culinary journey that transforms your passion into expertise
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center mb-8">Why Choose Baking & Cooking?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyBaking.map((reason) => (
            <div key={reason.id} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-orange-500 text-orange-500 
                     rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
          >
            Join Our Program
          </a>
        </div>
      </div>
    </section>
  );
}