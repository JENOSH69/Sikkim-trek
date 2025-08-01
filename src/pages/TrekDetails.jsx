import React, { useState } from "react";
import { useParams } from "react-router-dom";
import treks from "../data/treks";
import PageHero from "../components/PageHero";
import treckdetails from "../assets/Yambung.jpeg";
import Footer from "../components/Footer";


import {
  Mountain,
  Timer,
  TrendingUp,
  Users,
  Map,
  Flag,
  BedDouble,
  MapPin,
  Info,
  ListTree,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const TrekDetails = () => {
  const { trekId } = useParams();
  const trek = treks.find((t) => t.id === trekId);

  const [showInfo, setShowInfo] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
  const [expandedDays, setExpandedDays] = useState([]);

  if (!trek) {
    return <div className="text-center text-red-600 py-20">Trek not found.</div>;
  }

  const info = [
    {
      label: "Trek Difficulty",
      value: trek.difficulty,
      icon: <TrendingUp size={28} className="text-green-700" />,
    },
    {
      label: "Trek Duration",
      value: trek.duration,
      icon: <Timer size={28} className="text-green-700" />,
    },
    {
      label: "Highest Altitude",
      value: trek.highestAltitude,
      icon: <Mountain size={28} className="text-green-700" />,
    },
    {
      label: "Suitable For",
      value: trek.suitableFor,
      icon: <Users size={28} className="text-green-700" />,
    },
    {
      label: "Total Trek Distance",
      value: trek.totalDistance,
      icon: <Map size={28} className="text-green-700" />,
    },
    {
      label: "Base Camp",
      value: trek.baseCamp,
      icon: <Flag size={28} className="text-green-700" />,
    },
    {
      label: "Accommodation Type",
      value: trek.accommodation,
      icon: <BedDouble size={28} className="text-green-700" />,
    },
    {
      label: "Region",
      value: trek.region,
      icon: <MapPin size={28} className="text-green-700" />,
    },
  ];

  const toggleDay = (index) => {
    setExpandedDays((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div>
      <PageHero
        title="Trek Details"
        breadcrumb="Trek Packages / Trek Details"
        heroImg={treckdetails}
      />

      {/* Title & Description */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-green-700 inline-block pb-2">
          {trek.name}
        </h2>
        <p className="text-gray-600 mt-4">{trek.description}</p>
      </div>

      {/* Icon Grid Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-10">
          {info.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-2">{item.icon}</div>
              <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
                {item.label}
              </p>
              <h4 className="text-base font-extralight text-gray-700 mt-1">
                {item.value}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Itinerary Accordion */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div
          className="bg-gray-100 rounded-xl p-4 cursor-pointer flex items-center justify-between"
          onClick={() => setShowItinerary(!showItinerary)}
        >
          <div className="flex items-center gap-3">
            <ListTree className="text-green-700" />
            <h3 className="text-lg font-semibold text-gray-800">Itinerary</h3>
          </div>
          {showItinerary ? <ChevronUp /> : <ChevronDown />}
        </div>

        {showItinerary && (
          <div className="mt-4 space-y-4">
            {trek.itinerary?.map((day, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDay(index)}
                >
                  <h4 className="font-semibold text-gray-800">{day.title}</h4>
                  {expandedDays.includes(index) ? <ChevronUp /> : <ChevronDown />}
                </div>
                {expandedDays.includes(index) && (
                  <div className="mt-2 text-sm text-gray-700 space-y-1 pl-2">
                    <p><span className="font-medium">Distance:</span> {day.distance}</p>
                    <p><span className="font-medium">Duration:</span> {day.duration}</p>
                    <p><span className="font-medium">Stay:</span> {day.stay}</p>
                    <p>{day.note}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
        )}
      </div>
      {trek.gallery && trek.gallery.length > 0 && (
  <div className="mt-12 px-4">
    <h2 className="text-2xl font-bold text-center mb-6 border-b pb-2">Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {trek.gallery.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Gallery ${idx + 1}`}
          className="w-full h-64 object-cover rounded-none shadow"
        />
      ))}
    </div>
  </div>
)}
<div className="bg-[#f3f4f6] py-10 px-4 text-center rounded-xl mt-12">
  <h3 className="text-2xl font-bold mb-2">Ready to Experience the {trek.name}?</h3>
  <p className="text-gray-600 mb-4">Book now or reach out to us for custom trekking plans and group offers.</p>
  {/*<div className="flex justify-center gap-4">
    <a href="#booking-form" className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800">Reserve Now</a>*/}
    <a href="https://wa.me/918101616286" target="_blank" className="border border-black text-black py-2 px-6 rounded-lg hover:bg-black hover:text-white transition">WhatsApp Us</a>
  </div>
        <Footer />

</div>



  );
};

export default TrekDetails;
