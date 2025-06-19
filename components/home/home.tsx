/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Hambuger } from "./img";
import Image from "next/image";

//features
export function Grow() {
  return (
    <div className="w-[90%] m-auto flex flex-wrap gap-[20px] pt-[70px] pb-[50px]" id="product">
      <p className="text-[#131313] font-Plus text-[clamp(60px,6vw,90px)] font-semibold grow leading-[90px] w-min">
        We Grow More <span className="text-[#DA017F]">Innovation</span> Growth.
      </p>
      <div className="">
        <p className="text-[#C5C5C5] font-Plus text-[19px] font-semibold max-w-[330px] ">
          Prefer using Marsline over the other platforms because of its
          features, security, and convenience.
        </p>
        <div className="flex flex-col items-end">
          <p className="text-black text-[clamp(40px,3.125vw,50px)] font-Plus font-semibold ">
            120<span className="text-[#DA017F]">k+</span>
          </p>
          <p className="text-[#C5C5C5] font-Plus text-[18px] font-semibold">
            Current users
          </p>
        </div>
      </div>
    </div>
  );
}

export function Give() {
  return (
    <div className="pb-[clamp(20px,4.5vw,70px)]">
      <div className="house flex justify-end items-center">
        <div className="w-[clamp(70px,6.25vw,100px)] h-auto mr-[-20px]">
          <Image
            src={"/images/business.png"}
            alt={""}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

//supports
export function Marquee() {
  return (
    <div className="marquees w-[90%] m-auto flex justify-between pb-[70px] overflow-hidden">
      <Image src={"/images/booking.png"} width={130} height={130} alt={""} />
      <Image src={"/images/filckr.png"} width={130} height={130} alt={""} />
      <Image src={"/images/pinterest.png"} width={130} height={130} alt={""} />
      <Image src={"/images/spotify.png"} width={130} height={130} alt={""} />
      <Image src={"/images/tokopedia.png"} width={130} height={130} alt={""} />
    </div>
  );
}

//workflow

export function Workflow() {
  return (
    <div className="w-[90%] m-auto flex gap-[40px] pb-[70px] flex-wrap justify-between" id="pricing">
      <div>
        <Image src={"/images/room.png"} width={400} height={100} alt={""} />
      </div>
      <div>
        <p className="flex gap-[15px] pb-[10px] items-center">
          <Image src={"/images/Line.png"} width={100} height={2} alt="" />
          <span className="text-[#2C2C2c] font-Plus text-[28px] font-medium">
            Our Workflow
          </span>
        </p>
        <p className="text-[#2C2C2C] font-Plus text-[clamp(15px,2vw,31px)] font-bold max-w-[470px]  ">
          Our workflows are already used for hundreds of companies
        </p>
        <div className="flex gap-[30px] items-center py-[30px] flex-wrap">
          <div className="flex gap-[10px] items-center bg-[#F1F1F1] p-[10px] rounded-full">
            <Image
              src={"/images/change.png"}
              width={50}
              height={50}
              alt=""
              className="bg-[#000] p-[10px] rounded-full"
            />
            <span className="text-[#292929] font-sans font-medium text-[clamp(18px,1.5vw,25px)] pb-[10px] pr-[30px]">
              Briefing
            </span>
          </div>
          <div className="bg-[#F1F1F1] p-[10px] rounded-full">
            <Image src={"/images/frame1.png"} width={30} height={30} alt="" />
          </div>
          <div className="bg-[#F1F1F1] p-[10px] rounded-full">
            <Image width={30} height={30} src="/images/frame2.png" alt="" />
          </div>
          <div className="bg-[#F1F1F1] p-[10px] rounded-full">
            <Image width={30} height={30} src="/images/frame3.png" alt="" />
          </div>
        </div>
        <div className="flex gap-[15px] items-center pb-[30px]">
          <Image
            width={70}
            height={70}
            src="/images/play.png"
            alt=""
            className="w-[50px] h-auto"
          />
          <span className="text-[#2C2C2C] text-[clamp(20px,2vw,31px)] w-[270px] font-Plus font-bold">
            Explaining what you need
          </span>
        </div>
        <div className="text-[#AAA] text-[clamp(10px,1.5vw,20px)] font-Plus font-medium max-w-[650px]">
          Usability flesh that out, we want to empower the team with the right
          tools and guidance to uplevel our craft and build better. Can you
          ballpark the cost per unit for me golden goose they hve
        </div>
      </div>
    </div>
  );
}

//overView


