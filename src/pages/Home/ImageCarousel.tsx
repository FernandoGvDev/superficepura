"use client"; // Se estiver usando Next.js App Router
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/img/projetos/marmore1.jpeg",
  "/img/projetos/marmore2.jpeg",
  "/img/projetos/marmore3.jpeg",
  "/img/projetos/marmore4.jpeg",
  "/img/projetos/marmore5.jpeg",
  "/img/projetos/marmore6.jpeg",
  "/img/projetos/marmore7.jpeg",
  "/img/projetos/marmore8.jpeg",
  "/img/projetos/marmore9.jpeg",
];

export default function ImageCarousel() {
  const swiperRef = useRef<any>(null);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const handlePause = () => {
    setAutoplayPaused(true);
    if (swiperRef.current?.swiper.autoplay) swiperRef.current.swiper.autoplay.stop();
    setTimeout(() => {
      if (swiperRef.current?.swiper.autoplay) swiperRef.current.swiper.autoplay.start();
      setAutoplayPaused(false);
    }, 5000); // pausa 5s ao clicar
  };

  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-20 bg-gray-950 text-white px-6 overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full lg:w-2/3 flex justify-center items-center">
        {/* Setas */}
        <button
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="absolute left-3 top-1/2 z-20 bg-black/40 hover:bg-black/60 rounded-full p-2 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="absolute right-3 top-1/2 z-20 bg-black/40 hover:bg-black/60 rounded-full p-2 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, type: "progressbar" }}
          ref={swiperRef}
          onSlideChange={handlePause}
          className="w-full h-96 sm:h-[500px] rounded-3xl overflow-hidden"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                {/* Imagem de fundo desfocada */}
                <img
                  src={img}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl blur-sm brightness-75 z-0"
                />
                {/* Imagem principal */}
                <img
                  src={img}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10"
                  onClick={handlePause}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Texto */}
      <div className="flex flex-col lg:items-start items-center text-center lg:text-left gap-4 max-w-md mt-6 lg:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Conheça <span className="text-yellow-400">Nossos Resultados</span>
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Explore nossos projetos e veja a qualidade e sofisticação que entregamos
          em cada detalhe — com acabamentos de alto padrão e um toque de elegância.
        </p>
        <button className="mt-4 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-yellow-500/40 transition">
          Ver Galeria Completa
        </button>
      </div>
    </section>
  );
}
