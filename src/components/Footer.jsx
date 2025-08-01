import { MapPin, Phone, Mail, Facebook, Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
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

        {/* Location & Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact & Location</h3>
          <p className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5" /> Darap, West Sikkim, India
          </p>
          <p className="flex items-start gap-2 mt-2">
            <Phone className="w-4 h-4 mt-0.5" /> +91 81016 16286
          </p>
          <p className="flex items-start gap-2 mt-2">
            <Mail className="w-4 h-4 mt-0.5" /> info@yambungtreks.in
          </p>

          <a
            href="https://wa.me/918101616286"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-white text-green-900 font-semibold px-4 py-2 rounded hover:bg-green-100 transition"
          >
            <Send className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>

        {/* Quick Links & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/packages" className="hover:underline">Trek Packages</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>

          <div className="flex gap-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs bg-green-950 py-4 border-t border-green-800">
        &copy; {new Date().getFullYear()} Yambung Treks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
