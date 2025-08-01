// Inside Home.jsx
import { Link } from "react-router-dom";
import { Calendar, Clock, DollarSign } from "lucide-react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import treks from "../data/treks";

import yambung1 from "../assets/yambung1.jpeg";
import singilila1 from "../assets/singilila1.jpeg";
import yambung3 from "../assets/yambung3.jpeg";

export default function HomePage() {
  // Custom images just for the home page
  const customImages = [yambung1, singilila1, yambung3];

  return (
    <div className="text-black">
      <Hero />

      {/* Discover Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 font-sans">
            Discover the Beauty of Sikkim
          </h2>
          <p className="mt-4 text-base md:text-lg text-black font-light">
            Nestled in the lap of the Himalayas, West Sikkim is a paradise for trekkers and nature enthusiasts.
          </p>
        </div>
      </section>

      {/* Popular Treks */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-green-900">Popular Treks</h2>
            <div className="w-24 h-1 bg-green-800 mx-auto mt-3 rounded"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {treks.slice(0, 3).map((trek, index) => (
              <div
                key={trek.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg"
              >
                <img
                  src={customImages[index]}
                  alt={trek.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-green-800">{trek.name}</h3>
                  <p className="flex items-center gap-2 text-gray-700 text-sm">
                    <Clock className="w-4 h-4 text-green-800" /> Duration: {trek.duration}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700 text-sm">
                    <Calendar className="w-4 h-4 text-green-800" /> Best Time: {trek.bestTime}
                  </p>
                  <p className="flex items-center gap-2 text-gray-700 text-sm">
                    <DollarSign className="w-4 h-4 text-green-800" /> Cost: {trek.cost}
                  </p>
                  <Link
                    to={`/treks/${trek.id}`}
                    className="inline-block mt-4 bg-green-800 text-white px-4 py-2 text-sm rounded hover:bg-green-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
