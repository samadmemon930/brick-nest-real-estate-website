import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    image: "/Images/testimonials-1.webp",
    name: "Donna Seller",
    role: "Happy Seller",
    text:
      "I reviewed and purchased a number of different WordPress Themes before settling on Bricknest.",
  },
  {
    image: "/Images/testimonials-2.webp",
    name: "Mika Gilmore",
    role: "Happy Seller",
    text:
      "The Bricknest Estate team did an outstanding job helping me buy and create my first real estate website.",
  },
  {
    image: "/Images/testimonials-3.webp",
    name: "Lisa Simpson",
    role: "Happy Buyer",
    text:
      "We hired the Bricknest Estate team as our buyer agent because they are the perfect team for real estate projects.",
  },
];

const getLoopSlides = (slides, minSlides = 6) => {
  if (slides.length >= minSlides) return slides;
  let duplicated = [...slides];
  while (duplicated.length < minSlides) {
    duplicated = [...duplicated, ...slides];
  }
  return duplicated;
};

const loopTestimonials = getLoopSlides(testimonials, 6);

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page bg-[#f3f1ff] px-4 md:px-6 lg:px-10 xl:px-20 py-20">
      <div className="flex flex-col items-center mb-14">
        <h4 className="text-[34px] md:text-5xl font-bold pb-5 text-[#1e1e1e]">
          Testimonials
        </h4>
        <p className="text-[#6b6b6b] text-center text-lg w-full lg:w-1/2">
          Publish the best of your client testimonials and let the world know
          what a great agent or real estate agency you are.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          1300: { slidesPerView: 3, slidesPerGroup: 1 },
          900: { slidesPerView: 2, slidesPerGroup: 1 },
          0: { slidesPerView: 1, slidesPerGroup: 1 },
        }}
        modules={[Pagination, Autoplay]}
      >
        {loopTestimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-[#1e1e1e]">
                    {item.name}
                  </h4>
                  <span className="text-[#7a7a7a] text-lg">{item.role}</span>
                </div>
              </div>

              <p className="py-6 text-[#6f6f6f] text-md leading-relaxed">
                {item.text}
              </p>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-yellow-500 text-sm"
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsPage;