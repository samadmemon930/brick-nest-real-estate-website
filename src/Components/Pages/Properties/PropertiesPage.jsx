import React, { useState } from 'react'
import PropertiesData from "../../../Properties.json"

const PropertiesPage = () => {

  const [activeCard, setActiveCard] = useState(null)

  return (
    <>
      <div className='latest-properties px-4 md:px-6 lg:px-10 xl:px-20 py-20'>

        {/* TITLE */}
        <div className='service-title section-title mb-10'>
          <h4 className='text-[34px] md:text-5xl font-bold pb-1'>
            Properties
          </h4>

          <p className='text-[#2f2965] font-normal text-xl'>
            List your latest properties and order them as you wish
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {PropertiesData.latest.map((property, index) => {

            const isActive = activeCard === index

            return (
              <div
                key={property.id}

                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}

                onTouchStart={() => setActiveCard(index)}

                className={`
                  bg-white
                  rounded-2xl
                  shadow-md
                  cursor-pointer
                  overflow-hidden
                  h-[360px]

                  transform transition-all duration-300 ease-in-out

                  ${isActive ? "shadow-2xl -translate-y-2" : ""}
                `}
              >

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={property.images[0].replace('/public', '')}
                    alt={property.title}

                    className={`
                      w-full
                      h-[200px]
                      object-cover

                      transform transition-transform duration-300 ease-in-out

                      ${isActive ? "scale-105" : ""}
                    `}
                  />

                </div>

                {/* BODY */}
                <div className='py-4 my-2 px-4 flex flex-col h-[160px]'>

                  <h3 className={`
                    text-lg xl:text-xl font-semibold mb-2
                    transition-colors duration-300

                    ${isActive ? "text-[#2f2965]" : "text-gray-900"}
                  `}>
                    {property.title}
                  </h3>


                  <p className='text-gray-600 text-sm mt-1'>
                    <i className='bi bi-house-door-fill mr-1'></i>
                    {property.bedrooms} Beds &nbsp; -- &nbsp;

                    <i className='bi bi-droplet-half mr-1'></i>
                    {property.bathrooms} Baths &nbsp; -- &nbsp;

                    <i className='bi bi-fullscreen mr-1'></i>
                    {property.size}
                  </p>


                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-auto border-t border-[#e5e7eb] pt-2">

                    <p className={`
                      font-bold text-xl mt-2
                      transition-colors duration-300

                      ${isActive ? "text-[#2f2965]" : ""}
                    `}>
                      {property.price}
                    </p>


                    <img
                      src={property.avatar}
                      alt="Agent"

                      className={`
                        w-[50px]
                        h-[50px]
                        object-cover
                        rounded-full
                        border border-[#e5e7eb]

                        transform transition-transform duration-300

                        ${isActive ? "scale-110" : ""}
                      `}
                    />

                  </div>

                </div>

              </div>
            )

          })}

        </div>

      </div>
    </>
  )
}

export default PropertiesPage
