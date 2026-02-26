import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: "/Images/service-icon1.svg",
    title: "Sell your home",
    desc: "We sell your home at the best market price",
  },
  {
    icon: "/Images/service-icon2.svg",
    title: "Home loans",
    desc: "We offer you free consultancy to get a loan",
  },
  {
    icon: "/Images/service-icon3.svg",
    title: "Home inspection",
    desc: "We make sure you get what you were promised",
  },
  {
    icon: "/Images/service-icon4.svg",
    title: "Legal services",
    desc: "Expert legal help for all related property items",
  }
]

const ServicePage = () => {
  return (
    <>
      <div className='service-page px-4 md:px-6 lg:px-10 xl:px-20 py-20'>
        
        <div className='service-title section-title mb-10'>
          <h4 className=' text-[34px] md:text-5xl font-bold pb-1'>Our Service</h4>
          <p className='text-[#2f2965] font-normal text-xl'>
            Bricknest offers you the best real estate website
          </p>
        </div>

        <div className='service-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5'>
          
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item flex flex-col items-center justify-center h-[350px] w-full text-center rounded-md pt-10 pl-7.5 pe-7.5 pb-7.5 "
            >
              
              <div className='service-icon w-15 p-2 rounded-md bg-[#e0f0fd] text-[#7778f1] mx-auto mb-8'>
                <img src={service.icon} className='w-full h-full' alt="" />
              </div>

              <div className='service-content'>
                
                <div className="text-xl text-black font-bold pb-2">
                  {service.title}
                </div>

                <p className='pb-3 text-lg text-[#696969] py-3'>
                  {service.desc}
                </p>

                <Link
                  to="#"
                  className='text-[#acacac] hover:text-[#6919dd] focus:text-[#6919dd] transition text-lg cursor pointer'
                >
                  Learn more <i className="bi bi-arrow-right"></i>
                </Link>

              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default ServicePage;
