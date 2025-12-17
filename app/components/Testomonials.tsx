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
    image: "/3.webp",
    quote:
      "We struggled with brand visibility until we partnered with Yeti Metrix. Their data-driven strategies and creative approach skyrocketed our engagement.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Carter",
    title: "Marketing Director, Elevate Brands",
    image: "/2.webp",
    quote:
      "From website development to social media marketing, Yeti Metrix handled everything with professionalism. Our traffic and leads have doubled in just a few months.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    title: "Founder, EcoWear",
    image: "/5.webp",
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border border-gray-600 rounded-3xl px-4 py-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              // 👇 Added 'group' here. The entire card is the trigger.
              className="bg-[#20172D] p-8 rounded-3xl relative group border border-white/5 hover:border-button/50 transition-all duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* 👇 THE GLOW: Added 'pointer-events-none' so it doesn't block clicks, but relies on parent 'group' hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-button/50 group-hover:via-purple-600/50 group-hover:to-blue-600/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500 pointer-events-none"></div>

              {/* Large Quote Icon */}
              <FaQuoteRight className="absolute top-2 right-2 text-6xl text-button/70 group-hover:text-button/20 transition-colors duration-300 bg-dark p-4 rounded-full pointer-events-none" />

              {/* User Profile Section */}
              <div className="flex flex-col items-center text-center gap-4 mb-6 relative z-10 pointer-events-none">
                {" "}
                {/* Added pointer-events-none to children if you want clicks to pass through to card, otherwise remove it */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-button/30 group-hover:border-button transition-colors">
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
              <div className="flex gap-1 justify-center mb-6 relative z-10 pointer-events-none">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-button text-lg" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-gray-300 leading-relaxed relative z-10 italic pointer-events-none">
                <q>{testimonial.quote}</q>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
