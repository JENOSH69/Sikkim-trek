// src/components/CallToAction.jsx
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="bg-green-800 py-12 text-center">
      <h2 className="text-3xl text-white font-bold mb-4">Ready for Your Sikkim Adventure?</h2>
      <p className="text-white mb-6">Book your trek now or reach out for more information!</p>
      <Link to="/contact" className="bg-white text-green-800 px-6 py-3 rounded font-medium hover:bg-gray-100">
        Contact Us
      </Link>
    </section>
  );
}
