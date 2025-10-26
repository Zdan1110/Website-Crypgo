"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const servicesData = [
  {
    img: "icon-1.png",
    title: "Currency Wallet",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.1,
  },
  {
    img: "icon-5.png",
    title: "Currency Transaction",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.3,
  },
  {
    img: "icon-8.png",
    title: "Bitcoin Investment",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.5,
  },
  {
    img: "icon-3.png",
    title: "Currency Exchange",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.1,
  },
  {
    img: "icon-7.png",
    title: "Bitcoin Escrow",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.3,
  },
  {
    img: "icon-6.png",
    title: "Token Sale",
    desc: "Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
    delay: 0.5,
  },
];

const Services = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <section id="services" className="bg-darkmode py-32 my-10 text-white">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* Judul Section */}
        <div className="text-center max-w-lg mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-2">Services</h1>
          <p className="text-primary text-lg sm:text-xl font-medium">
            Buy, Sell And Exchange Cryptocurrency
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              custom={service.delay}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={`${getImagePrefix()}images/whyus/${service.img}`}
                alt={service.title}
                width={70}
                height={70}
                className="mb-6"
              />
              <h5 className="text-xl font-semibold mb-3">{service.title}</h5>
              <p className="text-gray-500 mb-4 text-sm">{service.desc}</p>
              <a
                href="#"
                className="text-primary font-medium inline-flex items-center hover:underline"
              >
                Read More{" "}
                <i className="fa fa-arrow-right ml-2 text-sm" aria-hidden="true"></i>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
