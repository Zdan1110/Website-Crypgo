"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const roadmapData = [
  { date: "January 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
  { date: "March 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
  { date: "May 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
  { date: "July 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
  { date: "September 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
  { date: "November 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-darkmode py-32 text-white">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* Judul Section */}
        <motion.div
          variants={fadeIn}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-lg mx-auto mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Roadmap</h1>
          <p className="text-primary text-lg sm:text-xl font-medium">
            We Translate Your Dream Into Reality
          </p>
        </motion.div>

        {/* Swiper Roadmap */}
        <motion.div
          variants={fadeIn}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            slidesPerView={1.2}
            spaceBetween={24}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="roadmap-swiper pb-10"
          >
            {roadmapData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-section bg-opacity-10 p-8 rounded-2xl border border-section/30 shadow-lg transition duration-300 hover:shadow-2xl text-center">
                  <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-4"></div>
                  <h5 className="text-xl font-semibold mb-2">{item.date}</h5>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
