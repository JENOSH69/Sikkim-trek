// src/components/TestimonialSlider.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import yambung1 from "../assets/yambung1.jpeg";
import megha from "../assets/yambung2.jpeg";
import ankit from "../assets/yambung3.jpeg";
import pema from "../assets/yambung3.jpeg";

const testimonials = [
  {
    name: "Tenzing Sherpa",
    image: yambung1,
    quote:
      "The Yambung Valley Trek was life-changing. The guide was friendly, and everything was perfectly arranged.",
  },
  {
    name: "Megha Thapa",
    image: megha,
    quote:
      "Trekking through Sikkim’s mountains with your team was unforgettable. Highly professional and warm-hearted!",
  },
  {
    name: "Ankit Rai",
    image: ankit,
    quote:
      "The best experience of my life. Beautiful landscapes, delicious food, and great hospitality!",
  },
  {
    name: "Pema Lepcha",
    image: pema,
    quote:
      "Amazing hospitality and unforgettable treks. Highly recommended for nature lovers!",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-2 font-sans">
          What Our Guests Say
        </h2>
        <hr className="border-t-2 border-green-800 w-20 mx-auto mb-10" />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-6 rounded-lg shadow text-center max-w-xl mx-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <h4 className="text-green-800 font-semibold">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
