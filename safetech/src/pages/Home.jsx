import React from 'react'
import { Link } from 'react-router-dom'
import Offers from '../components/Offers'
import Cover from '../components/Cover'

export const Home = () => {
  return (
    <>
    <div className='flex md:flex-row flex-col-reverse justify-center items-center w-full md:h-[85vh] gap-10'>
      <div className='flex flex-col gap-8 justify-center items-center md:w-[40%]'>
        <img className='w-40 md:w-96 hidden md:flex' src="/assets/logo.webp" alt="" />
        <span className='md:text-5xl text-4xl font-bold text-center'>Empowering Safe Social Media Usage for Children</span>
        <Link className="px-6 py-3 mt-8 bg-black text-white rounded-2xl transform transition-transform hover:scale-105" to="/book">
        Register today
      </Link>
      </div>
      <div>
        <img className='object-cover p-4 md:w-[48vw] rounded-3xl' src="/assets/main.webp" alt="" />
      </div>
    </div>
    <Offers/>
    <Cover/>
    </>
  )
}
