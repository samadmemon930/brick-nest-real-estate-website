import React from 'react';

const categoriesData = [
  { image: "/Images/Explore-1.jpg", title: "Apartments", desc: "Ready to move-in apartments" },
  { image: "/Images/Explore-2.jpg", title: "Houses", desc: "Freedom and privacy in your home" },
  { image: "/Images/Explore-3.jpg", title: "Townships", desc: "Community living opportunities" },
  { image: "/Images/Explore-4.jpg", title: "Studio", desc: "Comfortable homes for people on-the-go" },
  { image: "/Images/Explore-5.jpg", title: "Luxury Homes", desc: "Exceptional amenities and materials" },
  { image: "/Images/Explore-6.jpg", title: "Office Spaces", desc: "Invest in commercial real estate" },
];

const Explore = () => {
  return (
    <div className="explore-categories px-4 md:px-6 lg:px-10 xl:px-20 py-20 ">

      {/* Title */}
      <div className="categories-title section-title mb-10">
        <h4 className="text-[34px] md:text-5xl font-bold pb-2">
          Explore by type
        </h4>
        <p className="text-[#2f2965] font-normal text-xl">
          Display how many properties are by city, area or category
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-10">
        {categoriesData.map((item, index) => (
          <div
            key={index}
            tabIndex={0}
            className="
              group relative h-[300px] rounded-lg overflow-hidden cursor-pointer
              focus:outline-none
            "
          >

            {/* Image */}
            <div
              className="
                absolute inset-0 bg-cover bg-center
                transition-transform duration-700
                group-hover:scale-110
                group-focus:scale-110
              "
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0 bg-black/50
                transition-all duration-500 pointer-events-none
                group-hover:bg-black/70
                group-focus:bg-black/70
              "
            />

            {/* Content */}
            <div
              className="
                relative z-10 h-full flex flex-col items-center justify-center
                text-center px-6
                opacity-0 translate-y-8 scale-95
                transition-all duration-700
                group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                group-focus:opacity-100 group-focus:translate-y-0 group-focus:scale-100
              "
            >
              <h4 className="text-2xl pb-1 font-normal text-white">
                {item.title}
              </h4>
              <span className="text-white text-xl font-normal">
                {item.desc}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
