import AboutHero from "../components/PageHero";
import Footer from "../components/Footer";
import heroImg from "../assets/hero.jpeg";
import storyImg from "../assets/hero.jpeg"; // Update with actual image
import sustainableImg from "../assets/hero.jpeg"; // Update with actual image

const AboutUs = () => {
  return (
    <div>
      <AboutHero
        title="About Us"
        breadcrumb="Home / About"
        heroImg={heroImg}
      />

      {/* Intro */}
      <section className="py-12 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-900 mb-2">About Us</h2>
        <div className="w-16 h-[2px] bg-green-700 mx-auto mb-6"></div>
        <p className="text-gray-700 text-base leading-relaxed max-w-2xl mx-auto">
          We are a trekking community based in the heart of Sikkim, devoted to offering authentic, safe, and meaningful mountain adventures. Our experiences are crafted to connect you deeply with nature, culture, and local life.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-12 px-4 max-w-5xl mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <img
            src={storyImg}
            alt="Our story"
            className="w-full h-56 object-cover mb-6"
          />
          <h3 className="text-2xl font-semibold text-green-900 mb-4">Our Story</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Our journey began with a few passionate trekkers who believed that the soul of travel lies in walking the paths less taken. From humble beginnings, we’ve grown into a collective that champions offbeat treks, promotes local culture, and inspires others to fall in love with the Himalayas.
          </p>
        </div>
      </section>

      {/* Sustainability & Community */}
      <section className="py-12 px-4 max-w-6xl mx-auto bg-green-50">
        <h3 className="text-2xl font-semibold text-green-900 text-center mb-4">Sustainability & Community</h3>
        <div className="w-16 h-[2px] bg-green-700 mx-auto mb-8"></div>
        <div className="md:flex md:items-center md:gap-10">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={sustainableImg}
              alt="Sustainability and community"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="md:w-1/2 text-gray-700 text-base leading-relaxed">
            <p>
              Sustainability isn’t just a buzzword for us — it’s at the heart of everything we do. From employing local guides and using eco-friendly practices to organizing clean-up treks and supporting village homestays, we aim to make a positive impact wherever our boots tread.
            </p>
            <p className="mt-4">
              When you trek with us, you're not just exploring nature — you're helping protect it and empowering the communities that live within it.
            </p>
          </div>
        </div>
      </section>
         <Footer/>
    </div>
  );
};

export default AboutUs;
