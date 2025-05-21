import React from 'react'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
      <div className=''>
        <img className='relative opacity-75' src="/assets/1740019302204.avif" alt="" />
        <h1 className='absolute top-1/2 text-6xl ml-15 font-serif'>OUR SERVICES. </h1>
        <h2 className='absolute top-1/2 mt-20 ml-15 text-zinc-800 font-bold '>At Mercedes-Benz, we're going the extra mile to provide you with <br />first-class services for your car and beyond.</h2>
      </div>

      {/*Diagonally images  */}
      <div className=' mt-30 '>
        <div className='flex flex-1/2'>
            <img className='w-1/2 ml-20' src="/assets/1740065436214.avif" alt="" />
            <div className='mt-30 ml-20 '>
                 <h1 className='text-5xl mb-10' >Digital Service Drive.</h1>
            <h3 className='font-semibold text-zinc-400'>Experience personalized service with Digital Service Drive, where <br /> automated notifications ensure immediate attention upon arrival. <br /> Our online services let you book appointments, view service <br /> costs, and check recalls, all designed for transparency and convenience.</h3>
            </div>
           
        </div>
        <div className='flex flex-row mt-10'>
             <div className='mt-30 ml-20'>
                 <h1 className='text-5xl mb-10' >Premier Express Prime.</h1>
            <h3 className='font-semibold text-zinc-400'>Experience top-quality service in under 3 hours with Mercedes- <br /> Benz Premier Express Prime. Our trained technicians ensure fast, <br /> hassle-free maintenance for your vehicle.</h3>
            </div>
             <img className='w-1/2 ml-30' src="/assets/1740065436265.webp" alt="" />
        </div>
        <div className='flex flex-1/2 mt-10'>
            <img className='w-1/2 ml-20' src="/assets/1740065430575.avif" alt="" />
            <div className='mt-30 ml-20'>
                 <h1 className='text-5xl mb-10' >Fast Lane Body & Paint.</h1>
            <h3 className='font-semibold text-zinc-400'>Small repairs are quickly fixed with our Fast Lane Body and Paint <br /> service.</h3>
            </div>
           
        </div>
        <div className='flex flex-row mt-10'>
             <div className='mt-30 ml-20'>
                 <h1 className='text-5xl mb-10' >Charging solutions.</h1>
            <h3 className='font-semibold text-zinc-400'>With your Mercedes-Benz electric or plug-in hybrid vehicle, you’ll <br /> have a wide range of simple charging options at your disposal.</h3>
            </div>
             <img className='w-1/2 ml-30' src="/assets/1740019297000.avif" alt="" />
        </div>
      </div>

      {/* ✅ Three images section with image and detail (Only this is updated) */}
      <div className='flex justify-between flex-row mt-10 mb-10 px-5'>
        <div className='bg-zinc-300 rounded-lg shadow-md overflow-hidden w-[22%]'>
          <img src="/assets/iris.webp" className="h-40 w-full object-cover" alt="All Models" />
          <div className='p-3'>
            <h2 className='font-semibold mb-1'>All Models</h2>
            <p className='text-sm text-zinc-600'>Browse every Mercedes-Benz model from luxurious sedans to SUVs.</p>
          </div>
        </div>

        <div className='bg-zinc-300 rounded-lg shadow-md overflow-hidden w-[22%]'>
          <img src="/assets/iris.avif" className="h-40 w-full object-cover" alt="Available New Cars" />
          <div className='p-3'>
            <h2 className='font-semibold mb-1'>Available New Cars</h2>
            <p className='text-sm text-zinc-600'>Discover ready-to-drive new Mercedes cars with full warranty.</p>
          </div>
        </div>

        <div className='bg-zinc-300 rounded-lg shadow-md overflow-hidden w-[22%]'>
          <img src="/assets/iris (1).webp" className="h-40 w-full object-cover" alt="Configure New Car" />
          <div className='p-3'>
            <h2 className='font-semibold mb-1'>Configure New Car</h2>
            <p className='text-sm text-zinc-600'>Build your dream car online. Choose features, color, and specs.</p>
          </div>
        </div>

        <div className='bg-zinc-300 rounded-lg shadow-md overflow-hidden w-[22%]'>
          <img src="/assets/1740019302204.avif" className="h-40 w-full object-cover" alt="Contact" />
          <div className='p-3'>
            <h2 className='font-semibold mb-1'>Contact</h2>
            <p className='text-sm text-zinc-600'>Get in touch with our team or visit your nearest dealership.</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default About
