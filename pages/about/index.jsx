import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Engineering Technologies & Software",
        list: [
          "Artificial Intelligence (AI)",
          "Construction Software Development",
          "AutoCAD & Revit (for modeling)",
          "SAP & ETABS (for structural analysis)",
          "Microsoft Project & Primavera P6",
          "C++ & Python (for scripting and analysis)",
          "ArcGIS (for geospatial analysis)",
          "Microsoft Suite",
          "EPANET (for water distribution system modeling)",
          "Navisworks",
        ],
      },
      {
        title: "Civil Engineering Software",
        list: ["BIM Collab", "Solibri (for IFC models and clash detection)", "Revit (for modeling)", "Dynamo", "Grasshopper with Rhino (for parametric design)", "Blender (reading IFC models)"],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Smart Solutions for Underground Constructions - Maccaferri - 2024",
      },
      {
        title: "Exposing Hidden Dangers of Intersections - RDV Systems - 2023",
      },
      {
        title: "Green Investments: Renewable Energy - ADB - 2023",
      },
      {
        title: "Sustainable Goals on Water and Sanitation - ADB - 2023",
      },
      {
        title: "Designing Soil Nailing Applications - Maccaferri - 2023",
      },
      {
        title: "Advance Clean Energy Summit - ASME - 2023",
      },
      {
        title: "Health, Safety & Environment Management - PEC - 2023",
      },
      {
        title: "Advanced Numerical Techniques (FLAC) - PEC - 2022",
      },
      {
        title: "Construction Safety and Challenges - PEC - 2022",
      },
      {
        title: "AutoCAD Course - Virtual University - 2022",
      },
      {
        title: "ETABS - Lahore Leads University - 2018",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "BIM specialist - Kolektor Koling d.o.o",
        stage: "2025 – Current",
      },
      {
        title: "Site Engineer - Infinity Building Constructing LLC",
        stage: "2023 – 2024",
      },
      {
        title: "Site Engineer Cum Estimator - Nvision A&EC",
        stage: "2021 – 2023",
      },
      {
        title: "Site Civil Engineer - Thaheem (PVT) LTD",
        stage: "2018 – 2021",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Master’s in Building Information Modelling A+ - University of Ljubljana",
        stage: "2025",
      },
      {
        title: "Master’s in Building Information Modelling A+ - University of Minho",
        stage: "2024",
      },
      {
        title: "Bachelor's in Civil Engineering - Lahore Leads University",
        stage: "2021",
      },
      {
        title: "HSSC Pre-Engineering – Grafton College",
        stage: "2016",
      },
      {
        title: "SSC – Army Public School and College System Jutial Gilgit",
        stage: "2013",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-xl xl:text-2xl text-white"
          >
            Transforming <span className="text-accent">Visions</span> into
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Over 6 years ago, I started my career as a Civil Engineer. Since 
            then, I've evolved into a Civil BIM Engineer and BIM Specialist, 
            developing custom programming solutions with artificial intelligence 
            integration for diverse infrastructure projects. I create AI-powered 
            automated workflows and tools that integrate Building Information 
            Modeling (BIM) platforms across MEP systems, civil structures, and 
            architectural elements, while implementing intelligent preventive 
            maintenance automation technologies to deliver efficient and resilient 
            digital engineering solutions.        
          </motion.p>
        </div>

        {/* Info Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:items-start"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-1 xl:py-2 flex flex-col gap-y-1 xl:gap-y-2 items-start xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col gap-y-1 text-left text-white/60"
              >
                <div className="font-light">{item.title}</div>
                <div>
                  {item.list
                    ? item.list.map((listItem, listI) => (
                        <div key={listI} className="ml-4">
                          - {listItem}
                        </div>
                      ))
                    : item.stage}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
