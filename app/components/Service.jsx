export default function Services() {
  const services = [
    {
      title: "Digital Strategy",
      description:
        "We build data-driven roadmaps to help you navigate the digital landscape and crush your competition.",
      icon: "🚀", // You can replace these with real SVG icons later
    },
    {
      title: "Web Development",
      description:
        "Blazing fast, SEO-optimized websites built with Next.js that convert visitors into loyal customers.",
      icon: "💻",
    },
    {
      title: "Brand Identity",
      description:
        "From logos to voice, we craft memorable brands that resonate with your target audience.",
      icon: "🎨",
    },
  ];

  return (
    <section className="bg-white py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to grow your business online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
