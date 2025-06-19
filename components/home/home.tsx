/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Hambuger } from "./img";
import Image from "next/image";

//features
export function Grow() {
  return (
    <div className="w-[90%] m-auto flex flex-wrap gap-[20px] pt-[70px] pb-[50px]">
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
    <div className="w-[90%] m-auto flex gap-[40px] pb-[70px] flex-wrap justify-between">
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
    <div className="w-[90%] m-auto pb-[70px]">
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

//hero secion

const blog: string[] = ["Blog", "Explore", "KnowMore", "About"];
export function Hero() {
  return (
    <div className="w-[90%] m-auto ">
      <div className="flex justify-between items-center flex-wrap pb-[40px] border-b-2 border-b-[#B4B4B4] gap-[20px]">
        <div className="flex flex-wrap gap-[clamp(20px,2.4vw,40px)] ">
          {blog.map((ele) => (
            <p
              className="text-[clamp(20px,1.7vw,25px)] font-sanstext-black "
              key={ele}
            >
              {ele}
            </p>
          ))}
        </div>
        <div className="flex gap-[15px]">
          <img src="/images/apple.png" alt="" />
          <img src="/images/playstore.png" alt="" />
        </div>
      </div>
      <div className="pt-[20px] pb-[50px] gap-[40px] flex justify-between items-center flex-wrap">
        <img src="/images/last.png" alt="" />
        <div className="flex gap-[30px]">
          <img src="/images/facebook.png" alt="" />
          <img src="/images/instargram.png" alt="" />
          <img src="/images/twitter.png" alt="" />
          <img src="/images/youtube.png" alt="" />
        </div>
      </div>
    </div>
  );
}
