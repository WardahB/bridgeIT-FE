"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub} from "react-icons/fa";
import Image from "next/image";

const AboutPage: React.FC = () => {
  const [popupContent, setPopupContent] = useState<null | {
    name: string;
    funFact: string;
    role: string;
    imgSrc: string;
  }>(null);



  const team = [
    {
      name: "Muhammad Faizan Asghar",
      role: "Backend Guy",
      imgSrc: "/faizi.jpg",
      funFact: "I Love Ice Cream Shakes 🥳",
      linkedin: "https://linkedin.com/in/muhammad-faizan-asghar",
      github: "https://github.com/MfaizanA21",
    },
    {
      name: "Warda Butt",
      role: "Mockups and FrontEnd Lady",
      imgSrc: "/warda.png",
      funFact: "",
      linkedin: "https://linkedin.com/warda",
      github: "https://github.com/warda",
    },
    {
      name: "Warda Aslam",
      role: "Project Supervisor",
      imgSrc: "/madam.png",
      funFact: "I am not kharoos as I seem on first interaction",
      linkedin: "https://linkedin.com/warda-aslam",
      github: "https://github.com/warda-aslam",
    },
    {
      name: "Abdullah Ishaq",
      role: "Documentation Guy",
      imgSrc: "/heroimage.png",
      funFact: "I chatgpt everything and I dont know how to code",
      linkedin: "https://linkedin.com/ahmed",
      github: "https://github.com/ahmed",
    },
    {
      name: "Aesyem Ali Fayyaz",
      role: "Co - Supervisor",
      imgSrc: "/aesyem.png",
      funFact: "Need a Sponsor? Aesyem Institute of Research is at your service",
      linkedin: "https://linkedin.com/zain",
      github: "https://github.com/zain",
    },
  ];

  const handlePopupOpen = (member: {
    name: string;
    funFact: string;
    role: string;
    imgSrc: string;
  }) => {
    setPopupContent(member);
  };

  const handlePopupClose = () => {
    setPopupContent(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
<section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute left-4 lg:left-20 z-0"
          >
            <Image
              src="/abouthero.png"
              alt="BridgeIT"
              width={500}
              height={400}
            />
          </motion.div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-8 w-full">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500"
            >
              Welcome to BridgeIT
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl max-w-3xl mx-auto text-white"
            >
              Bridging the gap between academia and students through innovative collaborations and interactive learning environments.
            </motion.p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // initial={{ y: 50, opacity: 0 }}
              // animate={{ y: 0, opacity: 1 }}
              // transition={{ duration: 1 }}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg"
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </div>
    </section>

      {/* Team Section */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-4">
            Meet Our Dynamic Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each of our team members brings a unique flair and a fun personality to BridgeIT!
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 mb-6">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
              <button
                onClick={() => handlePopupOpen(member)}
                className="mt-4 py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
              >
                Fun Fact
              </button>
              <div className="flex space-x-4 mt-6">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popup for Fun Facts */}
      {popupContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-purple-800 to-blue-900 p-12 rounded-xl text-center max-w-lg mx-auto shadow-2xl"
          >
            <div className="flex justify-center mb-6">
              <Image
                src={popupContent.imgSrc}
                alt={popupContent.name}
                width={100}
                height={100}
                className="rounded-full border-4 border-white"
              />
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 mb-2">
              {popupContent.name}
            </h2>
            <p className="text-lg text-gray-300 mb-2">{popupContent.role}</p>
            <p className="text-lg text-gray-400 bold mb-4">"{popupContent.funFact}"</p>
            <button
              onClick={handlePopupClose}
              className="mt-6 py-2 px-6 bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

  

      {/* Footer */}
      <footer className="py-6 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 BridgeIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;