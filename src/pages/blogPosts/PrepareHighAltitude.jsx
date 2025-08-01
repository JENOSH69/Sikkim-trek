// src/pages/blogPosts/PrepareHighAltitude.jsx

import yambung2 from '../../assets/yambung2.jpeg';

export default function PrepareHighAltitude() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      
        <title>How to Prepare for High Altitude Trekking in Sikkim</title>
        <meta name="description" content="Stay safe and strong while trekking high-altitude trails in Sikkim. Learn tips to prevent altitude sickness." />
      

      <h1 className="text-3xl font-bold mb-4">Preparing for High Altitude Trekking</h1>
      <img src={yambung2} alt="High Altitude Sikkim" className="w-full h-auto rounded mb-6" />

      <h2 className="text-xl font-semibold mt-6 mb-2">Acclimatization is Key</h2>
      <p className="mb-4">Always give your body time to adjust. Spend at least a day at 2,500m+ before heading higher.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Hydrate & Eat Well</h2>
      <p className="mb-4">Drink plenty of water and eat high-carb meals to keep your energy up and reduce altitude effects.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Go Slow & Listen to Your Body</h2>
      <p className="mb-4">Avoid rushing. AMS (Acute Mountain Sickness) can affect anyone regardless of fitness.</p>
    </div>
  );
}
