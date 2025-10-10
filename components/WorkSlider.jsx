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
          title: "IFC Document Manager",
          path: "/thumb1.jpg",
          link: "https://1drv.ms/f/c/c140ce58107a3489/Egi6uoF7WPdPkL9N0XQhkekBGAgQ2rPVMDHc9yB1r3aPbw?e=ORLIxV",
        },
        {
          title: "BIMA+ IFC Reader MCP",
          path: "/thumb2.jpg",
          link: "https://1drv.ms/f/c/c140ce58107a3489/Er8Hzovuua9LrPqqqks6yHQBgSW8FsYQvCNZIEEYqpsGdg?e=KLkMTQ",
        },
        {
          title: "BIMA+ BMCP Blender Integration",
          path: "/thumb3.jpg",
          link: "https://1drv.ms/f/c/c140ce58107a3489/EtzP1KJThF5FtonL9pj1TiYBbdRmPXA3b-buFMbM82DwsQ?e=dFx3Gp",
        },
        {
          title: "COBie UI Standalone Application",
          path: "/thumb4.jpg",
          link: "https://1drv.ms/f/c/c140ce58107a3489/EqcGoC6qrgNKh1z5pF2kvvMBOgWcAdfBnGuDyFdpDIiDag?e=HjClb2",
        },
        ],
    },
    {
      images: [
        {
          title: "Blender COBie Report Generator Plugin",
          path: "/thumb5.jpg",
          link: "https://1drv.ms/f/c/c140ce58107a3489/EmJ38L8JV_JEnQuoD8ltp04BSJ37zGpBUhw1DXLMdppmjg?e=5z5hVZ",
        },
        {
          title: "IFC GUD Correction",
          path: "/thumb6.jpg",
          link: "https://1drv.ms/f/c/c140ce58107a3489/EmrcZDQAqLxBgpejCEkIxSgBAz5Hk8BcHjylSWMl_CkhYg?e=ChymJn",
        },
        {
          title: "The Effect of Dry Density on Shear Strength Parameters",
          path: "/thumb7.jpg",
          link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4644744",
        },
        {
          title: "First Aid for Scouts",
          path: "/thumb8.jpg",
          link: "https://drive.google.com/file/d/18bztQp2VaWik_PbxDQ7WX6_kcvRzB_fv/view?usp=drive_link",
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
