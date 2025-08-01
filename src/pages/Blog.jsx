// src/pages/Blog.jsx
import React from "react";
import { BookOpenIcon, CalendarIcon } from "@heroicons/react/24/outline";
import trek1 from "../assets/singilila1.jpeg";
import trek2 from "../assets/yambung1.jpeg";
import trek3 from "../assets/yambung3.jpeg";
import Footer from "../components/Footer";

const blogPosts = [
  {
    title: "Top Treks in West Sikkim for Beginners & Pros",
    date: "July 15, 2025",
    snippet:
      "Explore the best trekking routes in Yuksom, Dzongri, and Yambung — from lush forests to high-altitude passes.",
    link: "/blog/top-treks-west-sikkim",
    image: trek1,
  },
  {
    title: "How to Prepare for a High-Altitude Trek in Sikkim",
    date: "July 5, 2025",
    snippet:
      "From acclimatization to packing lists — everything you need to survive and thrive in the Eastern Himalayas.",
    link: "/blog/prepare-high-altitude-sikkim",
    image: trek2,
  },
  {
    title: "Monsoon Trekking in Sikkim: Is It Worth the Risk?",
    date: "June 25, 2025",
    snippet:
      "Slippery trails, lush greenery, and hidden waterfalls — monsoon treks are unpredictable yet magical.",
    link: "/blog/monsoon-trekking-sikkim",
    image: trek3,
  },
];

const Blog = () => {
  return (
    <>
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-20 bg-gray-50">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <BookOpenIcon className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Sikkim Trek Blog</h1>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Get the latest trekking tips, guides, and stories from the heart of the Eastern Himalayas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mt-1 mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <p className="text-gray-600">{post.snippet}</p>
                <a
                  href={post.link}
                  className="text-green-600 hover:underline mt-3 inline-block font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer /> {/* 👈 This makes the footer show up */}
    </>
  );
};

export default Blog;
