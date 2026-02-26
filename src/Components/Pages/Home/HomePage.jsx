import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DropdownOptions = {
  rent: ["Studio", "Apartments", "Houses", "Luxury Homes", "Office Spaces", "Townships"],
  buy: ["Status", "Property", "Active", "Solid"],
  forecolsure: ["Categories", "Apartments", "Houses", "Luxury Homes", "Office Spaces"]
}

const HomePage = () => {

  const [activetab, setActiveTab] = useState("rent")
  const [selectedOption, setSelectedOption] = useState(DropdownOptions.rent[0])
  const [visibleCount, setVisibleCount] = useState(3)

  const loadMore = () => {
    setVisibleCount(prev => prev + 3)
  }

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative min-h-screen md:h-screen lg:h-screen px-[2%] lg:px-[12%] bg-cover bg-center"
        style={{ backgroundImage: `url(${"/Images/Hero.jpg"})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-55"></div>

        {/* CONTENT */}
        <div className="relative pt-36 md:pt-0 md:h-screen lg:pt-0 xl:pt-0 z-10 flex flex-col justify-center items-center text-center h-full px-4 md:px-12 text-white">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Find Your Dream <span className="text-[#6919dd]">Home</span>
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Explore top properties in Mumbai with trusted real estate services.
          </p>

          {/* SEARCH CARD */}
          <div className="bg-[#15052da1] p-5 rounded-lg max-w-4xl w-full mx-auto">

            {/* TABS */}
            <div className="flex space-x-6 text-white font-semibold text-sm mb-4 border-b border-white/20">
              {["rent", "buy", "forecolsure"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab)
                    setSelectedOption(DropdownOptions[tab][0])
                  }}
                  className={`uppercase pb-2 border-b-2 transition ${
                    activetab === tab
                      ? "border-white text-white"
                      : "border-transparent text-white/70 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* SEARCH BAR */}
            <div className="flex flex-col md:flex-row bg-white rounded overflow-hidden">

              {/* SELECT */}
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="w-full md:w-auto p-[15px] text-[#5c727d] md:border-r outline-none text-lg cursor-pointer appearance-none"
              >
                {DropdownOptions[activetab].map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              {/* INPUT */}
              <input
                type="text"
                placeholder="Enter an address, state, city, area or zip code"
                className="w-full flex-1 px-5 py-3 text-black outline-none text-[15px]"
              />

              {/* BUTTON (FIXED FOR MOBILE) */}
              <button
                className="flex items-center 
                gap-2 bg-[#6919dd] border border-[#6919dd] text-white relative btn font-semibold w-full md:w-auto px-6 py-4"
              >
                <Link to="/" className='z-999'>
                <i className="fas fa-search"></i> Search Listings
              </Link></button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
