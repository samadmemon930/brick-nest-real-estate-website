import React from 'react'

const collectionData = [
  { img: "/Images/collection-img-1.webp", title: "Mumbai", listings: "8 listings" },
  { img: "/Images/collection-img-2.webp", title: "Bengaluru", listings: "1 listings" },
  { img: "/Images/collection-img-3.webp", title: "Chennai", listings: "2 listings" },
  { img: "/Images/collection-img-4.webp", title: "Delhi", listings: "2 listings" },
  { img: "/Images/collection-img-5.webp", title: "Pune", listings: "8 listings" },
  { img: "/Images/collection-img-6.webp", title: "Thane", listings: "1 listings" },
  { img: "/Images/collection-img-7.webp", title: "Noida", listings: "1 listings" },
  { img: "/Images/collection-img-8.webp", title: "Gurgaon", listings: "1 listings" },
  { img: "/Images/collection-img-9.jpg", title: "Faridabad", listings: "1 listings" },
  { img: "/Images/collection-img-10.webp", title: "Ahmedabad", listings: "1 listings" },
  { img: "/Images/collection-img-11.webp", title: "Hyderabad", listings: "1 listings" },
  { img: "/Images/collection-img-12.webp", title: "Ghaziabad", listings: "1 listings" },
]

const FeaturedCollection = () => {
  return (
    <div className='featured-collection px-4 md:px-6 lg:px-10 xl:px-20 py-20'>
      <div className='service-title section-title mb-10'>
        <h4 className='text-[34px] md:text-5xl font-bold pb-1'>
          Featured Collection
        </h4>
        <p className='text-[#2f2965] font-normal text-xl'>
          Display how many properties are by category, city or area
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {collectionData.map((item, index) => (
          <div
            key={index}
            tabIndex={0}                       // Make card focusable
            className='group flex items-center gap-4 bg-white rounded-md
              shadow-[0_5px_30px_0_rgba(38,42,76,.15)]
              p-3 outline-none
              transition-shadow duration-300
              ]
              ]'
          >
            {/* IMAGE */}
            <div className='w-20 h-20 overflow-hidden rounded-md shrink-0'>
              <img
                src={item.img}
                alt={item.title}
                className='w-full h-full object-cover transition-transform duration-300
                  hover:scale-110      // mouse hover desktop
                  focus:scale-110      // keyboard / mobile tap
                  group-focus:scale-110' // group focus for card
              />
            </div>

            {/* TEXT */}
            <div>
              <h4 className='text-[#2b2b2b] text-lg font-semibold'>
                {item.title}
              </h4>
              <p className='text-[#696969] text-sm'>
                {item.listings}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCollection
