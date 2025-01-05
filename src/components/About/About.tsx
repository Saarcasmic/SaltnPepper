import { AboutImage } from './AboutImage';
import { Stats } from './Stats';
import { Card3D } from './Card3D';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Chef</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[350px]">
            <AboutImage />
          </div>
          <Card3D className="bg-white/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                In the past, I was a simple home baker, dedicating my life to my family and children. 
                However, I started noticing how our society was leaning towards unhealthy eating habits, 
                leading to the rise of lifestyle diseases like fatty liver and other health issues. 
                I felt a strong need to make a difference and decided to take action.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Cooking had always been my strength, and I was often praised by my family and friends 
                for my skills. I realized that I could use my talent to help others overcome their 
                fear of cooking. I began by teaching my near and dear ones, and soon, this effort 
                turned into a passion. This passion gave birth to Salt & Pepper: Cooking & Baking Classes.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                It became my mission to empower people socially, emotionally, and economically through 
                the art of cooking and baking. Over the years, we have trained more than 6,000 students 
                who are now successfully running their own ventures, from home bakeries to cafés and 
                cloud kitchens.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I believe that cooking is not just about making food; it's about gaining confidence, 
                independence, and creating opportunities. Through Salt & Pepper, I am proud to be part 
                of this journey, helping people turn their passion into a way of life.
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