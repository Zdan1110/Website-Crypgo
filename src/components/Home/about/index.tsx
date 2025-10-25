"use client";
import Image from "next/image";
import { aboutData } from "@/app/api/data";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about-us" className="py-32 bg-darkmode text-white">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Gambar */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src= {`${getImagePrefix()}images/about/about.png`}
              alt="About Us"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-64 sm:w-80 md:w-[400px] lg:w-[500px] h-auto"
            />
          </motion.div>

          {/* Teks */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold mb-2">About Us</h1>
            <p className="text-primary text-xl font-medium">
              The Most Trusted Cryptocurrency Platform
            </p>
            <p className="text-gray-300">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
            <p className="text-gray-300 mb-6">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>

            {/* List poin */}
            <ul className="space-y-5">
              {[
                "Tempor erat elitr rebum at clita",
                "Tempor erat elitr rebum at clita",
                "Tempor erat elitr rebum at clita",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-primary font-bold mr-3">
                    ✓
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-6 bg-primary hover:bg-transparent border border-primary text-darkmode hover:text-primary font-medium rounded-lg py-3 px-6 transition">
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
