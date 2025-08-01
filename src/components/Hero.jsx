import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import heroImg from '../assets/hero.jpeg';
import { Link } from "react-router-dom";


const words = [
  'Authentic Himalayan Treks',
  'Unforgettable Adventures',
  'Explore Sikkim like Never Before'
];    

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const fullText = words[index];
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
          setDisplayedText('');
        }, 1500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="relative h-screen w-full bg-black text-white">
      <img
        src={heroImg}
        alt="Himalayan landscape"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Welcome to Sikkim Treks
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-lg md:text-2xl text-white"
        >
          {displayedText}<span className="animate-pulse">|</span>
        </motion.p>

       <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.2, duration: 0.5 }}
>
  <Link
    to="/trek-packages"
    className="mt-8 inline-block px-6 py-3 bg-green-800 text-white font-semibold rounded shadow hover:bg-green-700 transition"
  >
    View Packages
  </Link>
</motion.div>
      </div>
    </section>
  );
}
