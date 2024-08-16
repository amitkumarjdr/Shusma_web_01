import React, { useEffect, useRef } from 'react'
import Header from './components/Header'
import BusinessCenter from './components/BusinessCenter'
import WhyShushma from './components/WhyShushma'
import Features from './components/Features'
import Offer from './components/Offer'
import Location from './components/Location'
import Location_Part from './components/Location_Part'
import SitePlan from './components/SitePlan'
import Plan from './components/Plan'
import PriceList from './components/PriceList'
import Gallery from './components/Gallery'
import Ameneties from './components/Ameneties'
import Banner from './components/Banner'
import WalkThrough from './components/WalkThrough'
import Brands from './components/Brands'
import Banner_Next from './components/Banner_Next'
import Faq from './components/Faq'
import Loan from './components/Loan'
import Booking from './components/Booking'
import Map from './components/GoogleMap'
import Testimonial from './components/Testimonial'
import Project from './components/Project'
import Downloading from './components/Downloading';
import telephoneImg from "./images/Group 1723.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import gsap from 'gsap'


export default function App() {

  const cursor_dot = useRef()

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      // console.log(event)

      gsap.to(cursor_dot.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        // ease: "power2.inOut"
      })

    })
  }, [])

  return (
    <>
      <div className='size-[20px] rounded-full bg-white fixed rotate-180 hidden lg:block' style={{ backgroundImage: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)' }} ref={cursor_dot}>
      </div>
      <Header />
      <BusinessCenter />
      <WhyShushma /> 
      <div className='bg-[#ECF1F4]  '>
        <Features />
        <Offer />
        <Location />
        <Location_Part />
        <SitePlan />
        <Plan />
        <PriceList />
        <Ameneties />
        <Project />
        <Gallery />
        <Banner />
        <WalkThrough />
        <Brands />
        <Banner_Next />
        <Faq />
        <Loan />
        <Booking />
        <Map />
        <Testimonial />
        <Downloading />
      </div>
      <div className="fixed rotate-[270deg] bottom-[50%] right-0 z-10 origin-bottom-right cursor-pointer">
        <div className="  bg-[#254E58] sm:px-4 px-2 sm:py-2 py-1 rounded-t-[17px] flex  ">
          <p className="sm:text-[19px] text-[15px] font-[500] text-white uppercase cursor-pointer flex justify-center items-center">
            <Link to="tel:00000000">
              contact us
            </Link>
          </p>
          <div className="rotate-90 ms-2">
            <img src={telephoneImg} alt="" />
          </div>
        </div>
      </div>
      <div className='lg:size-[60px] size-[50px] flex justify-center  items-center text-[40px] fixed bottom-10 right-8 rounded-full bg-[#254E58] text-white cursor-pointer'>
        <Link to="https://www.whatsapp.com/">
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
      </div>
    </>
  )
}
