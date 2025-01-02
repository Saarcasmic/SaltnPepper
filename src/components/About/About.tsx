import { AboutImage } from './AboutImage';
import { Stats } from './Stats';
import { Card3D } from './Card3D';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[350px]">
            <AboutImage />
          </div>
          <Card3D className="bg-white/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  With extensive experience in training over 6,000 students in cooking and baking, I've dedicated my life to
                  empowering women to become self-dependent through 40+ professional courses offered worldwide.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My mission emphasizes promoting good health while making cooking accessible and enjoyable for everyone,
                  through both online and offline programs designed to share culinary knowledge and skills.
                </p>
              </div>
              <Stats />
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}