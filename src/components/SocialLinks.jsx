import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="fixed top-[40%] left-0 z-50 flex flex-col space-y-3 px-2">
      <a
        href="https://www.facebook.com/share/16i6je6Qh9/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 p-3 rounded-r-lg text-white hover:scale-110 transition"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/jaarj_digitalpartner?igsh=NHZrZWhmY21leDBz"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 p-3 rounded-r-lg text-white hover:scale-110 transition"
      >
        <FaInstagram />
      </a>
      <a
        href="https://wa.me/918101616286"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 rounded-r-lg text-white hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://youtube.com/yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 p-3 rounded-r-lg text-white hover:scale-110 transition"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialLinks;
