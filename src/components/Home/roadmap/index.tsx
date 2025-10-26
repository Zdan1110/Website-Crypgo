"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

const roadmapData = [
  { date: "January 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
  { date: "March 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
  { date: "May 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
  { date: "July 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
  { date: "September 2045", desc: "Diam dolor ipsum sit amet erat ipsum lorem sit" },
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="roadmap" className="bg-darkmode py-28 text-center text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:max-w-7xl relative">
        {/* Garis Horizontal Utama (di belakang semua diamond) */}
        <div className="absolute top-[10.6rem] left-6 w-full border-t border-dashed border-gray-500 z-0"></div>

        {/* Judul Section */}
        <motion.div
          variants={fadeIn}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 relative z-10"
        >
          <h1 className="text-4xl font-bold mb-3 text-white">Roadmap</h1>
          <p className="text-sky-400 text-lg sm:text-xl font-medium">
            We Translate Your Dream Into Reality
          </p>
        </motion.div>

        {/* Swiper Timeline */}
        <motion.div
          variants={fadeIn}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              slidesPerView={1.5}
              spaceBetween={60}
              breakpoints={{
                640: { slidesPerView: 2.5 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-4"
            >
              {roadmapData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative flex flex-col items-center mt-4">
                    {/* Diamond besar */}
                    <div className="w-5 h-5 rotate-45 border-4 border-sky-400 bg-white z-10"></div>

                    {/* Garis vertikal */}
                    <div className="w-px h-10 border-l border-dashed border-gray-400"></div>

                    {/* Diamond kecil */}
                    <div className="w-3 h-3 rotate-45 bg-sky-400 mb-6"></div>

                    {/* Teks */}
                    <h3 className="text-lg font-bold mb-2 text-white">{item.date}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol Navigasi */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                ref={prevRef}
                className="w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center hover:bg-sky-500 transition"
              >
                ‹
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center hover:bg-sky-500 transition"
              >
                ›
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
