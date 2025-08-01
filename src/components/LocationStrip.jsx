import { Phone, MapPin } from "lucide-react";

const LocationStrip = () => {
  return (
    <section className="bg-green-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Map/Image */}
        <div className="w-full h-48 md:h-60 rounded overflow-hidden shadow-md">
          <iframe
            title="location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3081311731087!2d88.25934287522558!3d27.70725132564808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e69d4fdb3e96e5%3A0x4578ecb86f67c937!2sDarap%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1689763997683!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Details */}
        <div className="space-y-3 text-sm md:text-base">
          <h3 className="text-xl md:text-2xl font-semibold">Visit or Call Us</h3>

          <p className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5" />
            Darap Village, West Sikkim, India
          </p>

          <p className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-0.5" />
            +91 81016 16286
          </p>

          <div className="flex gap-3 mt-3">
            <a
              href="tel:+918101616286"
              className="bg-white text-green-800 px-3 py-1.5 rounded text-xs font-semibold hover:bg-gray-100 transition"
            >
              📞 Call
            </a>
            <a
              href="https://wa.me/918101616286"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-800 px-3 py-1.5 rounded text-xs font-semibold hover:bg-gray-100 transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationStrip;
