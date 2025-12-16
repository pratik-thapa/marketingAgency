import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";

// Define the structure for a single testimonial
interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  quote: string;
  rating: number;
}

// The testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "CEO, BrightTech Solutions",
    image: "/3.webp", // Replace with your actual image path
    quote:
      "We struggled with brand visibility until we partnered with Yeti Metrix. Their data-driven strategies and creative approach skyrocketed our engagement.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Carter",
    title: "Marketing Director, Elevate Brands",
    image: "/2.webp", // Replace with your actual image path
    quote:
      "From website development to social media marketing, Yeti Metrix handled everything with professionalism. Our traffic and leads have doubled in just a few months.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    title: "Founder, EcoWear",
    image: "/5.webp", // Replace with your actual image path
    quote:
      "Their team understood our vision and executed it flawlessly. The website they built is not just visually stunning but also optimized for conversions!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-dark py-8 relative overflow-hidden">
      {/* Optional subtle background pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center">
            <span className="text-white font-medium tracking-widest uppercase text-sm mb-3 block border rounded-full w-fit justify-center border-button px-4 py-2">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-md">
            Discover how Yeti Metrix has helped businesses like yours achieve
            remarkable growth and digital success.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-600 rounded-3xl px-4 py-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-[#20172D] p-8 rounded-3xl relative group border border-white/5 hover:border-button/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150} // Staggered animation
            >
              {/* Large Quote Icon in the background */}
              <FaQuoteRight className="absolute top-2 right-2 text-6xl text-button/70 group-hover:text-button/20 transition-colors duration-300 bg-dark p-4 rounded-full" />

              {/* User Profile Section */}
              <div className=" flex flex-col items-center text-center gap-4 mb-6 relative z-10">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-button/30 group-hover:border-button transition-colors">
                  {/* Replace the src with your actual image paths */}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 justify-center mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-button text-lg" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-gray-300 leading-relaxed relative z-10 italic">
                <q>{testimonial.quote}</q>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
