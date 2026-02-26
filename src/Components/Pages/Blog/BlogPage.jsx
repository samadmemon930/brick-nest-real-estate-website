import React, { useState } from "react";

const blogData = [
  {
    image: "/Images/Blog-1.jpg",
    title: "Will property prices crash in India due to t...",
    date: "September 20, 2025",
    desc: "“India’s mainstream residential prices have largely remained stable with negative bias, despite recovery being impa..."
  },
  {
    image: "/Images/Blog-2.jpg",
    title: "Complete guide about Property tax in Delhi..",
    date: "September 10, 2025",
    desc: "A modern redrawing of the 1807 version of the Commissioner's Grid plan for Manhattan, a few years before it ..."
  },
  {
    image: "/Images/Blog-3.jpg",
    title: "Will property prices crash in India due to t...",
    date: "March 10, 2025",
    desc: "Housing affordability in India has increased in the aftermath of the Coronavirus pandemic. An indicator of this can..."
  },
  {
    image: "/Images/Blog-4.jpg",
    title: "The red-hot property market that’s challengi...",
    date: "March 4, 2025",
    desc: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles..."
  },
  {
    image: "/Images/Blog-5.jpg",
    title: "The Top 5 Most Livable Mumbai Neighbourhoods",
    date: "May 28, 2025",
    desc: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles..."
  },
  {
    image: "/Images/Blog-6.jpg",
    title: "Mumbai – Where Home Prices Have Doubled in t...",
    date: "May 27, 2025",
    desc: "In Manhattan, uptown means north more precisely north-northeast, which is the direction the island and its st ..."
  },
  {
    image: "/Images/Blog-7.jpg",
    title: "Getting A House For Rent In Mumbai Downtown",
    date: "May 27, 2025",
    desc: "In contrast with New York City's urban atmosphere, the vast majority of the state is dominated by farms, fores..."
  },
  {
    image: "/Images/Blog-8.jpg",
    title: "Buying a house v/s Renting a house in India",
    date: "May 27, 2025",
    desc: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles...."
  },
  {
    image: "/Images/Blog-9.jpg",
    title: "Find the Most Attractive houses for Sale in...",
    date: "May 27, 2025",
    desc: "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles..."
  },
]

const BlogPage = () => {

  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="blog-page bg-gradient-to-r from-[#f0f0f0] via-white to-[#f0f0f0] px-4 md:px-6 lg:px-10 xl:px-20 py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {blogData.map((blog, index) => {

          const isActive = activeCard === index;

          return (
            <div
              key={index}
              className={`blog-item w-full p-2 bg-white/10 shadow-xl rounded-xl group cursor-pointer
              transform transition-all duration-300
              ${isActive ? "shadow-2xl -translate-y-2" : ""}`}

              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onTouchStart={() => setActiveCard(index)}
            >

              {/* image */}
              <div className="blog-image w-full rounded-xl overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={`w-full cursor-pointer transition-all duration-300
                  ${isActive ? "scale-110" : ""}`}
                />
              </div>

              {/* content */}
              <div className="blog-content pt-8 px-5 pb-4">

                <h4 className={`capitalize font-medium text-2xl transition-colors duration-300
                ${isActive ? "text-[#6919dd]" : ""}`}>
                  {blog.title}
                </h4>

                <span className="text-lg text-[#696969] pt-3">
                  {blog.date}
                </span>

                <p className="text-[#696969] text-md py-2 ">
                  {blog.desc}
                </p>

              </div>

            </div>
          )
        })}

      </div>

    </div>
  );
};

export default BlogPage;
