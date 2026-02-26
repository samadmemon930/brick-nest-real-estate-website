import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faInstagram,
  faLinkedin,
  faPinterest,
  faXTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-[#001a33] text-[#bbb] px-4 md:px-6 lg:px-10 xl:px-20 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 pb-10">
        
        {/* CONTACT */}
        <div>
          <h4 className="text-2xl text-white font-medium pb-3">
            Contact us
          </h4>

          <ul className="flex flex-col gap-3 mb-6">
            {[
              { icon: faPhone, text: "+92 322-3110467" },
              { icon: faEnvelope, text: "bricknest@gmail.com" },
              { icon: faLocationDot, text: "Hyderabad" },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FontAwesomeIcon icon={item.icon} />
                {item.text}
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <ul className="flex flex-wrap gap-4">
            {[
              faFacebookF,
              faWhatsapp,
              faXTwitter,
              faInstagram,
              faLinkedin,
              faPinterest,
              faYoutube,
              faTiktok,
            ].map((icon, i) => (
              <li key={i}>
                <Link
                  to="/"
                  className="flex items-center justify-center w-12 h-12 rounded-sm bg-[#002547] transition-colors duration-300 hover:bg-[#6919dd] focus:bg-[#6919dd]"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-xl hover:text-white"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h4 className="text-2xl text-white font-medium pb-3">
            List by Category
          </h4>
          <ul className="flex flex-col gap-2">
            {[
              "Apartments (17)",
              "Condos (8)",
              "Houses (1)",
              "Industrial (1)",
              "Land (1)",
              "Offices (2)",
              "Retail (4)",
              "Villas (2)",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to="/"
                  className="block transition-all duration-300 hover:text-[#6919dd] focus:text-[#6919dd] hover:ms-2"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LATEST PROPERTIES */}
        <div>
          <h4 className="text-2xl text-white font-medium pb-3">
            Latest Properties
          </h4>

          {[
            {
              img: "/Images/Footer-Image-01.jpg",
              title: "Luxury House in Greenville",
              price: "$ 860,000",
            },
            {
              img: "/Images/Footer-Image-02.jpg",
              title: "Modern Condo for Sale",
              price: "$ 150,000",
            },
            {
              img: "/Images/Footer-Image-03.jpg",
              title: "Apartment with Subunits",
              price: "$ 999 / month",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 mb-3">
              <img
                src={item.img}
                alt={item.title}
                className="img rounded-md object-cover"
              />
              <div>
                <span>{item.title}</span>
                <br />
                <span className="font-medium">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#bbbbbb] py-6 flex flex-col lg:flex-row gap-3 items-center justify-between">
        <p className="text-center">
          © Copyright 2025. All rights reserved by{" "}
          <Link
            to="/"
            className="text-white font-bold hover:text-[#6919dd] focus:text-[#6919dd]"
          >
            BrickNest
          </Link>
        </p>

        <div className="flex gap-4">
          <Link
            to="/"
            className="hover:text-[#6919dd] focus:text-[#6919dd]"
          >
            Documentation
          </Link>
          <Link
            to="/"
            className="hover:text-[#6919dd] focus:text-[#6919dd]"
          >
            Client Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;