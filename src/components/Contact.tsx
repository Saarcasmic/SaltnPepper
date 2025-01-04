
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

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <a 
                  href="https://wa.me/917409868983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  +91 7409868983
                </a>
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
                <a href='https://maps.app.goo.gl/poQSGPVJjx9YxRHW7' className="mt-1 text-gray-600">1/21, Radhapuram Estate, Mathura, U.P</p>
                
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

          {/* <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
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
            </div> */}
        </div>
      {/* </div> */}
    </section>
  );
}