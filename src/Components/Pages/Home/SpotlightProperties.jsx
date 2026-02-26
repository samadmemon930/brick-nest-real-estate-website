import React from 'react'
import PropertiesData from "../../../Properties.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';


const SpotlightProperties = () => {
  return (
    <>
      <div className='spotlight-properties px-4 md:px-6 lg:px-10 xl:px-20 py-20'>
        <div className='service-title section-title mb-10'>
          <h4 className='text-[34px] md:text-5xl font-bold pb-1'>Spotlight Properties</h4>
          <p className='text-[#2f2965] font-normal text-xl'>Add the listings you want to showcase as featured</p>
        </div>

        <div className="py-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,              // ⏱ 2.5 seconds (2000 = 2s, 3000 = 3s)
              disableOnInteraction: false, // user swipe kare to bhi autoplay chalta rahe
            }}
            breakpoints={{
              1399: { slidesPerView: 3 },
              1199: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className='property-card-slider py-5'
          >

            {PropertiesData.spotlight.map((property) => (
              <SwiperSlide key={property.id}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden mb-10">

                  {/* INNER IMAGE SLIDER */}
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={true}
                    className='propertie-img-slider'
                  >
                    {property.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={img}
                          alt={`${property.title} ${index + 1}`}
                          className='w-full object-cover rounded img '
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Property Info */}
                  <div className='py-4 my-2'>
                    <div className='px-3'>
                      <h3 className='text-lg  xl:text-xl font-semibold mb-2 text-gray-900'>{property.title}</h3>
                      <p className='text-gray-600 text-sm mt-1'>
                        <i className='bi bi-house-door-fill mr-1'></i> {property.bedrooms} Beds  &nbsp; -- &nbsp;
                        <i className='bi bi-droplet-half mr-1'></i> {property.bathrooms} Baths  &nbsp; -- &nbsp;
                        <i className='bi bi-fullscreen mr-1'></i> {property.size}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4 border-t border-[#e5e7eb] px-4 pt-2 ">
                      <p className='font-bold text-xl mt-2'>{property.price}</p>
                      <img
                        src={property.avatar}
                        alt="Agent"
                        className='w-[50px] h-[50px] object-cover rounded border border-[#e5e7eb] mr-3 '
                      />

                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </>
  )
}

export default SpotlightProperties;