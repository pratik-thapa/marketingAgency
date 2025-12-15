import Link from "next/link";

export default function About() {
  return (
    <section className="bg-gray-50 py-10" id="about">
      <h1 className="text-center text-3xl pb-10 font-bold text-gray-900">
        Who Are We
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Image Placeholder */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gray-200 rounded-xl relative overflow-hidden shadow-lg">
              {/* This is a placeholder for your team photo or office shot */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl border-2 border-dashed border-gray-300 m-4 rounded-lg">
                Team / Office Image
              </div>
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              More Than Just an Agency.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We started with a simple mission: to bridge the gap between
              creative design and technical performance. We don't just build
              websites; we build digital experiences that drive real business
              growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team consists of senior developers, award-winning designers,
              and SEO strategists who work together to ensure every pixel serves
              a purpose.
            </p>

            <Link
              href="/about"
              className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
            >
              Read Our Full Story
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
