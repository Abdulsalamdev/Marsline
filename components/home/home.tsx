'use client';

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Reusable animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn:Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const scaleUp:Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};

export function Grow() {
  return (
    <motion.div
      className="w-[90%] m-auto flex flex-wrap gap-[20px] pt-[70px] pb-[50px]"
      id="product"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.p
        variants={fadeInUp}
        className="text-[#131313] font-Plus text-[clamp(60px,6vw,90px)] font-semibold grow leading-[90px] w-min"
      >
        We Grow More <span className="text-[#DA017F]">Innovation</span> Growth.
      </motion.p>

      <motion.div variants={fadeInUp}>
        <p className="text-[#7e7e7e] font-Plus text-[19px] font-medium max-w-[330px] pb-[15px]">
          Prefer using Marsline over the other platforms because of its
          features, security, and convenience.
        </p>

        <motion.div
          className="flex flex-col items-end"
          variants={scaleUp}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-black text-[clamp(40px,3.125vw,50px)] font-Plus font-semibold">
            120<span className="text-[#DA017F]">k+</span>
          </p>
          <p className="text-[#C5C5C5] font-Plus text-[18px] font-semibold">
            Current users
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


export function Give() {
  return (
    <motion.div
      className="pb-[clamp(20px,4.5vw,70px)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleUp}
    >
      <div className="house flex justify-end items-center">
        <motion.div
          className="w-[clamp(70px,6.25vw,100px)] h-auto mr-[-20px]"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Image src="/images/business.png" alt="" width={100} height={100} />
        </motion.div>
      </div>
    </motion.div>
  );
}


export function Marquee() {
  return (
    <motion.div
      className="marquees w-[90%] m-auto flex justify-between pb-[70px] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      {[ "booking", "filckr", "pinterest", "spotify", "tokopedia" ].map((logo, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Image src={`/images/${logo}.png`} width={130} height={130} alt={logo} />
        </motion.div>
      ))}
    </motion.div>
  );
}


export function Workflow() {
  return (
    <motion.div
      className="w-[90%] m-auto flex gap-[40px] pb-[70px] flex-wrap justify-between"
      id="pricing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div variants={scaleUp}>
        <Image src="/images/room.png" width={400} height={100} alt="" />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <p className="flex gap-[15px] pb-[10px] items-center">
          <Image src="/images/Line.png" width={100} height={2} alt="" />
          <span className="text-[#2C2C2C] font-Plus text-[28px] font-medium">
            Our Workflow
          </span>
        </p>

        <p className="text-[#2C2C2C] font-Plus text-[clamp(15px,2vw,31px)] font-bold max-w-[470px]">
          Our workflows are already used for hundreds of companies
        </p>

        <div className="flex gap-[30px] items-center py-[30px] flex-wrap">
          {[
            { src: "/images/change.png", label: "Briefing" },
            { src: "/images/frame1.png" },
            { src: "/images/frame2.png" },
            { src: "/images/frame3.png" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={scaleUp}
              whileHover={{ scale: 1.1 }}
              className="bg-[#F1F1F1] p-[10px] rounded-full flex items-center gap-[10px]"
            >
              <Image
                src={item.src}
                width={item.label ? 50 : 30}
                height={item.label ? 50 : 30}
                alt={item.label || ""}
                className={item.label ? "bg-[#000] p-[10px] rounded-full" : ""}
              />
              {item.label && (
                <span className="text-[#292929] font-sans font-medium text-[clamp(18px,1.5vw,25px)] pr-[30px]">
                  {item.label}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex gap-[15px] items-center pb-[30px]"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <Image width={70} height={70} src="/images/play.png" alt="" className="w-[50px] h-auto" />
          <span className="text-[#2C2C2C] text-[clamp(20px,2vw,31px)] w-[270px] font-Plus font-bold">
            Explaining what you need
          </span>
        </motion.div>

        <motion.div
          className="text-[#AAA] text-[clamp(10px,1.5vw,20px)] font-Plus font-medium max-w-[650px]"
          variants={fadeIn}
        >
          Usability flesh that out, we want to empower the team with the right
          tools and guidance to uplevel our craft and build better. Can you
          ballpark the cost per unit for me golden goose they have.
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
