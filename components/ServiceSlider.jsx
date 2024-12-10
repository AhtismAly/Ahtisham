import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "BIM Integration",
    description: "Utilizing Building Information Modeling (BIM) for precise and efficient quantity extraction.",
  },
  {
    Icon: RxCrop,
    title: "Parametric Models",
    description: "Offering innovative parametric design solutions that merge creativity with computational precision for unique architectural and structural projects.",
  },
  {
    Icon: RxPencil2,
    title: "Quantity Estimation",
    description: "Providing quantity estimation services aligned with the IFC schema for standardized and precise construction data management.",
  },
  {
    Icon: RxDesktop,
    title: "Standard Compliance",
    description: "Adherence to industry standards, including IFC schema and ISO-certified processes.",
  },
  {
    Icon: RxReader,
    title: "Inter Disciplinary Coordination",
    description: "Collaborating across disciplines with clash detection to resolve conflicts and ensure seamless integration.",
  },
  {
    Icon: RxRocket,
    title: "Lifecycle Analysis",
    description: "Assessing quantities across different phases of the project lifecycle for optimized resource management.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
