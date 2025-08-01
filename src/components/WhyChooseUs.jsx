import { FaHiking, FaMapMarkedAlt, FaCampground } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 font-sans">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 font-light max-w-2xl mx-auto">
          We offer meaningful, safe, and unforgettable trekking experiences through the untouched beauty of West Sikkim.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition">
            <div className="text-green-700 text-4xl mb-4 mx-auto w-fit">
              <FaHiking />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Expert Local Guides</h3>
            <p className="text-gray-600 text-sm">
              Trek with seasoned guides who know every hidden gem and trail in the region.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition">
            <div className="text-green-700 text-4xl mb-4 mx-auto w-fit">
              <FaMapMarkedAlt />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Custom Itineraries</h3>
            <p className="text-gray-600 text-sm">
              Whether you're a beginner or pro, we tailor your trek to suit your pace and interests.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 transition">
            <div className="text-green-700 text-4xl mb-4 mx-auto w-fit">
              <FaCampground />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Sustainable & Authentic</h3>
            <p className="text-gray-600 text-sm">
              We promote eco-trekking while giving you a glimpse into local culture and traditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
