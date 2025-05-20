import React from 'react';
import video1 from '../assets/original.mp4';
import video2 from '../assets/original (1).mp4';
import Footer from '../Components/Footer';

const carData = [
  {
    src: 'src/assets/photo-1546518071-fddcdda7580a.avif',
    quote: 'Luxury redefined, silence louder than engine noise.',
  },
  {
    src: 'src/assets/photo-1546933751-22670568bacf.avif',
    quote: 'Command every road; power, prestige, and presence.',
  },
  {
    src: 'src/assets/photo-1583870996781-5b88f8a62aad.avif',
    quote: 'Elegance in motion, crafted for quiet confidence.',
  },
  {
    src: 'src/assets/istockphoto-1422277261-612x612.webp',
    quote: 'Timeless design meets everyday driving excellence.',
  },
  {
    src: 'src/assets/istockphoto-130407085-612x612.webp',
    quote: 'Born for speed, sculpted like a bullet.',
  },
  {
    src: 'src/assets/photo-1646194314870-6e25f74e6e60.avif',
    quote: 'Curves, control, and cutting-edge charisma.',
  },
  {
    src: 'src/assets/photo-1650585355076-301fae2f0316.avif',
    quote: 'Beyond luxury, Maybach moves in absolute grace.',
  },
  {
    src: 'src/assets/photo-1667070884879-4b7f73cc146c.avif',
    quote: 'Smart, sleek, electric: silently stunning Mercedes drive.',
  },
  {
    src: 'src/assets/photo-1722816385770-8640d490117b.avif',
    quote: 'The future hums quietly in electric sophistication.',
  },
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Videos */}
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
      <div>
        <h1 className='text-4xl ml-20 mt-20 mb-10 font-serif'>The perfect blend of luxury, sportiness and performance: <br />Discover our latest models</h1>
        <div className='mb-10 flex flex-row ml-20'>
          <button className='px-4 py-3 cursor-pointer hover:bg-blue-400 border-2'>Discover all models</button>
          <button className='px-4 py-3 cursor-pointer hover:bg-blue-400 border-2 ml-10'>Discover electric models</button>
        </div>
        <div className='mb-30 mt-20 flex flex-row justify-between'>
          <div className='ml-8 bg-zinc-200 h-25 w-90 rounded-xl'>
            <h1 className='ml-14 mt-2 font-serif'>Discover the model limoscene</h1>
            <img className='h-30 w-50' src="src/assets/iris.webp" alt="" />
          </div>
          <div className='ml-8 bg-zinc-200 h-25 w-90 rounded-xl'>
            <h1 className='ml-14 mt-2 font-serif'>Discover the models SUV range</h1>
            <img className='h-30 w-50' src="src/assets/iris.avif" alt="" />
          </div>
          <div className='mr-8 bg-zinc-200 h-25 w-90 rounded-xl'>
            <h1 className='ml-14 mt-2 font-serif'>Discover the models Roadsters</h1>
            <img className='h-30 w-50' src="src/assets/iris (1).webp" alt="" />
          </div>
        </div>
      </div>

      {/* Diagonal Car Gallery */}
      <div className="grid grid-cols-2 gap-4 px-6 py-12 bg-zinc-100">
       
        {carData.map((car, i) => (
          <div
            key={i}
            className={`flex flex-col items-${i % 2 === 0 ? 'end' : 'start'} text-white`}
          >
            <img
              src={car.src}
              alt={`Mercedes ${i + 1}`}
              className="w-4/5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-6 text-base text-center italic max-w-sm text-black">
              {car.quote}
            </p>
          </div>
        ))}
      </div>
      <div>
        <img src="src/assets/Screenshot 2025-05-20 162834.png" alt="" />
      </div>
<Footer/>
    </div>
    
  );
};

export default Home;
