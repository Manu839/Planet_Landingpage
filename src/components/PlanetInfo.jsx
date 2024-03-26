import React, { useEffect, useState } from "react";
import Source from "../assets/icon-source.svg";
import { motion } from "framer-motion";

const PlanetInfo = ({ data, planet }) => {
  const colorButtons = {
    mercury: "bg-[#419EBB]",
    earth: "bg-[#6D2ED5]",
    jupiter: "bg-[#D83A34]",
    mars: "bg-[#D14C32]",
    neptune: "bg-[#2D68F0]",
    uranus: "bg-[#1EC1A2]",
    venus: "bg-[#EDA249]",
    saturn: "bg-[#CD5120]",
  };

  const planetSize = {
    mercury:
      "h-[111px] w-[111px] md:h-[184px] md:w-[184px] xl:h-[290px] xl:w-[290px]",
    earth:
      "h-[173px] w-[173px] md:h-[285px] md:w-[285px] xl:h-[450px] xl:w-[450px]",
    jupiter:
      "h-[224px] w-[224px] md:h-[369px] md:w-[369px] xl:h-[582px] xl:w-[582px]",
    mars: "h-[129px] w-[129px] md:h-[213px] md:w-[213px] xl:h-[336px] xl:w-[336px]",
    neptune:
      "h-[173px] w-[173px] md:h-[285px] md:w-[285px] xl:h-[450px] xl:w-[450px]",
    uranus:
      "h-[176px] w-[176px] md:h-[290px] md:w-[290px] xl:h-[458px] xl:w-[458px]",
    venus:
      "h-[154px] w-[154px] md:h-[253px] md:w-[253px] xl:h-[400px] xl:w-[400px]",
    saturn:
      "h-[256px] w-[256px] md:h-[422px] md:w-[422px] xl:h-[660px] xl:w-[660px]",
  };

  const planetInsidePosition = {
    mercury: "translate-y-[-20%]",
    earth: "translate-y-[50%]",
    jupiter: "translate-y-[5rem] md:translate-y-[8rem] xl:translate-y-[15rem]",
    mars: "translate-y-[-10%]",
    neptune: "translate-y-[40%]",
    uranus: "translate-y-[40%]",
    venus: "translate-y-[20%]",
    saturn: "translate-y-[70%] xl:translate-y-[90%]",
  };

  const [planetContentActive, setPlanetContentActive] = useState("overview");

  let sourcePlanet;
  if (planetContentActive === "overview") sourcePlanet = data.images.planet;
  else if (planetContentActive === "structure")
    sourcePlanet = data.images.internal;
  else sourcePlanet = data.images.planet;

  let contentText;
  if (planetContentActive === "overview") contentText = data.overview.content;
  else if (planetContentActive === "structure")
    contentText = data.structure.content;
  else contentText = data.geology.content;

  let contentSource;
  if (planetContentActive === "overview") contentSource = data.overview.source;
  else if (planetContentActive === "structure")
    contentSource = data.structure.source;
  else contentSource = data.geology.source;

  const contentActive = `before:absolute  before:bottom-0 before:h-[4px] before:w-full before:${colorButtons[planet]}`;

  return (
    <main>
      {/* links for smartphones */}
      <div className=" md:hidden border-b border-white/20 font-['spartan league'] tracking-[2px] font-bold text-[9px] h-[50px] flex uppercase  px-6 gap-10 justify-center items-center">
        <div
          onClick={() => setPlanetContentActive("overview")}
          className={`relative ${
            planetContentActive === "overview"
              ? ` ${colorButtons[planet]} bg-opacity-20`
              : ""
          } cursor-pointer h-full flex justify-center items-center px-2`}
        >
          <h2>overview</h2>
        </div>
        <div
          onClick={() => setPlanetContentActive("structure")}
          className={`relative
              ${
                planetContentActive === "structure"
                  ? ` ${colorButtons[planet]} bg-opacity-20`
                  : ""
              } cursor-pointer h-full flex justify-center items-center px-2`}
        >
          <h2>structure</h2>
        </div>

        <div
          onClick={() => setPlanetContentActive("surface")}
          className={`relative
              ${
                planetContentActive === "surface"
                  ? ` ${colorButtons[planet]} bg-opacity-20`
                  : ""
              }   cursor-pointer h-full flex justify-center items-center px-2`}
        >
          <h2>surface</h2>
        </div>
      </div>

      {/* wrap images, content and links */}
      <div className="flex flex-col items-center justify-center xl:grid xl:grid-cols-3 xl:mb-20  xl:mt-20">
        {/* Images */}
        <div className=" my-24 xl:my-0 flex justify-center items-center xl:col-start-1 xl:col-end-3">
          <motion.div
            className="relative flex flex-col justify-center items-center"
            whileHover={{
              rotate: 360,
              transition: { repeat: Infinity, duration: 5, ease: "linear" },
            }}
          >
            <img
              src={`${sourcePlanet}`}
              className={planetSize[planet]}
              alt="Planet"
            />
            {planetContentActive === "surface" && (
              <img
                src={data.images.geology}
                className={`absolute top-24 md:top-40 xl:top-64 xl:h-[160px] xl:w-[128px] md:h-[120px] md:w-[96px] h-[80px] w-[65px] ${planetInsidePosition[planet]} `}
                alt="Internal planet"
              />
            )}
          </motion.div>
        </div>
        {/* wrap content planets and links */}
        <div className="flex items-center  justify-center mx-10 md:gap-16 xl:flex-col xl:mx-0 xl:w-[350px] xl:col-auto xl:gap-0 xl:self-start">
          {/* Content about planets */}
          <div className="flex md:items-start flex-col gap-6 justify-center items-center xl:gap-1">
            <h1 className="text-[40px] font-[Antonio] uppercase xl:text-[80px] md:text-[48px]">
              {data.name}
            </h1>
            <p className="text-[11px] xl:text-[14px] md:text-left md:mx-0 text-center leading-6 xl:mb-4 xl:leading-6">
              {contentText}
            </p>
            <div className="flex gap-1 justify-center items-center opacity-50 text-xs mb-7 xl:text-sm xl:mb-10">
              <p className="font-['League Spartan']">Source :</p>
              <a
                href={contentSource}
                className="underline font-bold flex items-center gap-1"
              >
                Wikipedia
                <img alt="Source icon" src={Source} className="h-3 w-3" />
              </a>
            </div>
          </div>
          {/* Links to min medium screens */}
          <div className="flex items-start justify-center xl:flex-col ">
            <div
              className={`hidden md:gap-4 md:flex md:flex-col font-['Spartan League'] tracking-[2px] font-bold text-[9px] h-[50px] md:h-full uppercase xl:gap-4`}
            >
              <div
                onClick={() => setPlanetContentActive("overview")}
                className={`${
                  planetContentActive === "overview"
                    ? `${colorButtons[planet]}`
                    : `hover:${colorButtons[planet]}`
                } cursor-pointer h-full flex justify-start items-center border border-white/20 w-72 gap-3 pl-5 py-2 md:h-10  xl:w-[350px] xl:h-[48px] hover:bg-[#D8D8D8]/20 `}
              >
                <p className="opacity-50 font-bold font-[Spartan League]">01</p>
                <h2>overview</h2>
              </div>
              <div
                onClick={() => setPlanetContentActive("structure")}
                className={`${
                  planetContentActive === "structure"
                    ? `${colorButtons[planet]}`
                    : `hover:${colorButtons[planet]}`
                } cursor-pointer h-full flex justify-start items-center border border-white/20 w-72 gap-3 pl-5 py-2 md:h-10  xl:w-[350px] xl:h-[48px] hover:bg-[#D8D8D8]/20  `}
              >
                <p className="opacity-50 font-bold font-[Spartan League]">02</p>
                <h2>internal structure</h2>
              </div>

              <div
                onClick={() => setPlanetContentActive("surface")}
                className={` ${
                  planetContentActive === "surface"
                    ? `${colorButtons[planet]}`
                    : `hover:${colorButtons[planet]}`
                }  cursor-pointer h-full flex justify-start items-center border border-white/20 w-72 gap-3 pl-5 py-2 md:h-10 xl:w-[350px] xl:h-[48px] hover:bg-[#D8D8D8]/20  `}
              >
                <p className="opacity-50 font-bold font-[Spartan League]">03</p>
                <h2>surface geology</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Number info */}
      <div className="mx-6 flex flex-col gap-2 md:gap-6 mb-12 md:flex-row xl:justify-center xl:items-center xl:mb-14">
        <div className="border border-white/20 px-6 pt-4 pb-3 w-full xl:max-w-[250px] flex justify-between items-center md:flex-col md:items-start md:px-0 md:pl-4 xl:justify-center xl:h-[128px]  xl:gap-5 xl:pt-0 xl:pb-0">
          <h3 className="uppercase font-['Spartan league'] font-bold text-[8px] opacity-50 tracking-[0.8px] xl:text-[11px] xl:tracking-[1px] ">
            rotation time
          </h3>
          <p className="font-[Antonio] text-xl xl:text-[40px]">
            {data.rotation}
          </p>
        </div>
        <div className="border border-white/20 px-6 pt-4 pb-3 w-full xl:max-w-[250px] flex justify-between items-center md:flex-col md:items-start md:px-0 md:pl-4 xl:justify-center xl:h-[128px] xl:gap-5">
          <h3 className="uppercase font-['Spartan league'] font-bold text-[8px] opacity-50 tracking-[0.8px] xl:text-[11px] xl:tracking-[1px]">
            revolution time
          </h3>
          <p className="font-[Antonio] text-xl xl:text-[40px]">
            {data.revolution}
          </p>
        </div>
        <div className="border border-white/20 px-6 pt-4 pb-3 w-full xl:max-w-[250px] flex justify-between items-center md:flex-col md:items-start md:px-0 md:pl-4 xl:justify-center xl:h-[128px] xl:gap-5">
          <h3 className="uppercase font-['Spartan league'] font-bold text-[8px] opacity-50 tracking-[0.8px] xl:text-[11px] xl:tracking-[1px]">
            radius
          </h3>
          <p className="font-[Antonio] text-xl xl:text-[40px]">{data.radius}</p>
        </div>
        <div className="border border-white/20 px-6 pt-4 pb-3 w-full xl:max-w-[250px] flex justify-between items-center md:flex-col md:items-start md:px-0 md:pl-4 xl:justify-center xl:h-[128px] xl:gap-5">
          <h3 className="uppercase font-['Spartan league'] font-bold text-[8px] opacity-50 tracking-[0.8px] xl:text-[11px] xl:tracking-[1px]">
            average temp.
          </h3>
          <p className="font-[Antonio] text-xl tracking-[-0.75px] xl:text-[40px]">
            {data.temperature}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PlanetInfo;
