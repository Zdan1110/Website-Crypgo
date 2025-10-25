"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const featuresData = [
  {
    img: "/images/whyus/icon-1.png",
    title: "Easy To Start",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.1,
  },
  {
    img: "/images/whyus/icon-2.png",
    title: "Safe & Secure",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.3,
  },
  {
    img: "/images/whyus/icon-3.png",
    title: "Affordable Plans",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.5,
  },
  {
    img: "/images/whyus/icon-4.png",
    title: "Secure Storage",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.1,
  },
  {
    img: "/images/whyus/icon-5.png",
    title: "Protected By Insurance",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.3,
  },
  {
    img: "/images/whyus/icon-6.png",
    title: "24/7 Support",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.5,
  },
];

const Features = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <section id="features" className="py-32 bg-darkmode text-white">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* Judul Section */}
        <div className="text-center max-w-lg mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-2">Why Us!</h1>
          <p className="text-primary text-lg sm:text-xl font-medium">
            The Best In The Crypto Industry
          </p>
        </div>

        {/* Grid Fitur */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              custom={feature.delay}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start"
            >
              <Image
                src={`${getImagePrefix()}${feature.img}`}
                alt={feature.title}
                width={60}
                height={60}
                className="flex-shrink-0"
              />
              <div className="pl-4">
                <h5 className="text-xl font-semibold mb-2">{feature.title}</h5>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
