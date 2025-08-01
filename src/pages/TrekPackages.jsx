import React from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import treckimage from "../assets/yambung1.jpeg";
import trek1 from "../assets/yambung3.jpeg"; // Replace with actual images later
import trek2 from "../assets/singilila1.jpeg";
import trek3 from "../assets/singilila2.jpeg";

const treks = [
  {
    id: "yambung-valley",
    name: "Yambung Valley Trek",
    image: trek1,
    duration: "7 Days",
    bestTime: "April - June",
    cost: "₹12,000",
  },
  {
    id: "dzongri-goechala",
    name: "Dzongri Goechala Trek",
    image: trek2,
    duration: "10 Days",
    bestTime: "Sept - Nov",
    cost: "₹18,500",
  },
  {
    id: "barsey-rhododendron",
    name: "Barsey Rhododendron Trek",
    image: trek3,
    duration: "5 Days",
    bestTime: "March - May",
    cost: "₹8,000",
  },
];

const TrekPackages = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageHero
        title="Trek Packages"
        breadcrumb="Home / Trek Packages"
        heroImg={treckimage}
      />

      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">
          Explore Our Treks
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Discover handpicked trekking adventures across Sikkim — from scenic
          mountain trails to immersive cultural routes. Each trek is designed to
          offer unique experiences with local insights, nature, and challenge.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {treks.map((trek) => (
            <div key={trek.id} className="bg-white">
              {/* Image */}
              <img
                src={trek.image}
                alt={trek.name}
                className="w-full h-52 object-cover"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold text-center mt-4 text-gray-800">
                {trek.name}
              </h3>

              {/* Details */}
              <div className="text-sm mt-4 mb-4 border-t border-gray-200 text-left px-4">
                <div className="py-2 border-b border-gray-200">
                  <p>
                    <span className="text-green-700 font-semibold">Duration :</span>{" "}
                    <span className="text-gray-800">{trek.duration}</span>
                  </p>
                </div>
                <div className="py-2 border-b border-gray-200">
                  <p>
                    <span className="text-green-700 font-semibold">Best Time :</span>{" "}
                    <span className="text-gray-800">{trek.bestTime}</span>
                  </p>
                </div>
                <div className="py-2">
                  <p>
                    <span className="text-green-700 font-semibold">Cost :</span>{" "}
                    <span className="text-gray-800">{trek.cost}</span>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4 pb-6">
                <button
                  onClick={() => navigate(`/treks/${trek.id}`)}
                  className="bg-gray-800 text-white text-sm px-4 py-2 rounded hover:bg-gray-900 transition"
                >
                  View Details
                </button>
                <a
    href={`https://wa.me/918101616286?text=Hi, I want to book the ${encodeURIComponent(trek.name)} trek.`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition"
  >
    Book Now
  </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrekPackages;
