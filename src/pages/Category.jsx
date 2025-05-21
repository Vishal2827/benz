import React from 'react';
import Footer from '../Components/Footer'; // Make sure this path is correct

// CarCard component for reusable car display
const CarCard = ({ src, title, price, fuel }) => (
  <div className="bg-zinc-100 rounded shadow p-4">
    <img src={src} alt={title} className="w-full h-60 object-cover rounded" />
    <h2 className="text-2xl font-serif mt-3">{title}</h2>
    <p className="text-lg mt-1">{price}</p>
    <p className="text-sm font-semibold mt-1">{fuel}</p>
    <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
      Contact Dealer
    </button>
  </div>
);

const Category = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Header Section with Overlay */}
      <div className="relative w-full h-[500px]">
        <img
          src="src/assets/Maybach-Pattern.png"
          alt="Maybach Pattern"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        {/* Heading Content */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white z-20">
          <h1 className="text-5xl font-serif font-bold">All Models</h1>
          <h2 className="mt-4 text-lg max-w-2xl mx-auto">
            Discover our diverse range of brands and models: Here you'll find your personal dream vehicle.
          </h2>
        </div>
        {/* Buttons */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-8 z-20">
          <button className="bg-white text-black border px-6 py-2 font-serif rounded hover:bg-zinc-300 transition">
            Mercedes-Benz
          </button>
          <button className="bg-white text-black border px-6 py-2 font-serif rounded hover:bg-zinc-300 transition">
            AMG
          </button>
          <button className="bg-white text-black border px-6 py-2 font-serif rounded hover:bg-zinc-300 transition">
            Maybach
          </button>
        </div>
      </div>

      {/* SUV Models */}
      <section className="py-16">
        <h1 className="text-4xl font-serif text-center mb-4">SUV MODELS</h1>
        <p className="text-center text-zinc-500 mb-10 text-lg">
          Experience pure luxury with the Mercedes-Benz GLE SUV – where power meets prestige.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
          <CarCard src="src/assets/suv-1.avif" title="GLE SUV" price="$80,000 - $95,000" fuel="Diesel / Petrol" />
          <CarCard src="src/assets/suv-2.webp" title="GLS SUV" price="$90,000 - $110,000" fuel="Diesel" />
          <CarCard src="src/assets/suv-3.avif" title="GLC Coupe" price="$70,000 - $85,000" fuel="Petrol" />
          <CarCard src="src/assets/suv-4.avif" title="GLB SUV" price="$55,000 - $68,000" fuel="Diesel" />
        </div>
      </section>

      {/* S-Class Models */}
      <section className="py-16 bg-zinc-50">
        <h1 className="text-4xl font-serif text-center mb-4">S-CLASS MODELS</h1>
        <p className="text-center text-zinc-500 mb-10 text-lg">
          The Mercedes-Benz S-Class – an icon of sophistication, innovation, and executive comfort.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
          <CarCard src="src/assets/s-1.avif" title="S 500" price="$100,000 - $130,000" fuel="Petrol" />
          <CarCard src="src/assets/s-2.avif" title="S 580 4MATIC" price="$120,000 - $150,000" fuel="Diesel / Petrol" />
          <CarCard src="src/assets/s-3.avif" title="Maybach S-Class" price="$180,000 - $210,000" fuel="Petrol" />
          <CarCard src="src/assets/s-4.avif" title="S-Class Plug-in" price="$140,000 - $160,000" fuel="Hybrid" />
        </div>
      </section>

      {/* Electric Models */}
      <section className="py-16">
        <h1 className="text-4xl font-serif text-center mb-4">ELECTRIC MODELS</h1>
        <p className="text-center text-zinc-500 mb-10 text-lg">
          Drive the future with our fully electric lineup – silent power, zero emissions, pure performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
          <CarCard src="src/assets/c-1.avif" title="EQB SUV" price="$55,000 - $65,000" fuel="Electric" />
          <CarCard src="src/assets/c-2.webp" title="EQE SUV" price="$75,000 - $90,000" fuel="Electric" />
          <CarCard src="src/assets/c-3.avif" title="EQS SUV" price="$105,000 - $135,000" fuel="Electric" />
          <CarCard src="src/assets/suv-4.webp" title="EQA Compact" price="$45,000 - $55,000" fuel="Electric" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Category;
