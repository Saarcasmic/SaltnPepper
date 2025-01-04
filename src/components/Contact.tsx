
import { Mail, Phone, MapPin, Youtube, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  


  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses? Want to learn more about private classes? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">+91 74098 68983</p>
                <p className="text-gray-600">Mon-Fri from 8am to 6pm</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">saltandpepperclasses@gmail.com</p>
                <p className="text-gray-600">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Location</h3>
                <p className="mt-1 text-gray-600">1/21, Radhapuram Estate</p>
                <p className="text-gray-600">Mathura, U.P</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Youtube className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">YouTube</h3>
                <p className="mt-1 text-gray-600">
                  <a href="https://www.youtube.com/@saltandpepperclasses5428" target="_blank" rel="noopener noreferrer">
                    @saltandpepperclasses
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Facebook className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Facebook</h3>
                <p className="mt-1 text-gray-600">
                  <a href="https://www.facebook.com/saltandpepperlearntocook" target="_blank" rel="noopener noreferrer">
                    @saltandpepperlearntocook
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Instagram className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Instagram</h3>
                <p className="mt-1 text-gray-600">
                  <a href="https://www.instagram.com/salt_and_pepper_learn_to_cook/" target="_blank" rel="noopener noreferrer">
                    @salt_and_pepper_learn_to_cook
                  </a>
                </p>
              </div>
            </div>
            
          </div>

          <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3538.7404961272437!2d77.6479266!3d27.5084449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397373d424f6b13d%3A0xa523fc08808aea02!2sSalt%20And%20Pepper%20%3A%20Learn%20to%20Cook!5e0!3m2!1sen!2sin!4v1735988103150!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
        </div>
      </div>
    </section>
  );
}