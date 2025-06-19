/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Hambuger } from "./img";
import Image from "next/image";




export function OverView() {
  return (
    <div className="bg flex justify-center text-center mb-[50px]">
      <p className="font-Plus font-normal text-white max-w-[1100px] text-[clamp(24px,2.5vw,35px)] text-center">
        <span className="text-white font-Plus text-[36px] font-bold ">
          Marsline
        </span>
        is a powerful and easily customizable multi-platform software that makes
        managing a company easier. We have been trusted by more than 3 thousand
        companies.
      </p>
    </div>
  );
}

//study case

export function Studies() {
  return (
    <div className="flex justify-between items-center flex-wrap w-[90%] m-auto pb-[50px]">
      <div>
        {" "}
        <p className="flex gap-[15px] pb-[10px] items-center">
          <Image src={"/images/Line.png"} width={100} height={2} alt="" />

          <span className="text-[#2C2C2c] font-Plus text-[28px] font-medium">
            Our Workflow
          </span>
        </p>
        <p className="text-[#2C2C2C] font-Plus text-[clamp(15px,2vw,31px)] font-bold max-w-[470px]  ">
          Our workflows are already used for hundreds of companies
        </p>
      </div>
      <div className="text-[#AAA] text-[16px] font-Plus font-meium w-[400px]">
        There are several case studies and several types of clients who entrust
        their business with various background and we have completed all of them
        well
      </div>
    </div>
  );
}

//review

export function Review() {
  return (
    <div className="w-[90%] m-auto pb-[70px]" id="about">
      <div className="flex flex-wrap gap-[30px]">
        <div className="flex bg-black grow">
          <img src="/images/red.png" alt="" />
          <div className="bg-black text-white font-Plus flex flex-col gap-[10px] justify-center px-[20px] py-[30px]">
            <p className="text-[clamp(20px,1.8vw,28px)] font-bold">
              Task Management
            </p>
            <p className="text-[18px] max-w-[400px]">
              Help you bring plans to reality without making mistakes and errors
              or missing deadline. Things run smoothly when you have good task
              managemen tskills
            </p>
          </div>
        </div>
  
        <img src="/images/computer.png" alt="" />
        <img src="/images/call.png" alt="" />
        <div className="bg-[#DA017F] flex grow">
          <img src="/images/black.png" alt="" />
          <div className="bg-[#DA017F] text-white font-Plus flex flex-col gap-[10px] justify-center py-[30px] px-[20px]">
            <p className="text-[clamp(20px,1.8vw,28px)] font-bold">
              Quick Conversation
            </p>
            <p className="text-[18px] max-w-[400px]">
              Help you bring plans to reality without making mistakes and errors
              or missing deadline. Things run smoothly when you have good task
              managemen tskills
            </p>
          </div>
        </div>
        <div className="flex bg-black grow">
          <img src="/images/red.png" alt="" className="" />
          <div className="bg-black text-white font-Plus flex flex-col gap-[10px] justify-center py-[30px] px-[20px]">
            <p className="text-[clamp(20px,1.8vw,28px)] font-bold">
              Sales & Finance Management
            </p>
            <p className="text-[18px] max-w-[400px]">
              Help you bring plans to reality without making mistakes and errors
              or missing deadline. Things run smoothly when you have good task
              managemen tskills
            </p>
          </div>
        </div>
        <img src="/images/talk.png" alt="" />
      </div>
    </div>
  );
}

//our power

export function Ourpower() {
  return (
    <div
    id="partner"
      className="w-[90%] m-auto
    "
    >
      <div className="flex flex-col gap-[15px] justify-center items-center">
        <div className="flex gap-[10px] items-center">
          <Image src={"/images/Line.png"} width={100} height={2} alt="" />

          <p className="text-[#2C2C2C] font-Plus text-[25px] font-medium">
            Our Power
          </p>
          <Image src={"/images/Line.png"} width={100} height={2} alt="" />
        </div>
        <div
          className="text-[#2C2C2C] text-center text-[clamp(30px,2.5vw,44px)] font-Plus font-bold max-w-[800px] pb-[50px]
        "
        >
          We have several power that have been proven to make our client grow
        </div>
      </div>
      <div className="flex gap-[50px] flex-wrap pb-[50px]">
        <img src="/images/ontable.png" alt="" className="w-[300px]" />
        <img src="/images/complete.png" alt="" className="" />
      </div>
      <div className="flex justify-between items-center flex-wrap pb-[70px]">
        <p className="text-[#2C2C2C] text-[clamp(20px,3.5vw,50px)] w-[190px] font-Plus font-bold leading-[50px]">
          Detailed Review
        </p>
        <div className="flex gap-[clamp(20px,4.5vw,70px)] flex-wrap">
          <p className="max-w-[470px] text-[#7C7C7C] font-Plus text-[clamp(17px,1.6px,25px)]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit,
            orci cum aptent scelerisque tortor morbi sed cras turpis duis augue
            consequat vitae a.
          </p>
          <img src="/images/arrow.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap pb-[70px]">
        <p className="text-[#2C2C2C] text-[clamp(20px,3.5vw,50px)] w-[190px] font-Plus font-bold leading-[50px]">
          Fast Clarify
        </p>
        <div className="flex gap-[clamp(20px,4.5vw,70px)] flex-wrap">
          <p className="max-w-[470px] text-[#7C7C7C] font-Plus text-[clamp(17px,1.6px,25px)]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit,
            orci cum aptent scelerisque tortor morbi sed{" "}
          </p>
          <img src="/images/arrow.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap pb-[70px]">
        <p className="text-[#2C2C2C] text-[clamp(20px,3.5vw,50px)] w-[190px] font-Plus font-bold leading-[50px]">
          Super Organized
        </p>
        <div className="flex gap-[clamp(20px,4.5vw,70px)] flex-wrap">
          <p className="max-w-[470px] text-[#7C7C7C] font-Plus text-[clamp(17px,1.6px,25px)]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit,
            orci cum aptent scelerisque tortor morbi sed cras turpis duis augue
            consequat vitae a.
          </p>
          <img src="/images/arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
}

