import { OverView, Studies, Review, Ourpower } from "@/components/home/About";
import { Hero } from "@/components/home/Hero";
import {
  Give,
  Grow,
  Marquee,
  Workflow,
} from "@/components/home/home";
import { Navbar } from "@/components/home/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
     <Navbar />
      <Grow />
      <Give />
      <Marquee />
      <Workflow />
      <OverView />
      <Studies />
      <Review />
      <Ourpower />
      <Hero />
    </div>
  );
}
