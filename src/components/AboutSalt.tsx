
const AboutSalt = () => {
  return (
    <section className="py-24 bg-gray-50" id="about-salt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">About Salt & Pepper</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="/Background.jpg" alt="Salt & Pepper" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Salt & Pepper is a renowned cooking school that offers a variety of cooking classes for all skill levels. Our mission is to inspire and educate people to cook delicious and healthy meals at home. We have a team of experienced chefs who are passionate about teaching and sharing their knowledge.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our achievements include numerous awards in culinary excellence and a strong community of cooking enthusiasts. We offer classes in various cuisines, baking, and specialized courses for kids and health-focused cooking.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join us at Salt & Pepper to enhance your cooking skills and enjoy a fun and interactive learning experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSalt;