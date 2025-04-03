import React, { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ServiceCard from "./ServiceCard";
import TestimonialCarousel from "./TestimonialCarousel";
import ContactForm from "./ContactForm";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const Home = () => {
  // Refs for scroll functionality
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sample services data
  const services = [
    {
      id: 1,
      icon: <Cog6ToothIcon className="w-10 h-10" />,
      title: "General Dentistry",
      description:
        "Comprehensive dental care including cleanings, fillings, and preventative treatments to maintain your oral health.",
    },
    {
      id: 2,
      icon: <Cog6ToothIcon className="w-10 h-10" />,
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with our cosmetic procedures including whitening, veneers, and smile makeovers.",
    },
    {
      id: 3,
      icon: <Cog6ToothIcon className="w-10 h-10" />,
      title: "Emergency Care",
      description:
        "Immediate dental care for unexpected issues, pain relief, and urgent dental problems.",
    },
  ];

  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
      alt: "Modern dental clinic",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
      alt: "Dental equipment",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
      alt: "Dentist office",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
      alt: "Dental procedure",
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      text: "Dr. Smith is amazing! My entire family has been going to this practice for years. The staff is friendly and the care is top-notch.",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 5,
      text: "I used to be terrified of dental visits, but this practice has completely changed my experience. Gentle, professional, and thorough!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      rating: 4,
      text: "The office is modern and clean, and the entire team makes you feel comfortable. I highly recommend their cosmetic services.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onAboutClick={() => scrollToSection(aboutRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onGalleryClick={() => scrollToSection(galleryRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* Hero Section */}

      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-[url(src/images/background_image.jpg)] bg-no-repeat bg-cover w-full h-full blur-sm absolute"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <motion.div
            className="lg:w-1/2 bg-white px-6 py-10 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-mainColor mb-6">
              Gestão Profissional de Obras
            </h1>
            <p className="text-xl text-mainColor mb-8">
              Transformamos projetos em realidade com inovação, precisão e
              compromisso. Na TB Engenharia, construímos o futuro com engenharia
              de qualidade e soluções inteligentes para cada desafio.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="src/images/papeis_engenharia.jpg"
              alt="papeis_engenharia"
              className="rounded-full w-64 h-64 sm:w-[23rem] sm:h-[23rem] object-cover border-4 border-white shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-lightMainColor"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-mainColor mb-4">
              Sobre Tatiane Beilfuss
            </h2>
            <div className="w-20 h-1 bg-mainColor mx-auto mb-8"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="src/images/tatiane_beilfuss.png"
                alt="Tatiane beilfuss"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-mainColor mb-4">
                Tatiane Beilfuss
              </h3>
              <p className="text-mainColor mb-6">
                Sou engenheira há 10 anos e, ao longo desse tempo, aprendi
                algumas lições valiosas no atendimento aos clientes.
              </p>
              <p className="text-mainColor mb-6">
                O projeto precisa fazer sentido para você, não para mim. Posso
                não ser fã de um pé-direito duplo na sala, mas se esse é o seu
                sonho, ele se tornará realidade!
              </p>
              <p className="text-mainColor mb-6">
                Jamais discorde de um costume familiar. Se você quer um freezer
                na despensa, eu garanto que haverá um espaço perfeito para ele!
              </p>
              <p className="text-mainColor mb-6">
                Meu compromisso é ouvir você. Aquilo que pode parecer impossível
                na sua cabeça, para mim pode ser simples e viável. Estou aqui
                para tornar sua jornada mais leve e tranquila!
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-mediumMainColor px-4 py-2 rounded-md">
                  <span className="font-medium text-colorMain">
                    Bacharelado Engenharia Civil
                  </span>
                </div>
                <div className="bg-mediumMainColor px-4 py-2 rounded-md">
                  <span className="font-medium text-colorMain">
                    MBA Gestao de Projeto
                  </span>
                </div>
                <div className="bg-mediumMainColor px-4 py-2 rounded-md">
                  <span className="font-medium text-colorMain">
                    CEO TBEngenharia
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-lightMainColor2"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-mainColor mb-4">
              Nossos serviços
            </h2>
            <div className="w-20 h-1 bg-mainColor mx-auto mb-8"></div>
            <p className="text-xl text-mainColor max-w-3xl mx-auto">
              We offer a comprehensive range of dental services to meet all your
              oral health needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h2>
            <div className="w-20 h-1 bg-mainColor mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our modern facilities and see what our patients
              have to say.
            </p>
          </motion.div>

          {/* Gallery Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Our Patients Say
            </h3>
            <TestimonialCarousel testimonials={testimonials} />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-mainColor mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule an appointment or reach out with any questions you may
              have.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Office Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      123 Dental Way, Suite 100
                      <br />
                      San Francisco, CA 94103
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      Hours
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-gray-600">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      Contact
                    </h4>
                    <p className="text-gray-600 mb-1">Phone: (555) 123-4567</p>
                    <p className="text-gray-600">Email: info@brightsmile.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Bright Smile Dental
              </h3>
              <p className="text-gray-400 mb-4">
                Providing quality dental care with a gentle touch.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(servicesRef)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(galleryRef)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-400">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
                <span>Saturday:</span>
                <span>9:00 AM - 2:00 PM</span>
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Bright Smile Dental. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
