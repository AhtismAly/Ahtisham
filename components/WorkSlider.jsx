import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "The Effect of Dry Density on Shear Strength Parameters",
          path: "/thumb1.jpg",
          link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4644744",
        },
        {
          title: "First Aid for Scouts",
          path: "/thumb2.jpg",
          link: "https://drive.google.com/file/d/18bztQp2VaWik_PbxDQ7WX6_kcvRzB_fv/view?usp=drive_link",
        },
        {
          title: "Project 5",
          path: "/thumb2.jpg",
          link: "http://example.com/project5",
        },
        {
          title: "Project 6",
          path: "/thumb3.jpg",
          link: "http://example.com/project6",
        },
      ],
    },
    {
      images: [
        {
          title: "Project 7",
          path: "/thumb2.jpg",
          link: "http://example.com/project7",
        },
        {
          title: "Project 8",
          path: "/thumb3.jpg",
          link: "http://example.com/project8",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "http://example.com",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "http://example.com",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
