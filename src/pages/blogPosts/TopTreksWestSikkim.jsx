// src/pages/blogPosts/TopTreksWestSikkim.jsx
import yambung from "../../assets/yambung1.jpeg"; // ✅ adjust the filename

export default function TopTreksWestSikkim() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      
        <title>Top Treks in West Sikkim | Sikkim Trek Blog</title>
        <meta name="description" content="Discover the most breathtaking treks in West Sikkim – Yambung, Dzongri, and Goechala." />
     

      <h1 className="text-3xl font-bold mb-4">Top Treks in West Sikkim</h1>
      <img src={yambung} alt="Yambung Trek" className="w-full h-auto rounded mb-6" />

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Yambung Valley Trek</h2>
      <p className="mb-4">A hidden gem in West Sikkim, Yambung offers untouched trails, alpine forests, and panoramic views of Mt. Khangchendzonga.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Dzongri Trek</h2>
      <p className="mb-4">This moderate trek is a favorite among adventure seekers for its scenic ridge walks and close-up views of snow-capped peaks.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Goechala Trek</h2>
      <p className="mb-4">The most iconic trek in Sikkim. You’ll pass through rhododendron forests, alpine meadows, and reach the base of Goechala Pass.</p>
    </div>
  );
}
