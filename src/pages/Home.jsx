import React from 'react';
import video1 from '/assets/original.mp4';
import video2 from '/assets/original (1).mp4';
import Footer from '../Components/Footer';

import irisWebp from '/assets/iris.webp';
import irisAvif from '/assets/iris.avif';
import irisWebp1 from '/assets/iris (1).webp';

import photo1 from '/assets/photo-1546518071-fddcdda7580a.avif';
import photo2 from '/assets/photo-1546933751-22670568bacf.avif';
import photo3 from '/assets/photo-1583870996781-5b88f8a62aad.avif';
import photo4 from '/assets/istockphoto-1422277261-612x612.webp';
import photo5 from '/assets/istockphoto-130407085-612x612.webp';
import photo6 from '/assets/photo-1646194314870-6e25f74e6e60.avif';
import photo7 from '/assets/photo-1650585355076-301fae2f0316.avif';
import photo8 from '/assets/photo-1667070884879-4b7f73cc146c.avif';
import photo9 from '/assets/photo-1722816385770-8640d490117b.avif';

import screenshot from '/assets/Screenshot 2025-05-20 162834.png';

const carData = [
  {
    src: photo1,
    quote: 'Luxury redefined, silence louder than engine noise.',
  },
  {
    src: photo2,
    quote: 'Command every road; power, prestige, and presence.',
  },
  {
    src: photo3,
    quote: 'Elegance in motion, crafted for quiet confidence.',
  },
  {
    src: photo4,
    quote: 'Timeless design meets everyday driving excellence.',
  },
  {
    src: photo5,
    quote: 'Born for speed, sculpted like a bullet.',
  },
  {
    src: photo6,
    quote: 'Curves, control, and cutting-edge charisma.',
  },
  {
    src: photo7,
    quote: 'Beyond luxury, Maybach moves in absolute grace.',
  },
  {
    src: photo8,
    quote: 'Smart, sleek, electric: silently stunning Mercedes drive.',
  },
  {
    src: photo9,
    quote: 'The future hums quietly in electric sophistication.',
  },
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Video 1 */}
      <div className="h-screen w-full relative">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src={video1} type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-white text-4xl font-serif">CLASS OF ITS OWN.</h1>
          <h2 className="text-white mt-3 font-serif text-xl">Configure now</h2>
          <button className="bg-white mt-4 text-black font-semibold hover:bg-blue-300 px-4 py-1 rounded-full">
            Discover more
          </button>
        </div>
      </div>

      {/* Video 2 */}
      <div className="h-screen w-full relative">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src={video2} type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-white text-4xl font-serif">GRAND OPENING.</h1>
          <h2 className="text-white mt-3 font-serif text-xl">Be part of the experience</h2>
          <button className="bg-white mt-4 text-black font-semibold hover:bg-blue-300 px-4 py-1 rounded-full">
            Discover more
          </button>
        </div>
      </div>

      {/* Model Selector */}
      <div>
        <h1 className="text-4xl ml-20 mt-20 mb-10 font-serif">
          The perfect blend of luxury, sportiness and performance: <br />
          Discover our latest models
        </h1>
        <div className="mb-10 flex flex-row ml-20">
          <button className="px-4 py-3 cursor-pointer hover:duration-700 hover:rounded-2xl hover:bg-blue-400 border">
            Discover all models
          </button>
          <button className="px-4 py-3 cursor-pointer hover:duration-700 hover:rounded-2xl hover:bg-blue-400 border ml-10">
            Discover electric models
          </button>
        </div>

        {/* Limousine / SUV / Roadster */}
        <div className="mb-30 mt-20 flex flex-row justify-between">
          <div className="ml-8 bg-zinc-200 h-80 w-96 rounded-xl overflow-hidden">
            <h1 className="ml-6 mt-2 font-serif">Discover the model Limousine</h1>
            <img className="h-full w-full object-cover" src={irisWebp} alt="Limousine" />
          </div>
          <div className="ml-8 bg-zinc-200 h-80 w-96 rounded-xl overflow-hidden">
            <h1 className="ml-6 mt-2 font-serif">Discover the models SUV range</h1>
            <img className="h-full w-full object-cover" src={irisAvif} alt="SUV Range" />
          </div>
          <div className="mr-8 bg-zinc-200 h-80 w-96 rounded-xl overflow-hidden">
            <h1 className="ml-6 mt-2 font-serif">Discover the models Roadsters</h1>
            <img className="h-full w-full object-cover" src={irisWebp1} alt="Roadsters" />
          </div>
        </div>
      </div>

      {/* Modern 2-Column Car Gallery */}
      <div className="bg-zinc-100 px-6 py-20">
        <h1 className="text-4xl font-serif text-center mb-16">
          Inspirational Design. Engineered Excellence.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {carData.map((car, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-300"
            >
              <img
                src={car.src}
                alt={`Mercedes ${i + 1}`}
                className="w-full h-[380px] object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="p-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800">“{car.quote}”</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Image */}
      <div>
        <img src={screenshot} alt="screenshot" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
