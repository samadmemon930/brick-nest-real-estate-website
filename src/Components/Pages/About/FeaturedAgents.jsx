import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const agentsData = [
  {
    id: 1,
    image: "/Images/agents-image-01.jpeg",
    name: "John Williams",
    role: "Real Estate Advisor",
    desc:
      "An experienced property advisor helping clients find the best residential opportunities.",
  },
  {
    id: 2,
    image: "/Images/agents-image-02.jpg",
    name: "Sarah Johnson",
    role: "Senior Property Consultant",
    desc:
      "Specialized in commercial real estate with a strong focus on client satisfaction.",
  },
  {
    id: 3,
    image: "/Images/agents-image-03.jpg",
    name: "Michael Brown",
    role: "Investment Specialist",
    desc:
      "Focused on real estate investments and long-term property value growth strategies.",
  },
];

const FeaturedAgents = () => {
  return (
    <div className="featured-agents bg-[#f6f5f5] px-4 md:px-6 lg:px-10 xl:px-20 py-20">
      <div className="agents-title flex flex-col items-center justify-center section-title mb-10">
        <h4 className="text-[34px] md:text-5xl font-bold pb-5">
          Meet Our Team
        </h4>
        <p className="text-[#7a7a7a] font-normal text-center text-lg w-full lg:w-1/2 mx-auto ">
          Utilizing her exceptional experience and knowledge of the luxury waterfront markets, Simone serves an extensive and elite worldwide client base.
        </p>
      </div>

      <div className="agents-wrapeer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5">
        {agentsData.map((agent) => (
          <div
            key={agent.id}
            className="agents-image w-full bg-white p-2 shadow-lg rounded-xl"
          >
            <div className="rounded-xl overflow-hidden w-full">
              <img
                src={agent.image}
                className="w-full h-full object-cover"
                alt={agent.name}
              />
            </div>

            <div className="agent-content p-5 pb-0 w-full">
              <h4 className="text-2xl font-bold cursor-pointer hover:text-[#6919dd] transition-colors duration-300">
                {agent.name}
              </h4>
              <span className="text-[#696969] text-lg">{agent.role}</span>
              <p className="text-[#696969] py-4 pb-8 text-justify">
                {agent.desc}
              </p>

              <div className="flex justify-between items-center gap-2 pb-3">
                <ul className="flex items-center gap-2 text-[#696969]">
                  {[faFacebookF, faXTwitter, faLinkedin, faPinterest, faInstagram].map(
                    (icon, index) => (
                      <li key={index}>
                        <Link
                          to="/about"
                          className="transition-colors duration-300 hover:text-[#6919dd]"
                        >
                          <FontAwesomeIcon className="text-xl" icon={icon} />
                        </Link>
                      </li>
                    )
                  )}
                </ul>

                <ul className="flex items-center gap-2 text-[#696969]">
                  {[faPhone, faEnvelope].map((icon, index) => (
                    <li key={index}>
                      <Link
                        to="/about"
                        className="transition-colors duration-300 hover:text-[#6919dd]"
                      >
                        <FontAwesomeIcon className="text-xl" icon={icon} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAgents;