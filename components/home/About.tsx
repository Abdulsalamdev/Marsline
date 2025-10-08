'use client';

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Animation Variants
const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn:Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};

// ======================
// OVERVIEW SECTION
// ======================
export function OverView() {
  return (
    <motion.div
      className="bg-[#DA017F] flex justify-center text-center mb-[50px] py-[80px] px-[20px] rounded-[20px] shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <p className="font-Plus text-white max-w-[1100px] text-[clamp(22px,2.2vw,34px)] leading-relaxed">
        <span className="font-bold text-[clamp(28px,3vw,42px)]">Marsline</span> 
        {" "}is a powerful and easily customizable multi-platform software that makes
        managing a company easier. We have been trusted by more than{" "}
        <span className="font-semibold text-white/90">3 thousand companies</span>.
      </p>
    </motion.div>
  );
}

// ======================
// STUDIES SECTION
// ======================
export function Studies() {
  return (
    <motion.div
      className="flex justify-between items-center flex-wrap w-[90%] m-auto pb-[70px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div variants={fadeInUp}>
        <p className="flex gap-[15px] pb-[10px] items-center">
          <Image src="/images/Line.png" width={100} height={2} alt="" />
          <span className="text-[#2C2C2C] font-Plus text-[28px] font-medium">
            Study Cases
          </span>
        </p>
        <p className="text-[#2C2C2C] font-Plus text-[clamp(16px,2vw,30px)] font-bold max-w-[470px]">
          Our workflows are already used for hundreds of companies
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="text-[#7C7C7C] text-[18px] font-Plus font-medium max-w-[420px]"
      >
        There are several case studies and various clients who entrusted
        their businesses with us. We’ve completed them successfully with
        measurable growth.
      </motion.div>
    </motion.div>
  );
}

// ======================
// REVIEW SECTION
// ======================
export function Review() {
  const reviews = [
    {
      title: "Task Management",
      text: "Helps you bring plans to reality without making mistakes or missing deadlines. Projects run smoothly when you have great task management tools.",
      bg: "bg-black",
      img: "/images/red.png",
      textColor: "text-white",
    },
    {
      title: "Quick Conversation",
      text: "Communicate instantly and effectively across teams. Save time, avoid confusion, and get results faster.",
      bg: "bg-[#DA017F]",
      img: "/images/black.png",
      textColor: "text-white",
    },
    {
      title: "Sales & Finance Management",
      text: "Track sales, manage budgets, and optimize profit margins easily with our integrated financial tools.",
      bg: "bg-black",
      img: "/images/red.png",
      textColor: "text-white",
    },
  ];

  return (
    <div className="w-[90%] m-auto pb-[90px]" id="about">
      <motion.div
        className="flex flex-wrap gap-[30px] justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            variants={scaleUp}
            whileHover={{ scale: 1.05 }}
            className={`${r.bg} flex grow min-w-[320px] rounded-[16px] overflow-hidden shadow-lg transition-transform`}
          >
            <img src={r.img} alt={r.title} className="object-cover" />
            <div
              className={`${r.bg} ${r.textColor} font-Plus flex flex-col justify-center px-[20px] py-[30px]`}
            >
              <p className="text-[clamp(20px,1.8vw,28px)] font-bold pb-[5px]">
                {r.title}
              </p>
              <p className="text-[17px] max-w-[380px] opacity-90 leading-[1.6]">
                {r.text}
              </p>
            </div>
          </motion.div>
        ))}

        <motion.img
          src="/images/computer.png"
          alt=""
          className="rounded-[16px] shadow-md"
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="/images/call.png"
          alt=""
          className="rounded-[16px] shadow-md"
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="/images/talk.png"
          alt=""
          className="rounded-[16px] shadow-md"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </div>
  );
}

// ======================
// OUR POWER SECTION
// ======================
export function Ourpower() {
  const features = [
    {
      title: "Detailed Review",
      text: "Get in-depth analysis and reports for all aspects of your business performance.",
    },
    {
      title: "Fast Clarify",
      text: "Resolve issues quickly and clearly with organized workflows and communication tools.",
    },
    {
      title: "Super Organized",
      text: "Stay ahead with structured systems that keep everything running seamlessly.",
    },
  ];

  return (
    <motion.div
      className="w-[90%] m-auto"
      id="partner"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="flex flex-col gap-[15px] justify-center items-center pb-[50px]">
        <div className="flex gap-[10px] items-center">
          <Image src="/images/Line.png" width={100} height={2} alt="" />
          <p className="text-[#2C2C2C] font-Plus text-[25px] font-medium">
            Our Power
          </p>
          <Image src="/images/Line.png" width={100} height={2} alt="" />
        </div>
        <p className="text-[#2C2C2C] text-center text-[clamp(26px,2.5vw,44px)] font-Plus font-bold max-w-[800px]">
          We have several strengths that have been proven to help our clients grow
        </p>
      </div>

      <motion.div
        className="flex gap-[50px] flex-wrap pb-[60px] justify-center"
        variants={fadeIn}
      >
        <motion.img
          src="/images/ontable.png"
          alt=""
          className="w-[300px] rounded-[12px] shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="/images/complete.png"
          alt=""
          className="rounded-[12px] shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {features.map((f, i) => (
        <motion.div
          key={i}
          className="flex justify-between items-center flex-wrap pb-[70px] border-b border-gray-200"
          variants={fadeInUp}
        >
          <p className="text-[#2C2C2C] text-[clamp(22px,3.5vw,48px)] w-[190px] font-Plus font-bold leading-[50px]">
            {f.title}
          </p>
          <div className="flex gap-[clamp(20px,4.5vw,70px)] flex-wrap items-center">
            <p className="max-w-[470px] text-[#7C7C7C] font-Plus text-[clamp(16px,1.5vw,22px)] leading-[1.7]">
              {f.text}
            </p>
            <motion.img
              src="/images/arrow.png"
              alt=""
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 150 }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
