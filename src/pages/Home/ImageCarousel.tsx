import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; 

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
  const [progress, setProgress] = useState(0);

  const autoplayDelay = 5000; // 5s

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (autoplayDelay / 100); // atualiza a cada 100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = () => {
    setProgress(0);
  };

  const handlePause = () => {
    if (swiperRef.current?.swiper.autoplay) swiperRef.current.swiper.autoplay.stop();
    setTimeout(() => {
      if (swiperRef.current?.swiper.autoplay) swiperRef.current.swiper.autoplay.start();
    }, 5000);
  };

  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-20 bg-gray-950 text-white px-6 overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full lg:w-2/3 flex justify-center items-center">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          className="w-full h-96 sm:h-[500px] rounded-3xl overflow-hidden"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <img
                  src={img}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl blur-sm brightness-75 z-0"
                />
                <img
                  src={img}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10 cursor-pointer"
                  onClick={handlePause}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Barra de progresso do autoplay */}
        <div className="absolute bottom-2 left-0 w-full h-1 z-5 bg-white/30 rounded">
          <div
            className="h-full bg-yellow-400 rounded transition-all duration-100 linear"
            style={{ width: `${progress}%` }}
          />
        </div>
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
        <Link
  to="/Galeria" 
  className="mt-4 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-yellow-500/40 transition inline-block text-center"
>
  Ver Galeria Completa
</Link>
      </div>
    </section>
  );
}
