// src/pages/Contact.jsx
import React from "react";
import { MapPin, Phone, Mail, MessageSquareText } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 border-b pb-2">Contact Us</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Address */}
        <div className="flex items-start gap-4">
          <MapPin className="text-green-600" size={28} />
          <div>
            <h2 className="text-sm font-semibold uppercase text-gray-700">Address</h2>
            <p className="text-gray-600">Darap, West Sikkim, India</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <Phone className="text-green-600" size={28} />
          <div>
            <h2 className="text-sm font-semibold uppercase text-gray-700">Phone</h2>
            <p className="text-gray-600">+91 81016 16286</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <Mail className="text-green-600" size={28} />
          <div>
            <h2 className="text-sm font-semibold uppercase text-gray-700">Email</h2>
            <p className="text-gray-600">contact@vishawavani.in</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-4">
          <MessageSquareText className="text-green-600" size={28} />
          <div>
            <h2 className="text-sm font-semibold uppercase text-gray-700">WhatsApp</h2>
            <a href="https://wa.me/918101616286" className="text-blue-600 hover:underline">
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
