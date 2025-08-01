// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import TrekPackages from "./pages/TrekPackages";
import TrekDetails from "./pages/TrekDetails";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import TopTreksWestSikkim from "./pages/blogPosts/TopTreksWestSikkim";
import PrepareHighAltitude from "./pages/blogPosts/PrepareHighAltitude";
import MonsoonTrekkingSikkim from "./pages/blogPosts/MonsoonTrekkingSikkim";
import SocialLinks from "./components/SocialLinks"; // ✅ Import SocialLinks

export default function App() {
  return (
    <>
      <Navbar />
      <SocialLinks /> {/* ✅ Sticky social bar shown across all pages */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/trek-packages" element={<TrekPackages />} />
          <Route path="/treks/:trekId" element={<TrekDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/top-treks-west-sikkim" element={<TopTreksWestSikkim />} />
          <Route path="/blog/prepare-high-altitude-sikkim" element={<PrepareHighAltitude />} />
          <Route path="/blog/monsoon-trekking-sikkim" element={<MonsoonTrekkingSikkim />} />
        </Routes>
      </main>
    </>
  );
}
